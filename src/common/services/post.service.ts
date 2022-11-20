import CmsClient, { getCmsClient } from '@common/clients/cms-client/cms-client.interface';
import Post from '@common/models/post.model';

export interface IPostService {
  getPostByUid: (uid: string) => Promise<Post>;
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

  async getPostByUid (uid: string): Promise<Post> {
    return await this.cmsClient.getPostByUid(uid);
  }
}

let postService: IPostService;
export const getPostService = () => {
  if (!postService) {
    postService = new PostService({ cmsClient: getCmsClient() });
  }

  return postService;
};
