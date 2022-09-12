import axios, { AxiosResponse } from "axios";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { HttpClientInterface } from "./HttpClient.interface";

export class HttpClientModel implements HttpClientInterface {
  get<R>(parameters: HttpRequestParamsInterface): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      const { url } = parameters;
      axios
        .get(url)
        .then((response: AxiosResponse) => {
          resolve(response.data as R);
        })
        .catch((response: AxiosResponse) => {
          console.info("-----rejecting----");
          reject(response);
        });
    });
  }
}

export const HttpClient: HttpClientInterface = new HttpClientModel();
