<template>
  <div id="signin">
    <h2>サインイン</h2>
 
    <!-- emailとpasswordの入力欄 
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    -->

　　 <!-- googleのアカウントでサインイン。アカウントがなければ新規に作成されます。 -->
    <button @click="signInWithGoogle">Googleアカウントでサインイン</button>
 
　　<!-- サインアップページ遷移ボタン 
    <p>
      アカウントをお持ちではない方
      <router-link to="/signup">新規作成</router-link>
    </p>-->
  </div>
</template>

<script>
import firebase from "firebase";
//import { web } from "./../googleids/credentials.json"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.$router.push("/nagesen/main");
        }).catch(
          error => {
            alert(error.message)
          }
        )
    }
  }
}
</script>