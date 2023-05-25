import { apiInstance } from 'boot/axios';

export const loginWithPassword = async (payload: { email: string, password: string }): Promise<void> => {
    const response = await apiInstance.post('/identity/login', payload);
    apiInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
    localStorage.setItem('token', response.data.accessToken);
};
