import { Button, Label, Panel } from './interfaces';

export const INITIAL_STATE: Array<Panel | Label | Button> = [
  {
    type: 'panel',
    props: {
      width: 500,
      height: 200,
      visible: true,
    },
  },
  {
    type: 'label',
    props: {
      caption: 'test',
      visible: false,
    },
  },
  {
    type: 'button',
    props: {
      width: 100,
      height: 50,
      visible: true,
      caption: 'test button',
    },
  },
  {
    type: 'panel',
    props: {
      width: 300,
      height: 200,
      visible: true,
    },
    content: [
      {
        type: 'label',
        props: {
          caption: 'test2',
          visible: true,
        },
      },
      {
        type: 'button',
        props: {
          width: 150,
          height: 50,
          visible: true,
          caption: 'test2 button',
        },
      },
    ],
  },
];

export const ANY_OBJECT_REGEXP = /^\{.*\}$/;
export const NUMBER_REGEXP = /^\d+$/;

export const CONTENT_REGEXP =
  /\{type: '(?<type>label|button|panel)', props: (?<props>\{.+?\})(?:, content: \[(?<content>\{.+\})*?\])?\}?/gi;
