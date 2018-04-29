import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ResumeCardComponent from '../ResumeCardComponent';



const data ={

	'name':'Education',
	'info':[
		{'image':"./resources/westernMI.jpg"},
		{'data':"Western Michigan University \n B.S. Business Management \n 2008-2013"}
	]
}

storiesOf('ResumeCardComponent', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
	<ResumeCardComponent data={data}/>
);