import test from '@playwright/test'
import GetRequestBuilder from '../helper/requestBuilders/requestBuilder'

test('sampleGet', async () => {
    const query = {
        per_page: 1,
    }
    const url = 'https://api.github.com/repos/Microsoft/playwright/pulls'
    const get = new GetRequestBuilder()
    const res = await get.getRequest(url, {
        queryParameters: query,
    })
    console.log(res.status())
})
