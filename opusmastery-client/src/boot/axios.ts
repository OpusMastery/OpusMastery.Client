import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { useIdentityStore } from 'stores/identity/identityStore';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}

const apiInstance = axios.create({
    baseURL: 'https://opusmastery.org',
    headers: {
        Accept: 'application/json',
    },
});

export default boot(() => {
    apiInstance.interceptors.request.use((config) => {
        const accessToken = useIdentityStore().accessToken;
        console.log(accessToken);

        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });

    apiInstance.interceptors.response.use(
        (response) => response,
        (error) => console.log(error),
    );
});

export { apiInstance };
