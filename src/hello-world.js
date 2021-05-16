import HelloWorldBtn from './components/HelloWorldBtn/HelloWorldBtn';
// import imageLoader from './imageLoader';

const helloWorld = new HelloWorldBtn();
helloWorld.render();

// imageLoader();
if (process.env.NODE_ENV === 'production') {
  console.log('production');
} else if (process.env.NODE_ENV === 'development') {
  console.log('development');
}
