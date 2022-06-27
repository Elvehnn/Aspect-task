import { Button, Label, Panel } from '../store/interfaces';
import { stringToPropsObject } from './stringToPropsObject';

export const getObjectFromString = (value: string) => {
  const elementRegExp =
    /\{type: '(?<type>label|button|panel)', props: (?<props>\{.+?\})(?:, content: \[(?<content>\{.+\})*?\])?\}?/gi;

  const objectFromValue = Array.from(value.matchAll(elementRegExp))[0].groups || {};
  const propsObject = stringToPropsObject(objectFromValue.props);
  const typeValue = objectFromValue.type;
  let contentArray: Array<Panel | Label | Button> = [];

  if (objectFromValue.content) {
    const contentStringsArray = objectFromValue.content.split(/},/g);
    contentArray = contentStringsArray.map((string) => getObjectFromString(string)) as Array<
      Panel | Label | Button
    >;
  }

  return { type: typeValue, props: { ...propsObject }, content: [...contentArray] };
};
