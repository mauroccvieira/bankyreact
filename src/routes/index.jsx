import Fulllayout from "../layouts/fulllayout.jsx";
import Login from "../views/authentication/login";
import Queue from "../views/queue/queue";



var indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/queue", name: "Login", component: Queue },
  { path: '/', name: 'Home', component: Fulllayout }  
];


// var indexRoutes = [
//   { path: "/login", name: "Login Page", component: Login },
//   { path: "/queue", name: "Login Page", component: Queue },
//   { path: "/home", name: "Home", component: Fulllayout },
//   { path: "*", name: "Default route", component: Login },
  
// ];

export default indexRoutes;
