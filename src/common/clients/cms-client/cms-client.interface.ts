import { ENVIRONMENT } from 'src/env';
import { getMockedCMSClientAdapter } from './mocked-cms-client';
import { getPrismicClientAdapter } from './prismic-client.adapter';
import { Post } from '@common/models/post.model';

interface CmsClient {
  getPostByUid(uid: string): Promise<Post>;
  getPosts(options?: { limit: number }): Promise<Post[]>;
}

export default CmsClient;

let cmsClient: CmsClient;
export const getCmsClient = (): CmsClient => {
  if (!cmsClient) {
    cmsClient = ENVIRONMENT === 'development'
      ? getMockedCMSClientAdapter()
      : getPrismicClientAdapter();
  }

  return cmsClient;
};
