import Vue from "vue";
import Router from "vue-router";
import Ex from "./components/ExampleComponent";
import Login from "./pages/Login";
import LoginPay from "./pages/LoginPay";
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
            path: "/nagesen/loginpay",
            component: LoginPay
        }
    ]
});

export default router;
