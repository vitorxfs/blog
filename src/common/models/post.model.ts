export interface PostAttributes {
  content: string;
  description: string;
  id: string;
  imageUrl?: string;
  lang: string;
  publishedAt: string;
  title: string;
}

export class Post {
  content: string;
  description: string;
  id: string;
  imageUrl?: string;
  lang: string;
  publishedAt: string;
  title: string;

  constructor ({
    content,
    description,
    id,
    imageUrl,
    lang,
    publishedAt,
    title
  }: PostAttributes) {
    this.content = content;
    this.description = description;
    this.id = id;
    this.lang = lang;
    this.imageUrl = imageUrl;
    this.publishedAt = publishedAt;
    this.title = title;
  }

  toJSON (): PostAttributes {
    return {
      content: this.content,
      description: this.description,
      id: this.id,
      lang: this.lang,
      imageUrl: this.imageUrl,
      publishedAt: this.publishedAt,
      title: this.title,
    };
  }
}

export default Post;
