import { RootState } from '../store/store';

export const getDestination = (path: string[], content: RootState) => {
  try {
    return path.slice(1).reduce((acc, item) => acc[item], content);
  } catch (err) {
    return null;
  }
};
