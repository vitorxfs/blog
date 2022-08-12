import { Post } from '../../models/post.model';

interface CmsClient {
  getPosts(options?: { limit: number }): Promise<Post[]>;
}

export default CmsClient;
