import { test as baseTest } from '@playwright/test'
import RequestBuilder from '../requestBuilders/requestBuilder'

const testFixture = baseTest.extend<{
    requestBuilder: RequestBuilder
}>({
    requestBuilder: async ({}, use) => {
        await use(new RequestBuilder())
    },
})

export const test = testFixture
export const expect = testFixture.expect
