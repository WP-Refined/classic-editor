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
        <settings-modal />
      </va-navbar-item>
    </template>
  </va-navbar>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { VaNavbar, VaNavbarItem, VaAvatar } from 'vuestic-ui';
import SettingsModal from '@/components/modals/SettingsModal.vue';

export default {
  name: 'App',

  components: {
    VaNavbar,
    VaNavbarItem,
    VaAvatar,
    SettingsModal,
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 50px;
}
</style>
