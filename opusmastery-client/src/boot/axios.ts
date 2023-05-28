import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { useIdentityStore } from 'stores/indentity/identityStore';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}

const defaultHeaders = {
    Accept: 'application/json'
};

const apiInstance = axios.create({
    baseURL: 'https://opusmastery.org',
    headers: defaultHeaders
});

export default boot(({ app }) => {
    axios.interceptors.request.use(async (config) => {
        const identityStore = useIdentityStore();
        const accessToken = identityStore.refreshAuthenticationTokens();

        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });

    axios.interceptors.response.use(
        (response) => response,
        (error) => alert(error),
    );

    app.config.globalProperties.$axios = axios;
    app.config.globalProperties.$api = apiInstance;
});

export { apiInstance };
