import http from '../http-common';

class AuthService {
    async login(data) {
        let result = await http.post('auth/login', data);
        return result.data;
    }

    async signup(data) {
        let result = await http.post('auth/signup', data);
        return result.data;
    }
}

export default new AuthService();
