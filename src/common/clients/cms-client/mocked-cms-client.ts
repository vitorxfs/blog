import { generateLoremIpsumPost, generateLoremIpsumSentence } from '../../helpers/lorem-ipsum-generator.helper';
import Post from '../../models/post.model';
import CmsClient from './cms-client.interface';

const MOCKED_POSTS: Post[] = Array(10).fill({}).map((_, index) => new Post({
  content: generateLoremIpsumPost(),
  description: generateLoremIpsumSentence(),
  id: `teste-${index}`,
  publishedAt: new Date().toISOString(),
  title: `This is a test: number ${index}`
}));

export class MockedCMSClientAdapter implements CmsClient {
  getPostByUid (uid: string): Promise<Post> {
    const post = this.posts.find((post) => post.id === uid);

    if (!post) {
      return Promise.reject(new Error('Post not found'));
    }

    return Promise.resolve(post);
  }

  getPosts (options: { limit: number; }): Promise<Post[]> {
    return Promise.resolve(this.buildLimitedPosts(this.posts, options?.limit));
  }

  private get posts (): Post[] {
    return MOCKED_POSTS;
  };

  private buildLimitedPosts (posts: Post[], limit?: number): Post[] {
    return limit && limit < this.posts.length
      ? posts.slice(0, limit)
      : posts;
  };
};

let mockedCMSClientAdapter: CmsClient;
export const getMockedCMSClientAdapter = (): CmsClient => {
  if (!mockedCMSClientAdapter) {
    mockedCMSClientAdapter = new MockedCMSClientAdapter();
  }

  return mockedCMSClientAdapter;
};
