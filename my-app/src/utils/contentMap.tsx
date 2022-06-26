import { Button, Label, Panel } from '../store/interfaces';
import { Content } from '../components/Content/Content';

const contentMap = (content: Array<Panel | Label | Button>) => {
  return content.map((item, index) => <Content key={`${index}${item.type}`} {...item} />);
};

export default contentMap;
