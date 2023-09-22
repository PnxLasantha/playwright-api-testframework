import { FullConfig } from '@playwright/test'
import { getEnv } from '../playwright.config'

export default async function globalSetup(config: FullConfig) {
    getEnv()
}
