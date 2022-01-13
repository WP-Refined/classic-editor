<template>
  <va-navbar color="background">
    <template #left>
      <va-navbar-item>
        <va-avatar
          class="mr-3"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        />
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <va-button :rounded="false" icon="settings"> Settings </va-button>
      </va-navbar-item>
    </template>
  </va-navbar>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { VaNavbar, VaNavbarItem, VaAvatar, VaButton } from 'vuestic-ui';

export default {
  name: 'App',

  components: {
    VaNavbar,
    VaNavbarItem,
    VaAvatar,
    VaButton,
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 50px;
}
</style>
