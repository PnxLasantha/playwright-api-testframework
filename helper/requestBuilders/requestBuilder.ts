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
        console.debug('doing :',method,'options',options)
        return await client[method](url, options)
    }
    getRequest(url: string, requestParameters?: RequestParameters): Promise<APIResponse> {
        
        return this.sendRequest(url, 'get', requestParameters)
    }

    postRequest(url: string, requestParameters?: RequestParameters) {
        return this.sendRequest(url, 'post', requestParameters)
    }

    putRequest(url: string, requestParameters?: RequestParameters) {
        return this.sendRequest(url, 'put', requestParameters)
    }

    patchRequest(url: string, requestParameters?: RequestParameters) {
        return this.sendRequest(url, 'patch', requestParameters)
    }

    deleteRequest(url: string, requestParameters?: RequestParameters) {
        return this.sendRequest(url, 'delete', requestParameters)
    }
}
