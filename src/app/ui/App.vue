<template>
  <header class="mt-8">
    <nav>
      <div class="container mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
          <h1 class="text-5xl">{{ $route.name }}</h1>
        </div>

        <div class="flex flex-row md:ml-auto">
          <button class="p-2 lg:px-4 md:mx-2" @click="showSettingsModal = true">
            Settings
          </button>
          <div>
            <img
              alt="Vue logo"
              src="./../assets/logo.png"
              style="border-radius: 50%; width: 40px; height: 40px"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="container mt-10 mx-auto">
    <router-view></router-view>

    <SettingsModal
      v-model:close.sync="showSettingsModal"
      :open="showSettingsModal"
    />
  </main>
</template>

<script>
import SettingsModal from '../../settings/ui/SettingsModal.vue';

export default {
  components: { SettingsModal },
  data() {
    return {
      showSettingsModal: false,
    };
  },
};
</script>
