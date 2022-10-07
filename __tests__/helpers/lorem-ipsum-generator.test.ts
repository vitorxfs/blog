/* eslint-disable no-useless-escape */
import 'jest';

import { generateLoremIpsum, LoremIpsumFormat } from '../../src/common/helpers/lorem-ipsum-generator.helper';

describe('Lorem ipsum generator', () => {
  it('generates one paragraph with five sentences', () => {
    const loremIpsum = generateLoremIpsum({
      numberOfParagraphs: 1,
      numberOfSentencesPerParagraph: 5,
      format: LoremIpsumFormat.Plain
    });

    const regex = /[\S+.]{5}/;

    expect(regex.test(loremIpsum)).toBeTruthy();
  });

  it('generates two plain paragraph with five sentences each', () => {
    const loremIpsum = generateLoremIpsum({
      numberOfParagraphs: 2,
      numberOfSentencesPerParagraph: 5,
      format: LoremIpsumFormat.Plain
    });

    const regex = /(.+[\.|\?|\!]){5}\n(.+[\.|\?|\!]){5}/;

    expect(regex.test(loremIpsum)).toBeTruthy();
  });

  it('generates a html paragraph', () => {
    const loremIpsum = generateLoremIpsum({
      numberOfParagraphs: 1,
      numberOfSentencesPerParagraph: 5,
      format: LoremIpsumFormat.Html
    });

    const regex = /<p>.+<\/p>/;

    expect(regex.test(loremIpsum)).toBeTruthy();
  });
});
