<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>

<script>
import Login from "../components/auth/login/login.vue";
import Menu from "../components/menu/menu.vue"

const login = {
  "/login": Login,
};

const loginSuccess = {
  "/menu": Menu
}

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      var success = localStorage.getItem("login")
      if(!success){
        return login[this.current] || Login;
      } else {
        return loginSuccess[this.current] || Menu;
      }
      
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};
</script>