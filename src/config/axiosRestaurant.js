import axios from "axios";

const axiosRestaurant = axios.create({
    baseURL: "https://genoma-challenge-app.herokuapp.com/restaurants/"
})

export default axiosRestaurant