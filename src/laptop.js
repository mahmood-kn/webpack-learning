import LaptopImg from './components/LaptopImg/LaptopImg';
import Heading from './components/Heading/Heading';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('laptop'));

const laptopImg = new LaptopImg();
laptopImg.render();
