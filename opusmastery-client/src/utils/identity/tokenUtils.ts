import jwtDecode from 'jwt-decode';

export function getLocalAccessToken(): string {
    return localStorage.getItem('accessToken') || '';
}

export function setLocalAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
}

export function getLocalRefreshToken(): string {
    return localStorage.getItem('refreshToken') || '';
}

export function setLocalRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
}

export function parseJwtPayload(token: string): unknown {
    try {
        return jwtDecode(token);
    }
    catch (error) {
        alert('Got invalid access token while trying to parse payload')
        throw error;
    }
}
