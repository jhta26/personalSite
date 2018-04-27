import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ResumePage from '../ResumePage';

storiesOf('ResumePage', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
  <ResumePage />
);