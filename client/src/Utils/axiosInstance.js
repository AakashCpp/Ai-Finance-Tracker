import axios from 'axios';
import { BASE_URL } from './apiPath';

const axiosInstance = axios.create({
    baseURL : BASE_URL,
    timeout: 10000,  // Timeout set to 10 seconds
    headers:{
        "Content-Type":"application/json", // Request content type
        Accept: "application/json", // Accept JSON responses
    },
})

// Request Interceptor
axiosInstance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem("token");  // Get token from localStorage
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;  // Add token to header   //Bearer => This ensures that every request automatically includes the token for authentication.
    }
    return config; // Return the updated config
},
(error)=>{
    return Promise.reject(error);  // Reject the request if there's an error
}
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        // Handle common errors globally
        if(error.response){
            if(error.response.status === 401){
                // Redirect to login page
                window.location.href = "/login";
            }else if(error.response.status === 500){
                console.error("Server error. Please try again later.")
            }
        }else if(error.code === "ECONNABORTED"){    //timeout error 
            console.error("Request timeout. Please try again");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;