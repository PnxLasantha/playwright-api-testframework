
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

test('mocking entire response', async({page})=>{

    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits',async(route)=>{
        const json = [{name : 'Natsu',id : 210}]
       await route.fulfill({json})
    })
   await page.goto('https://demo.playwright.dev/api-mocking')

   await  expect(page.getByText('Natsu')).toBeVisible()
 
  
})

test('mocking adding data',async({page})=>{
    const url = 'https://demo.playwright.dev/api-mocking'
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async(route)=>{
      const res = await route.fetch()
      const json = await res.json()
      json.push({name : 'Gray', id:876})
      await route.fulfill({body : JSON.stringify(json)})
    })
     await page.goto(url)
   
   await  expect(page.getByText('Gray')).toBeVisible()

    
})
