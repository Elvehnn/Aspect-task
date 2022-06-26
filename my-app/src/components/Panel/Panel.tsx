import { Button, Label, Panel, PanelProps } from '../../store/interfaces';
import './Panel.scss';

const PanelElement = (props: { options: PanelProps; content: Array<Panel | Label | Button> }) => {
  const style = { ...props.options, display: props.options.visible ? 'flex' : 'none' };
  return (
    <div className="panel" style={{ ...style }}>
      Panel
    </div>
  );
};

export default PanelElement;
