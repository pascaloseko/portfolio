import Home from "./components/Home.vue";
import Me from "./components/Me.vue";
import Skills from "./components/Skills.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/me",
    component: Me
  },
  {
    path: "/skills",
    component: Skills
  },
  {
    path: "/projects",
    component: Project
  },
  {
    path: "/contact",
    component: Contact
  }
];
