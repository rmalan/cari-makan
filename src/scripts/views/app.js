import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ menu, drawer, hero, content }) {
    this._menu = menu;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menu: this._menu,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
  }
}

export default App;
