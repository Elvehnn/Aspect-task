import { LabelProps } from '../../store/interfaces';
import './Label.scss';

const LabelElement = (props: LabelProps) => {
  const style = { display: props.visible ? 'inline-block' : 'none' };
  return (
    <span className="label" style={{ ...style }}>
      {props.caption}
    </span>
  );
};

export default LabelElement;
