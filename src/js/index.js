// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
import imageClose from '../assets/images/icon-menu-close.svg';
import imageMenu from '../assets/images/icon-menu.svg';

const buttonElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

const handleMenu = () => {
  if (menuElement.classList.contains('menu--show')) {
    menuElement.classList.remove('menu--show');
    document.body.classList.remove('bg-opacity');
    buttonElement.src = imageMenu;
  } else {
    menuElement.classList.add('menu--show');
    document.body.classList.add('bg-opacity');
    buttonElement.src = imageClose;
  }
};

buttonElement.addEventListener('click', handleMenu);
