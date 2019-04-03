import axios from "axios";

export default async term => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    return response.data;
}