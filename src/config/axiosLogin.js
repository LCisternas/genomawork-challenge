import axios from "axios";

const axiosLogin = axios.create({
    baseURL: "https://api.staging.genoma.work/api/v1/accounts/login/"
})

export default axiosLogin