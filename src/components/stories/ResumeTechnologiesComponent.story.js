import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ResumeTechnologiesComponent from '../ResumeTechnologiesComponent';




storiesOf('ResumeTechnologiesComponent', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
	
	<ResumeTechnologiesComponent/>
 	
);