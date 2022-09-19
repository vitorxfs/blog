import React from 'react';

import { APP_URL, DEFAULT_EMBED_POST_IMAGE } from '../../../env';
import { PostAttributes } from '../../models/post.model';

interface PostMetatagsProps {
  post: PostAttributes;
}

const PostMetatags = ({ post }: PostMetatagsProps) => {
  const postUrl = `${APP_URL}/post/${post.id}`;

  return (
    <>
      <meta property="image" content={DEFAULT_EMBED_POST_IMAGE} />
      <meta property="og:image" content={DEFAULT_EMBED_POST_IMAGE} />
      <meta property="og:image:secure_url" content={DEFAULT_EMBED_POST_IMAGE} />
      <meta property="og:image:alt" content={post.title} />
      <meta property="og:image:type" content="image/png" />

      <meta property="twitter:image" content={DEFAULT_EMBED_POST_IMAGE} />
      <meta property="twitter:image:src" content={DEFAULT_EMBED_POST_IMAGE} />
      <meta property="twitter:image:alt" content={post.title} />
      <meta property="twitter:image:type" content="image/png" />

      <meta property="description" content={post.description} />
      <meta property="og:description" content={post.description} />

      <meta property="og:url" content={postUrl} />
      <meta property="og:title" content={post.title} />
      <meta property="og:type" content="article" />

      <link rel="canonical" href={postUrl} />
    </>
  );
};

export default PostMetatags;
