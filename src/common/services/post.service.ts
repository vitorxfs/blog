export interface Post {
  description: string;
  id: string;
  publishedAt: string;
  title: string;
}

export interface IPostService {
  getPosts: () => Post[];
}

export class PostService implements IPostService {
  getPosts (): Post[] {
    const postsMock: Post[] = new Array<Post>(5).fill({
      id: '',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur faucibus ornare. Etiam eget auctor neque.',
      publishedAt: new Date().toLocaleString('pt-br', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }).map((post, index) => ({ ...post, id: index.toString() }));

    return postsMock;
  };
}

let postService: IPostService;
export const getPostService = () => {
  if (!postService) {
    postService = new PostService();
  }

  return postService;
};
