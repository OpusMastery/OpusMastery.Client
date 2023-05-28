import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getLocalAccessToken, getLocalRefreshToken, setLocalAccessToken, setLocalRefreshToken } from 'src/utils/identity/tokenUtils';
import { apiInstance } from 'boot/axios';
import { AuthenticationTokens, UserCredentials } from 'stores/models';

export const REGISTRATION_ENDPOINT = '/api/v1/identity/register';
export const LOGIN_ENDPOINT = '/api/v1/identity/login';
export const REFRESH_TOKEN_ENDPOINT = '/api/v1/identity/refresh-token';

export const useIdentityStore = defineStore('identity', () => {
    const storeAccessToken = ref('');
    const storeRefreshToken = ref('');

    async function authenticateUser(userCredentials: UserCredentials): Promise<string> {
        const response = await apiInstance.post(LOGIN_ENDPOINT, JSON.stringify(userCredentials));

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        const redirectUrl = response.data.redirectUrl;

        setAuthenticationTokens({ accessToken, refreshToken });
        return accessToken;
    }

    function refreshAuthenticationTokens(): string {
        const accessToken = getLocalAccessToken();
        const refreshToken = getLocalRefreshToken();

        if (accessToken && refreshToken) {
            setAuthenticationTokens({ accessToken, refreshToken })
        }

        return accessToken;
    }

    function setAuthenticationTokens(authenticationTokens: AuthenticationTokens) {
        storeAccessToken.value = authenticationTokens.accessToken;
        storeRefreshToken.value = authenticationTokens.refreshToken;
        setLocalAccessToken(authenticationTokens.accessToken);
        setLocalRefreshToken(authenticationTokens.refreshToken);
    }

    return { authenticateUser, refreshAuthenticationTokens };
});
