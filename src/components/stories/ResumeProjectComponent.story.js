import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ResumeProjectComponent from '../ResumeProjectComponent';

var  resumeInfo = [
{

	'title':'Glance',
	'date':'2017',
	'description':'Coordination platform for meetups and appointments by seeing other users’ locations.',
	'bullets': "Built interactive frontend with JavaScript, ReactJS, React Native and native-base library with Redux, allowing users to create meetups by searching for locations and inviting friends to join. \n Architected and deployed RESTful API with Node.js and Express with data persistence using PostgreSQL DB; deployed backend to AWS using EC2 and Elastic Beanstalk. \n Implemented Google Maps, Google Directions, and Geocoding API’s and Socket.io to update locations in real time, allowing users to see exactly how far away friends are from destination. \n Used TDD with Jest and Enzyme for front end and supertests for REST API calls, achieving 80% code coverage.",
},
{
	'title':'JMail',
	'date':'2017',
	'description':"Web-based email client streamlined for efficient sending and reading of messages.",
	'bullets':"Designed and built mock email web system using JavaScript, ReactJS, Redux, HTML5, CSS3 and Materialize.\nIntegrated Airtable API as backend to save messages, saving $60 / year on monthly server and database fees."
},
{
	'title':'Jasons Restaurant',
	'date':'2017',
	'description':"Restaurant ordering web application for choosing items and validating orders.",
	'bullets':"Designed and built dynamic, responsive mock restaurant ordering web system using JavaScript, ReactJS, Redux, HTML5, CSS3 and Materialize."
},
{
	'title':'NBA Player Comparison',
	'date':'2017',
	'description':"Tool for basketball fans to compare any two current or former NBA players.",
	'bullets':"Architected system using JavaScript, HTML5, CSS3, and ElementX, integrating DomParser to parse HTML5 from basketballreference.com, retrieving statistics on points, rebounds and assists per game."
}
]


storiesOf('ResumeProjectComponent', module)
.addDecorator(StoryRouter())
.add('Happy Path', () =>
	<div>
	{resumeInfo.map(info=><ResumeProjectComponent resumeInfo={info}/>)}
 	</div>
);