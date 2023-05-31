import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getLocalAccessToken, getLocalRefreshToken, parseJwtPayload, setLocalAccessToken, setLocalRefreshToken } from 'src/utils/identity/tokenUtils';
import axios from 'axios';
import { apiInstance } from 'boot/axios';
import { AuthenticationTokens, UserCredentials } from 'stores/models';

export const REGISTRATION_ENDPOINT = '/api/v1/identity/register';
export const LOGIN_ENDPOINT = '/api/v1/identity/login';
export const REFRESH_TOKEN_ENDPOINT = '/api/v1/identity/refresh-token';

export const useIdentityStore = defineStore('identity', () => {
    const userId = ref('');
    const storeAccessToken = ref('');
    const storeRefreshToken = ref('');

    async function authenticateUser(userCredentials: UserCredentials): Promise<void> {
        try {
            // const payload = { email: userCredentials.email, password: userCredentials.password };
            const response = await apiInstance.post(LOGIN_ENDPOINT, userCredentials);

            setUserId('');
            setNewIdentity(response.data.accessToken, response.data.refreshToken);
        } catch (_) {
            clearAuthenticationCredentials();
            this.router.push('/sign-in')
        }
    }

    async function refreshAccessToken(): Promise<void> {
        try {
            const decodedAccessToken = parseJwtPayload(getLocalAccessToken());
            const refreshToken = getLocalRefreshToken();

            const payload = { userId: decodedAccessToken.IdentityId, refreshToken };
            const response = await apiInstance.post(REFRESH_TOKEN_ENDPOINT, payload);

            setUserId('');
            setNewIdentity(response.data.accessToken, response.data.refreshToken);
        } catch (_) {
            clearAuthenticationCredentials();
            this.router.push('/sign-in')
        }
    }

    function setNewIdentity(accessToken: string, refreshToken: string) {
        if (accessToken && refreshToken) {
            const decodedAccessToken = parseJwtPayload(accessToken);
            setUserId(decodedAccessToken.IdentityId);
            setAuthenticationCredentials({ accessToken, refreshToken });
        }
    }

    function setUserId(value: string) {
        userId.value = value;
    }

    function setAuthenticationCredentials(authenticationTokens: AuthenticationTokens) {
        storeAccessToken.value = authenticationTokens.accessToken;
        storeRefreshToken.value = authenticationTokens.refreshToken;
        setLocalAccessToken(authenticationTokens.accessToken);
        setLocalRefreshToken(authenticationTokens.refreshToken);
    }

    function clearAuthenticationCredentials() {
        storeAccessToken.value = '';
        storeRefreshToken.value = '';
        setLocalAccessToken('');
        setLocalRefreshToken('');
        delete axios.defaults.headers.common['Authorization'];
    }

    return { storeAccessToken, authenticateUser, refreshAccessToken, userId, storeRefreshToken };
});
