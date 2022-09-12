import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
/**
 * @name HttpClientInterface
 * @description interface for our httlpclient wrapper
 */
export interface HttpClientInterface {
  get<R>(parameter: HttpRequestParamsInterface): Promise<R>;
}
