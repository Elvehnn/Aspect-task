import { RootState } from '../store/store';
import { getDestination } from './getDestination';

export const validatePath = (pathArray: string[], content: RootState) => {
  const destination = getDestination(pathArray, content);

  if (typeof destination === 'boolean') {
    return ``;
  }

  return destination ? '' : `Path doesn't exist`;
};
