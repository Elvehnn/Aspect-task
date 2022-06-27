export const stringToObject = (string: string) => {
  const propsArray = string
    .slice(1, -1)
    .split(/[,:\s]/g)
    .filter((item) => item);

  let propsObject = {};

  for (let i = 0; i < propsArray.length; i += 2) {
    let value;

    switch (propsArray[i]) {
      case 'width':
      case 'height': {
        value = Number(propsArray[i + 1]);
        break;
      }
      case 'caption': {
        value = propsArray[i + 1].slice(1, -1);
        break;
      }
      case 'visible': {
        value = propsArray[i + 1] === 'true' ? true : false;
        break;
      }
    }
    propsObject = { ...propsObject, [propsArray[i]]: value };
  }

  return propsObject;
};
