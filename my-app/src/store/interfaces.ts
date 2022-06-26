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

export interface LabelProps {
  caption: string;
  visible: boolean;
}

export interface Label {
  type: 'label';
  props: LabelProps;
}

export interface ButtonProps {
  width: number;
  height: number;
  visible: boolean;
  caption: string;
}

export interface Button {
  type: 'button';
  props: ButtonProps;
}
