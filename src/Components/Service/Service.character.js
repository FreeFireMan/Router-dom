import axios from "axios";

let baseUrl = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama'
});

const getAllCharacter = () => {
    return baseUrl.get('/cast');
}

export {getAllCharacter};
