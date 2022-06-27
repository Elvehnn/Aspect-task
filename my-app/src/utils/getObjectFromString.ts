import { stringToObject } from './stringToObject';

export const getObjectFromString = (value: string) => {
  const elementRegExp =
    /\{type: '(?<type>label|button|panel)', props: (?<props>\{.+?\})(?:, content: \[(?<content>\{.+\})*?\])?\}/gi;

  const newObjectValue = Array.from(value.matchAll(elementRegExp))[0].groups || {};
  const propsObject = stringToObject(newObjectValue.props);

  if (!newObjectValue.content) {
    delete newObjectValue.content;
  }

  return { ...newObjectValue, props: { ...propsObject } };
};
