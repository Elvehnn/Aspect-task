import { CONTENT_REGEXP } from '../store/constants';
import { Button, Label, Panel } from '../store/interfaces';
import { stringToPropsObject } from './stringToPropsObject';

export const getObjectFromString = (value: string) => {
  const objectFromValue = Array.from(value.matchAll(CONTENT_REGEXP))[0].groups || {};
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
