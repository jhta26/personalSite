import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import HomePage from '../HomePage';

storiesOf('HomePage', module).addDecorator(StoryRouter()).add('Happy Path', () =>
  <HomePage />
);