import { Post } from '../../models/post.model';

interface CmsClient {
  getPostByUid(uid: string): Promise<Post>;
  getPosts(options?: { limit: number }): Promise<Post[]>;
}

export default CmsClient;
