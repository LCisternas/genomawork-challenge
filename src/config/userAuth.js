import axiosLogin from "./axiosLogin";

const userAuth = info => {
    if(info) {
        axiosLogin.defaults.headers.common['Authorization'] = info
    } else {
        delete axiosLogin.defaults.headers.common['Authorization']
    }
}

export default userAuth;