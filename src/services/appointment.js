import http from '../http-common';

class AppointmentService {
    async getAppointment(data) {
        const result = await http.get('/appointment', {
            headers: {
                'x-access-token': data.accessToken,
            },
        });

        return result.data;
    }

    async addAppointment(data) {
        return http.post('auth/login', data);
    }
}

export default new AppointmentService();
