import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}

const defaultHeaders = {
    Accept: 'application/json'
};

const apiInstance = axios.create({
    baseURL: 'https://opusmastery.org/api',
    headers: defaultHeaders
});

export default boot(({ app }) => {
    app.config.globalProperties.$axios = axios;
    app.config.globalProperties.$api = apiInstance;
});

export { apiInstance };
