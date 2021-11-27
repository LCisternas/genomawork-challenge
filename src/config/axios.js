import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://genoma-challenge-app.herokuapp.com/restaurants/"
})

export default axiosClient