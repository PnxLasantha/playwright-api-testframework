import { expect, test } from '../helper/fixture/fixtures'

test('sample get request', async ({ requestBuilder }) => {
    const response = await requestBuilder.getRequest('/')
    expect(response.status()).toEqual(200)
})

test('sample post', async ({ requestBuilder }) => {
    const body = {
        name: 'Natsu',
        job: 'leader',
    }
    const response = await requestBuilder.postRequest('/api/users', { body: body })
    expect(response.status()).toEqual(201)
    const json = await response.json()
    expect(json.id).not.toBeNull()
})
