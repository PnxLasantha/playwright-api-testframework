import { APIRequestContext, request } from "@playwright/test";

export default class GetRequestBuilder {
  private readonly context: Promise<APIRequestContext>;
  readonly client: Promise<APIRequestContext>;

  constructor() {
    this.context = request.newContext();
    this.client = this.context;
  }
}

export const deleteRequest = async (bannerId: string) => {
  const client = await request.newContext();

  await client.delete(bannerId);
};
