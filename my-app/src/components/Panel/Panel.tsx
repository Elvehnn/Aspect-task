import { Button, Label, Panel, PanelProps } from '../../store/interfaces';
import contentMap from '../../utils/contentMap';
import './Panel.scss';

const PanelElement = (props: { options: PanelProps; content: Array<Panel | Label | Button> }) => {
  const style = { ...props.options, display: props.options.visible ? 'flex' : 'none' };
  return (
    <div className="panel" style={{ ...style }}>
      {props.content && contentMap(props.content)}
    </div>
  );
};

export default PanelElement;
