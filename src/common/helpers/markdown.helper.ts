import { Converter, Metadata } from 'showdown';

interface HtmlFromMarkdown {
  html: string;
  metadata: Record<string, string>;
}

export const convertMarkdownToHtml = (markdown: string): HtmlFromMarkdown => {
  const converter = new Converter({ metadata: true });
  const html = converter.makeHtml(markdown);
  const metadata = converter.getMetadata(false) as Metadata;

  return {
    html,
    metadata,
  };
};
