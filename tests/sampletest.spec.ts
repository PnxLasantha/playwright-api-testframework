import { test } from '../helper/fixture/fixtures'

test('sample get request', async ({ requestBuilder }) => {
    const response = await requestBuilder.getRequest('/')
    console.log(response.status())
})

test('sample post', async ({ requestBuilder }) => {
    const body = {
        name: 'Natsu',
        job: 'leader',
    }
    const response = await requestBuilder.postRequest('/api/users', { body: body })
    console.log(response.status())
    console.log(await response.json())
})
