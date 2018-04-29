import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ResumeEducationComponent from '../ResumeEducationComponent';


storiesOf('ResumeEducationComponent', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
	
	<ResumeEducationComponent/>
 	
);