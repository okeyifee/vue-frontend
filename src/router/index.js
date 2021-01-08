import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Request from "../views/SignInFlow/Request.vue";
import Recover from "../views/SignInFlow/Recover.vue";
// import Twitter from "../views/Email.vue";
// import Email from "../views/Twitter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/request",
    name: "Request",
    component: Request
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
