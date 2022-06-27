import axios, { AxiosInstance } from 'axios';
import HttpClient, { HttpAttributes, HttpAttributesWithBody, HttpResponse } from './http.client';

export class AxiosHttpClient implements HttpClient {
  private ax: AxiosInstance;

  constructor () {
    this.ax = axios;
  }

  get ({
    headers,
    url
  }: HttpAttributes): Promise<HttpResponse> {
    return this.ax.get(url, { headers });
  }

  post ({
    body,
    headers,
    url
  }: HttpAttributesWithBody): Promise<HttpResponse> {
    return this.ax.post(url, body, { headers });
  }

  patch ({
    body,
    headers,
    url
  }: HttpAttributesWithBody): Promise<HttpResponse> {
    return this.ax.patch(url, body, { headers });
  }

  delete ({
    headers,
    url
  }: HttpAttributes): Promise<HttpResponse> {
    return this.ax.delete(url, { headers });
  }
};

let axiosHttpClient: HttpClient;
const getAxiosHttpClient = (): HttpClient => {
  if (!axiosHttpClient) {
    axiosHttpClient = new AxiosHttpClient();
  }

  return axiosHttpClient;
};

export default getAxiosHttpClient;
