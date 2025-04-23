import axios, { AxiosRequestConfig, Method } from "axios";

export const axiosInstance = axios.create({});

interface ApiConnectorParams {
    method: Method;
    url: string;
    bodyData?: any;
    headers?: any;
    params?: any;
}

export const apiConnector = ({ method, url, bodyData, headers, params }: ApiConnectorParams) => {
    const config: AxiosRequestConfig = {
        method: method,
        url: url,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    };

    return axiosInstance(config);
};