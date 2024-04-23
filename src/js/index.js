// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const buttonElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

const handleMenu = () => {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
  } else {
    menuElement.classList.add('show');
  }
};

buttonElement.addEventListener('click', handleMenu);
