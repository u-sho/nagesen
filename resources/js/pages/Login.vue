<template>
  <b-container>
    <b-card class="m-5" bg-variant="dark" text-variant="white" title="Signin">
      <div id="signin" class="m-5">
        <!-- emailとpasswordの入力欄 
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        -->

    　　 <!-- googleのアカウントでサインイン。アカウントがなければ新規に作成されます。 -->
        <b-button variant="primary" @click="signInWithGoogle">Googleアカウントでサインイン</b-button>
    
    　　<!-- サインアップページ遷移ボタン 
        <p>
          アカウントをお持ちではない方
          <router-link to="/signup">新規作成</router-link>
        </p>-->
      </div>
    </b-card>
  </b-container>
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