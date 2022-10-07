import { loremIpsum } from 'lorem-ipsum';

export enum LoremIpsumFormat {
  Html = 'html',
  Plain = 'plain',
}

export const generateLoremIpsum = ({
  numberOfParagraphs,
  numberOfSentencesPerParagraph,
  format = LoremIpsumFormat.Plain
} : {
  numberOfParagraphs: number,
  numberOfSentencesPerParagraph: number,
  format?: LoremIpsumFormat,
}) => {
  return loremIpsum({
    count: numberOfParagraphs,
    units: 'paragraphs',
    paragraphLowerBound: numberOfSentencesPerParagraph,
    paragraphUpperBound: numberOfSentencesPerParagraph,
    format
  });
};

export const generateLoremIpsumPost = (numberOfParagraphs: number = 5): string => {
  return generateLoremIpsum({ numberOfParagraphs, format: LoremIpsumFormat.Html, numberOfSentencesPerParagraph: 5 });
};

export const generateLoremIpsumSentence = () => {
  return generateLoremIpsum({
    numberOfParagraphs: 1,
    numberOfSentencesPerParagraph: 1
  });
};
