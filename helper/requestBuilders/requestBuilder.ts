import { APIRequestContext, APIResponse, request } from '@playwright/test'
import { Method, RequestParameters } from '../types/requestParameters'

export default class RequestBuilder {
    private context: Promise<APIRequestContext>

    constructor() {
        this.context = request.newContext()
    }

    private async sendRequest(url: string, method: Method, requestParameters?: RequestParameters) {
        const client = await this.context
        const options = {
            headers: requestParameters?.headers,
            data: requestParameters?.body,
            multipart: requestParameters?.multipart,
            params: requestParameters?.queryParameters,
        }
        return await client[method](url, options)
    }
    async getRequest(url: string, requestParameters?: RequestParameters): Promise<APIResponse> {
        return await this.sendRequest(url, 'get', requestParameters)
    }

    async postRequest(url: string, requestParameters?: RequestParameters) {
        return await this.sendRequest(url, 'post', requestParameters)
    }

    async putRequest(url: string, requestParameters?: RequestParameters) {
        return await this.sendRequest(url, 'put', requestParameters)
    }

    async patchRequest(url: string, requestParameters?: RequestParameters) {
        return await this.sendRequest(url, 'patch', requestParameters)
    }
}
