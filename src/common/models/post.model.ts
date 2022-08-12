export interface PostAttributes {
  description: string;
  id: string;
  publishedAt: string;
  title: string;
}

export class Post {
  description: string;
  id: string;
  publishedAt: string;
  title: string;

  constructor ({
    description,
    id,
    publishedAt,
    title
  }: PostAttributes) {
    this.description = description;
    this.id = id;
    this.publishedAt = publishedAt;
    this.title = title;
  }

  toJSON (): PostAttributes {
    return {
      description: this.description,
      id: this.id,
      publishedAt: this.publishedAt,
      title: this.title
    };
  }
}

export default Post;
