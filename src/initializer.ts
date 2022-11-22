import { CmsClientSync } from '@common/clients/cms-client/cms-client.interface';
import { IPostService, PostService } from '@common/services/post.service';
import { LocalMarkdownClient } from '@common/clients/cms-client/local-markdown.client';

export const getCmsClient = (): CmsClientSync => {
  return new LocalMarkdownClient();
};

export const getPostService = (): IPostService => {
  return new PostService({ cmsClient: getCmsClient() });
};
