import axios from "axios";

const axiosLogout = axios.create({
    baseURL: "https://api.staging.genoma.work/api/v1/accounts/logout/"
})

export default axiosLogout