import { defineStore } from 'pinia';
import { getAccessToken, getRefreshToken } from 'src/utils/identity/tokenUtils';
import { apiInstance } from 'boot/axios';

export const useIdentityStore = defineStore('identity', () => {
    async function authenticateUser(credentials: { email1: string, password1: string }): Promise<string> {
        const response = await apiInstance.post('/identity/login', JSON.stringify(credentials));

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;

        setTokens({ accessToken, refreshToken });
        return accessToken;
    }

    async function refreshToken(): Promise<string> {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        if (accessToken && refreshToken) {
            setTokens({ accessToken, refreshToken })
        }

        return accessToken;
    }

    function setTokens(tokens: { accessToken: string, refreshToken: string }) {
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
    }

    return { authenticateUser, refreshToken };
});
