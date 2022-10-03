export const setLogin = (user) => {
    return {
        type: 'login/login',
        payload: user,
    };
};
