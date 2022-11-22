import { Post } from '@common/models/post.model';

export interface CmsClient {
  getPostByUid(uid: string): Promise<Post>;
  getPosts(options?: { limit: number }): Promise<Post[]>;
}

export interface CmsClientSync {
  getPostByUid(uid: string): Post;
  getPosts(): Post[];
}

export default CmsClient;
