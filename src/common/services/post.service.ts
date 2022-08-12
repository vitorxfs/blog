import { getPrismicClientAdapter } from '../clients/cms-client/prismic-client.adapter';
import CmsClient from '../clients/cms-client/cms-client.interface';
import Post from '../models/post.model';

export interface IPostService {
  getPosts: () => Promise<Post[]>;
}

export interface PostServiceDependencies {
  cmsClient: CmsClient;
}

export class PostService implements IPostService {
  cmsClient: CmsClient;

  constructor ({ cmsClient }: PostServiceDependencies) {
    this.cmsClient = cmsClient;
  }

  async getPosts (): Promise<Post[]> {
    return await this.cmsClient.getPosts();
  };
}

let postService: IPostService;
export const getPostService = () => {
  if (!postService) {
    postService = new PostService({ cmsClient: getPrismicClientAdapter() });
  }

  return postService;
};
