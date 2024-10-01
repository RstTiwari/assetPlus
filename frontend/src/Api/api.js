const axios = require("axios");

export const apiCall = async (method, route, payload) => {
    let config = {
        url: `http://localhost:8000/${route}`,
        method: method,
        data: payload,
    };
    let response = await axios(config);
    return response.data;
};
