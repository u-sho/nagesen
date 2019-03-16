import Vue from "vue";
import Router from "vue-router";
import Ex from "./components/ExampleComponent";
import Login from "./pages/Login";
import Main from "./pages/Main";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/nagesen/ex",
            component: Ex
        },
        {
            path: "/nagesen/login",
            component: Login
        },
        {
            path: "/nagesen/main",
            component: Main
        }
    ]
});

export default router;
