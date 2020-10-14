import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';

const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
