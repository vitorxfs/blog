export interface PostAttributes {
  content: string;
  description: string;
  id: string;
  publishedAt: string;
  title: string;
}

export class Post {
  content: string;
  description: string;
  id: string;
  publishedAt: string;
  title: string;

  constructor ({
    content,
    description,
    id,
    publishedAt,
    title
  }: PostAttributes) {
    this.content = content;
    this.description = description;
    this.id = id;
    this.publishedAt = publishedAt;
    this.title = title;
  }

  toJSON (): PostAttributes {
    return {
      content: this.content,
      description: this.description,
      id: this.id,
      publishedAt: this.publishedAt,
      title: this.title
    };
  }
}

export default Post;
