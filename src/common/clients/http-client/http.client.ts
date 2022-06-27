export interface HttpAttributes {
  url: string;
  headers?: Record<string, any>;
}

export interface HttpAttributesWithBody extends HttpAttributes {
  body: Record<string, any>;
}

export interface HttpResponse {
  body?: Record<string, any>;
  status: number;
}

interface HttpClient {
  get: (attr: HttpAttributes) => Promise<HttpResponse>;
  post: (attr: HttpAttributesWithBody) => Promise<HttpResponse>;
  patch: (attr: HttpAttributesWithBody) => Promise<HttpResponse>;
  delete: (attr: HttpAttributes) => Promise<HttpResponse>;
}

export default HttpClient;
