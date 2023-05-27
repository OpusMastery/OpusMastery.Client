import jwtDecode from 'jwt-decode';

export function getAccessToken(): string {
    return localStorage.getItem('token') || '';
}

export function getRefreshToken(): string {
    return localStorage.getItem('refreshToken') || '';
}

export function parseJwt(token: string): unknown {
    try {
        return jwtDecode(token);
    }
    catch (error) {
        alert('Got invalid access token while trying to parse JWT!')
        throw error;
    }
}
