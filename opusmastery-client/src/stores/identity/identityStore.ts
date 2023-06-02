import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { apiInstance } from 'boot/axios';
import { useLocalStorage } from '@vueuse/core';
import { parseJwtPayload } from 'src/utils/identity/tokenUtils';
import { AuthenticationTokens, UserCredentials } from 'stores/models';

export const REGISTRATION_ENDPOINT = '/api/v1/identity/register';
export const LOGIN_ENDPOINT = '/api/v1/identity/login';
export const REFRESH_TOKEN_ENDPOINT = '/api/v1/identity/refresh-token';

export const useIdentityStore = defineStore('identity', () => {
    const userId = ref(useLocalStorage('userId', ''));
    const accessToken = ref(useLocalStorage('accessToken', ''));
    const refreshToken = ref(useLocalStorage('refreshToken', ''));

    async function authenticateUser(userCredentials: UserCredentials): Promise<void> {
        try {
            const response = await apiInstance.post(LOGIN_ENDPOINT, userCredentials);

            setUserId('');
            setNewIdentity(response.data.accessToken, response.data.refreshToken);
            this.router.push({ name: 'PortalPage' })
        } catch (_) {
            clearAuthenticationCredentials();
            this.router.push({ name: 'SignInPage' })
        }
    }

    async function refreshAccessToken(): Promise<void> {
        try {
            const decodedAccessToken = parseJwtPayload(this.accessToken);
            const payload = { userId: decodedAccessToken.IdentityId, refreshToken };
            const response = await apiInstance.post(REFRESH_TOKEN_ENDPOINT, payload);

            setUserId('');
            setNewIdentity(response.data.accessToken, response.data.refreshToken);
        } catch (_) {
            clearAuthenticationCredentials();
            this.router.push({ name: 'SignInPage' })
        }
    }

    function setNewIdentity(accessToken: string, refreshToken: string) {
        if (accessToken && refreshToken) {
            setUserId(parseJwtPayload(accessToken).IdentityId);
            setAuthenticationCredentials({ accessToken, refreshToken });
        }
    }

    function setUserId(value: string) {
        userId.value = value;
    }

    function setAuthenticationCredentials(authenticationTokens: AuthenticationTokens) {
        accessToken.value = authenticationTokens.accessToken;
        refreshToken.value = authenticationTokens.refreshToken;
    }

    function clearAuthenticationCredentials() {
        userId.value = '';
        accessToken.value = '';
        refreshToken.value = '';
        delete axios.defaults.headers.common['Authorization'];
    }

    return { authenticateUser, refreshAccessToken, accessToken, refreshToken, userId };
});
