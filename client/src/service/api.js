import axios from 'axios';



const URL = 'http://localhost:8000';


 export   const SignupAPI = async (data) => {
    try {
        const response = await axios.post(`${URL}/signup`, data);
        return response;
    } catch (error) {
        return error.response;
    }
};

export   const LoginAPI = async (data) => {
    try {
        const response = await axios.post(`${URL}/login`, data);
        return response;
    } catch (error) {
        return error.response;
    }
};



// get ---  backend to frontend
// post--  frontend to backend