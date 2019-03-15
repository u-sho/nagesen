import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import router from "./routes";
import firebase from "firebase";
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false;

const config = {
    apiKey: "AIzaSyBf83HOYxKr-b_bG33vFQCPgKelwOZP0xo",
    authDomain: "nagesen-d6f93.firebaseapp.com",
    databaseURL: "https://nagesen-d6f93.firebaseio.com",
    projectId: "nagesen-d6f93",
    storageBucket: "nagesen-d6f93.appspot.com",
    messagingSenderId: "858043071036"
};
firebase.initializeApp(config);

new Vue({
    router
}).$mount("#app");
