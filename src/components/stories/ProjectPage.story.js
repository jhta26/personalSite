import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ProjectPage from '../ProjectPage';

const data=[
  {
    "title":"SUMMARY",
    "content":`Coordination platform for meetups and appointments by seeing other users’ locations.`
  },
  {
    "title":"FEATURES",
    "content":"-Built interactive frontend with JavaScript, ReactJS, React Native and native-base library with Redux, allowing users to create meetups by searching for locations and inviting friends to join. \n -Architected and deployed RESTful API with Node.js and Express with data persistence using PostgreSQL DB; deployed backend to AWS using EC2 and Elastic Beanstalk.\n-Implemented Google Maps, Google Directions, and Geocoding API’s and Socket.io to update locations in real time, allowing users to see exactly how far away friends are from destination.\n-Used TDD with Jest and Enzyme for front end and supertests for REST API calls, achieving 80% code coverage."
  },
  {
    "title":"TECH",
    "content":"Javascript \n React\nReact Native\nNode/Express\nPostgres\nChai\nMocha"
  }
];

storiesOf('ProjectPage', module).addDecorator(StoryRouter()).add('Happy Path', () =>
  <ProjectPage data={data} />
);