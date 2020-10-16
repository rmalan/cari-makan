import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/beranda': Home,
  '/detail/:id': Detail,
  '/favorit': Favorite,
};

export default routes;
