import axios, { AxiosInstance } from "axios"

export const AddHeader = (token : string , baseURL : string) =>{

    const axiosInstance : AxiosInstance = axios.create({
        baseURL,
        headers : {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        }
    })

    return axiosInstance
}