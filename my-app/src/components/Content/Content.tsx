import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Button, Label, Panel } from '../../store/interfaces';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from '../../store/contentSlice';
import './Content.scss';
import PanelElement from '../Panel/Panel';
import LabelElement from '../Label/Label';

export function Content(item: Panel | Label | Button) {
  let element = <div></div>;

  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  switch (item.type) {
    case 'panel': {
      const content: Array<Panel | Label | Button> = item.content ? item.content : [];
      element = <PanelElement options={item.props} content={content} />;
      break;
    }
    case 'label': {
      element = <LabelElement {...item.props} />;
      break;
    }
  }

  return element;
}
