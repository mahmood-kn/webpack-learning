import image from './image.jpg';

const imageLoader = () => {
  const img = document.createElement('img');
  img.alt = 'Laptop';
  img.src = image;
  img.width = '300';
  img.height = '200';

  const body = document.querySelector('body');
  body.appendChild(img);
};
export default imageLoader;
