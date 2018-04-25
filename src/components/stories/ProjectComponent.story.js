import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectComponent from '../ProjectComponent';

storiesOf('ProjectComponent', module).add('Happy Path', () =>
  <ProjectComponent />
);