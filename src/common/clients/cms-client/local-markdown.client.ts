import fs from 'fs';
import path from 'path';

import { convertMarkdownToHtml } from '@common/helpers/markdown.helper';
import { CmsClientSync } from './cms-client.interface';
import Post from '@common/models/post.model';

interface PostMetadata {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  lang: string;
}

export class LocalMarkdownClient implements CmsClientSync {
  getPostByUid (uid: string): Post {
    const markdown = this.findMarkdownPost(uid);

    if (!markdown) {
      throw new Error('Post not found');
    }

    const post = this.buildPost(markdown, uid);

    return post;
  }

  getPosts (): Post[] {
    const slugs = this.getAllSlugs();

    return slugs.map((slug) => {
      const markdown = this.findMarkdownPost(slug);
      return this.buildPost(markdown, slug);
    });
  }

  private getAllSlugs (): string[] {
    const rootFolderPath = path.join(process.cwd(), 'src/posts');

    return fs.readdirSync(rootFolderPath);
  }

  private findMarkdownPost (slug: string): string {
    const postFilePath = path.join(process.cwd(), 'src/posts', slug, 'index.md');

    return fs.readFileSync(postFilePath).toString('utf-8');
  }

  private buildPost (markdown: string, slug: string): Post {
    const { html, metadata } = convertMarkdownToHtml(markdown);
    const {
      title,
      description,
      image,
      lang,
      publishedAt,
    } = this.parseMetadata(metadata);

    return new Post({
      content: html,
      description,
      id: slug,
      imageUrl: image,
      lang,
      publishedAt,
      title,
    });
  }

  private parseMetadata (json: Record<string, string>): PostMetadata {
    return {
      description: json.description,
      image: json.image,
      lang: json.lang,
      publishedAt: json.publishedAt,
      title: json.title
    };
  }
};

let localMarkdownClient: CmsClientSync;
export const getLocalMarkdownClient = (): CmsClientSync => {
  if (!localMarkdownClient) {
    localMarkdownClient = new LocalMarkdownClient();
  }

  return localMarkdownClient;
};
