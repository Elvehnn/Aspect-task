export interface PanelProps {
  width: number;
  height: number;
  visible: boolean;
}

export interface Panel {
  type: 'panel';
  props: PanelProps;
  content?: Array<Panel | Label | Button>;
}

export interface Label {
  type: 'label';
  props: {
    caption: 'test';
    visible: false;
  };
}

export interface ButtonProps {
  width: number;
  height: number;
  visible: boolean;
}

export interface Button {
  type: 'button';
  props: ButtonProps;
}
