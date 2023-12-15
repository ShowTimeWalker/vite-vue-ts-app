import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';

class RestClient {
    private readonly instance: AxiosInstance;
    private readonly requestConfig: AxiosRequestConfig;

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_APP_BASE_API as string,
            timeout: 2000
        });

        this.requestConfig = {};

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        });

        this.instance.interceptors.response.use(response => {
            return response;
        }, error => {
            this.handleError(error);
            return Promise.reject(error);
        });
    }

    private handleError(error: any): void {
        let errorMessage: string = '';
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    errorMessage = 'Unauthorized';
                    break;
                case 403:
                    errorMessage = 'Forbidden';
                    break;
                case 404:
                    errorMessage = 'Not Found Resource';
                    break;
                case 500:
                    errorMessage = 'Server Error';
                    break;
                default:
                    errorMessage = 'Network Error';
                    break;
            }
            message.error(`Request Error, Status: ${error.response.status}, Error Message: ${errorMessage}`).then(null);
        } else {
            message.error('Network Error').then(null);
        }
    }

    public setUrl(url: string): RestClient {
        this.requestConfig.url = url;
        return this;
    }

    public setHeaders(headers: Record<string, string>): RestClient {
        this.requestConfig.headers = headers;
        return this;
    }

    public setMethod(method: 'get' | 'post' | 'put' | 'delete' | 'patch'): RestClient {
        this.requestConfig.method = method;
        return this;
    }

    public setParams(params: Record<string, any>): RestClient {
        this.requestConfig.params = params;
        return this;
    }

    public call(): Promise<any> {
        return this.instance(this.requestConfig);
    }
}

export const rest = new RestClient();
