import { Button, Label, Panel } from '../../store/interfaces';

import './Content.scss';
import PanelElement from '../Panel/Panel';
import LabelElement from '../Label/Label';
import ButtonElement from '../Button/Button';

export function Content(item: Panel | Label | Button) {
  let element = <div></div>;

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
    case 'button': {
      element = <ButtonElement {...item.props} />;
      break;
    }
  }

  return element;
}
