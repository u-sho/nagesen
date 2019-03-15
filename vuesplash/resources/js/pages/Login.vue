<template>
<div id="container">
<h1>loginpage</h1>
<GoogleLogin :client_id="client_id" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
</div>
</template>
<script>
  import GoogleLogin from "vue-google-login"
  import { web } from "./../googleids/credentials.json"
  export default {
    data() {
      return {
        client_id: web.client_id,
      }
    },
    methods: {
      /* onSignIn(googleUser) {
        //Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
       }
       
        onSuccess(googleUser) {
          console.log(googleUser);
          console.log(googleUser.getBasicProfile());
        },
        onFailure() {
          return false;
        }*/
    }
  }
    
  </script>