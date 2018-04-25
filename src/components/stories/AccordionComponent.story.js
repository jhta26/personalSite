import React from 'react';
import { storiesOf } from '@storybook/react';

import AccordionComponent from '../AccordionComponent';

const data=[
  {
    "title":"Section One",
    "content":`stuff adfkajsdkfgjasdklfjasdklfjklasdjf
    klasjdfkljasdklfjklasd`
  },
  {
      "title":"Section Two",
    "content":"stuff asdfasdfasdf asdf asdf asd fasdfas df asdfasdf "
  },
  {
    "title":"Section Three",
    "content":"stuff"
  },
  {
    "title":"Section Four",
    "content":"stuff"
  }
];


storiesOf('AccordionComponent', module).add('Happy Path', () =>
  <AccordionComponent data={data}/>
);