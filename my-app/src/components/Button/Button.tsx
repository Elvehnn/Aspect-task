import { ButtonProps } from '../../store/interfaces';
import './Button.scss';

const ButtonElement = (props: ButtonProps) => {
  const style = { ...props, display: props.visible ? 'flex' : 'none' };
  return (
    <button className="button" style={{ ...style }}>
      {props.caption}
    </button>
  );
};

export default ButtonElement;
