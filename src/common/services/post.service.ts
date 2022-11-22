import { CmsClientSync } from '@common/clients/cms-client/cms-client.interface';
import Post from '@common/models/post.model';

export interface IPostService {
  getPostByUid: (uid: string) => Post;
  getPosts: () => Post[];
}

export interface PostServiceDependencies {
  cmsClient: CmsClientSync;
}

export class PostService implements IPostService {
  cmsClient: CmsClientSync;

  constructor ({ cmsClient }: PostServiceDependencies) {
    this.cmsClient = cmsClient;
  }

  getPosts (): Post[] {
    return this.cmsClient.getPosts();
  };

  getPostByUid (uid: string): Post {
    return this.cmsClient.getPostByUid(uid);
  }
}
