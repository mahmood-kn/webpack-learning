import HelloWorldBtn from './components/HelloWorldBtn/HelloWorldBtn';
import Heading from './components/Heading/Heading';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello webpack'));

const helloWorld = new HelloWorldBtn();
helloWorld.render();

if (process.env.NODE_ENV === 'production') {
  console.log('production');
} else if (process.env.NODE_ENV === 'development') {
  console.log('development');
}
