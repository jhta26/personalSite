import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectComponent from '../ProjectComponent';

const projectInfo=[
{
    "name": "Glance",
    "image":"../resources/glance1.gif",
    "data": [
    {
        "title": "Summary",
        "content": "Coordination platform for meetups and appointments by seeing other users’ locations."
    },
    {
        "title": "Features",
        "content": "-Built interactive frontend with JavaScript, ReactJS, React Native and native-base library with Redux, allowing users to create meetups by searching for locations and inviting friends to join. \n -Architected and deployed RESTful API with Node.js and Express with data persistence using PostgreSQL DB; deployed backend to AWS using EC2 and Elastic Beanstalk.\n-Implemented Google Maps, Google Directions, and Geocoding API’s and Socket.io to update locations in real time, allowing users to see exactly how far away friends are from destination.\n-Used TDD with Jest and Enzyme for front end and supertests for REST API calls, achieving 80% code coverage."
    },
    {
        "title": "Tech Used",
        "content": "Javascript \n React\nReact Native\nNode/Express\nPostgres\nChai\nMocha"
    }]
}]

const selectedProject='Glance'

storiesOf('ProjectComponent', module).add('Happy Path', () =>
  <ProjectComponent projectInfo={projectInfo} selectedProject={selectedProject}/>
);