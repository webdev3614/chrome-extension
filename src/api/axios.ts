import axios from "axios";
import {dev} from "@/config";

const axiosInstance = axios.create({
    baseURL: dev.server.url,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const jwt = JSON.parse(token).jwt
            config.headers.Authorization = `Bearer ${jwt}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

type ResponseType = {
    data: any,
    err: string | null
}

export const fetchData = async <T>(url: string): Promise<ResponseType> => {
    const response: ResponseType = {
        data: null,
        err: null
    }
    try {
        const res = await axiosInstance.get<T>(url)
        return {
            ...response,
            data: res.data
        }
    } catch (err: any) {
        return {
            ...response,
            err: err.message || "Something went wrong"
        }
    }
}

export const headData = async <T>(url: string): Promise<ResponseType> => {
    const response: ResponseType = {
        data: null,
        err: null
    }
    try {
        const res = await axiosInstance.head<T>(url)
        return {
            ...response,
            data: res.data
        }
    } catch (err: any) {
        return {
            ...response,
            err: err.message || "Something went wrong"
        }
    }
}

export const postData = async <T>(url: string, data: any): Promise<ResponseType> => {
    const response: ResponseType = {
        data: null,
        err: null
    }
    try {
        const res = await axiosInstance.post<T>(url, data)
        return {
            ...response,
            data: res.data
        }
    } catch (err: any) {
        return {
            ...response,
            err: err?.response?.data?.message || err.message || "Something went wrong"
        }
    }
}


export const putData = async <T>(url: string, data: any): Promise<ResponseType> => {
    const response: ResponseType = {
        data: null,
        err: null
    }
    try {
        const res = await axiosInstance.put<T>(url, data)
        return {
            ...response,
            data: res.data
        }
    } catch (err: any) {
        return {
            ...response,
            err: err.message || "Something went wrong"
        }
    }
}