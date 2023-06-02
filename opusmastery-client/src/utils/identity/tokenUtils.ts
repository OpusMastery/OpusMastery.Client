import jwtDecode from 'jwt-decode';

export function parseJwtPayload(token: string): any {
    try {
        return jwtDecode(token);
    }
    catch (error) {
        alert('Got invalid JWT while trying to parse payload')
        throw error;
    }
}
