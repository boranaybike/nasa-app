import { IApod } from "@/models/ApodModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";
import { ITLEMember } from "@/models/TLEModel.interface";

export class NasaService {
  getApod() {
    const apodRequest: HttpRequestParamsInterface = {
      url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    };
    return HttpClient.get<IApod>(apodRequest);
  }
  getTleList() {
    const tleRequest: HttpRequestParamsInterface = {
      url: "https://tle.ivanstanojevic.me/api/tle/",
    };
    return HttpClient.get<ITLEMember>(tleRequest);
  }
}
