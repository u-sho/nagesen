import Vue from "vue";
import Router from "vue-router";
import Ex from "./components/ExampleComponent";
import Login from "./pages/Login";
import { web } from "./googleids/credentials";
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
            component: Login,
            meta: {name: "google-signin-client_id", content: web.client_id }
        }
    ]
});

export default router;
