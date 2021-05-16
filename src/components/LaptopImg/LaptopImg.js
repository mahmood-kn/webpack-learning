import img from './image.jpg';
import './LaptopImg.scss';
class LaptopImg {
  render() {
    const img = document.createElement('img');
    const body = document.querySelector('body');
    img.src = img;
    img.alt = 'laptop';
    img.classList.add = 'LaptopImg';
    body.appendChild(img);
  }
}
export default LaptopImg;
