import './HelloWorldBtn.scss';
class HelloWorldBtn {
  Btncss = 'Btn';
  render() {
    const body = document.querySelector('body');
    const btn = document.createElement('button');
    btn.innerText = 'Hello World';
    body.appendChild(btn);
    btn.classList.add(this.Btncss);
    btn.onclick = () => {
      const p = document.createElement('p');
      p.innerText = 'Hello World';
      body.appendChild(p);
      p.classList.add('P');
    };
  }
}
export default HelloWorldBtn;
