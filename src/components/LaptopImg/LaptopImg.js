import laptopImg from './image.jpg';
import './LaptopImg.scss';
class LaptopImg {
  render() {
    const img = document.createElement('img');
    const body = document.querySelector('body');
    img.src = laptopImg;
    img.alt = 'laptop';
    img.classList.add('LaptopImg');
    body.appendChild(img);
  }
}
export default LaptopImg;
