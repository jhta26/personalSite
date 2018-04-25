import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import HeaderComponent from '../HeaderComponent';

storiesOf('HeaderComponent', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
  <HeaderComponent />
);