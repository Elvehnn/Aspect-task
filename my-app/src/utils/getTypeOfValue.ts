import { ANY_OBJECT_REGEXP, NUMBER_REGEXP } from '../store/constants';

export const getTypeOfValue = (newValue: string) => {
  if (newValue === 'false' || newValue === 'true') {
    return 'boolean';
  }

  if (NUMBER_REGEXP.test(newValue)) {
    return 'number';
  }

  if (ANY_OBJECT_REGEXP.test(newValue)) {
    return 'object';
  }

  return 'string';
};
