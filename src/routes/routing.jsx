import Home from '../views/home/home.jsx';
import Statement from '../views/statement/statement';
import Block from '../views/block/block';
import Change from '../views/change/change';
import Recharge from '../views/recharge/recharge';

var ThemeRoutes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'ti-home',
    component: Home
  },
  {
    path: '/statement',
    name: 'Extrato',
    icon: 'ti-layout-list-thumb',
    component: Statement
  },
  {
    path: '/bloquear',
    name: 'Bloquear Cartão',
    icon: 'ti-credit-card',
    component: Block
  },
  {
    path: '/alterar-senha',
    name: 'Alterar senha',
    icon: 'ti-key',
    component: Change
  },
  {
    path: '/recarregar',
    name: 'Recarregar Cartão',
    icon: 'ti-reload',
    component: Recharge
  },
  {
    path: '/fale-conosco',
    name: 'Fale Conosco',
    icon: 'ti-comment',
    component: Home
  },
  { path: '/', pathTo: '/home', name: 'Home', redirect: true }
];
export default ThemeRoutes;
