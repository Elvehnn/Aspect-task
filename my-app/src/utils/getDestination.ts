import { RootState } from '../store/store';

export const getDestination = (path: string[], content: RootState) => {
  return path.slice(1).reduce((acc, item) => acc[item], content);
};
