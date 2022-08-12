import { Client as PrismicClient, createClient } from '@prismicio/client';

import { PRISMIC_REPOSITORY_NAME } from '../../../env';
import CmsClient from './cms-client.interface';
import Post from '../../models/post.model';

interface PrismicClientAdapterDependencies {
  prismicClient: PrismicClient;
}

export class PrismicClientAdapter implements CmsClient {
  prismicClient: PrismicClient;

  constructor ({ prismicClient }: PrismicClientAdapterDependencies) {
    this.prismicClient = prismicClient;
  }

  async getPosts (options?: { limit: number }): Promise<Post[]> {
    const posts = await this.prismicClient.getAllByType('posts', {
      limit: options?.limit,
      orderings: {
        field: 'first_publication_date',
        direction: 'desc'
      }
    });

    return posts.map((post) => this.postFromJSON(post));
  }

  private postFromJSON (document: Record<string, any>): Post {
    return new Post({
      description: document.data.description,
      id: document.uid,
      publishedAt: document.first_publication_date,
      title: document.data.title
    });
  }
}

export default PrismicClientAdapter;

let prismicClientAdapter: CmsClient;
export const getPrismicClientAdapter = (): CmsClient => {
  if (!prismicClientAdapter) {
    prismicClientAdapter = new PrismicClientAdapter({
      prismicClient: createClient(PRISMIC_REPOSITORY_NAME)
    });
  }

  return prismicClientAdapter;
};
