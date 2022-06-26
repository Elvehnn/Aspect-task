import { Button, Label, Panel, PanelProps } from '../../store/interfaces';

const PanelElement = (props: { options: PanelProps; content: Array<Panel | Label | Button> }) => {
  const { width, height, visible } = props.options;

  return <div className="panel">Panel</div>;
};

export default PanelElement;
