import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageBodyComponent from '../HomePageBodyComponent';

storiesOf('HomePageBodyComponent', module).add('Happy Path', () =>
  <HomePageBodyComponent />
);