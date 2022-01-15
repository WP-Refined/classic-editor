<template>
  <div>
    <va-button
      :rounded="false"
      icon="settings"
      @click="$refs.settingsModal.show()"
    >
      Settings
    </va-button>
    <va-modal
      ref="settingsModal"
      stateful
      overlay-opacity="0"
      hide-default-actions
    >
      <template #header>
        <h2 class="modal-title">Settings</h2>
      </template>
      <slot>
        <div>
          <va-form ref="settingsForm" class="modal-form">
            <va-input
              v-model="apiUrl"
              class="mb-4"
              label="API / Website URL"
              :rules="[
                value => (value && value.length > 0) || 'Field is required',
              ]"
              bordered
            />
            <va-input
              v-model="apiKey"
              label="API Key"
              :rules="[
                value => (value && value.length > 0) || 'Field is required',
              ]"
              bordered
            />
          </va-form>
        </div>
      </slot>
      <template #footer>
        <va-button flat color="secondary" @click="$refs.settingsModal.hide()">
          Cancel
        </va-button>
        <va-button @click="$refs.settingsForm.validate()"> Save </va-button>
      </template>
    </va-modal>
  </div>
</template>

<script>
import { VaModal, VaForm, VaInput, VaButton } from 'vuestic-ui';

export default {
  components: {
    VaModal,
    VaForm,
    VaInput,
    VaButton,
  },

  data() {
    return {
      settingsModal: false,
      validation: false,
      apiUrl: '',
      apiKey: '',
    };
  },

  methods: {
    saveSettings() {
      // TODO: Save data using secure FS solution
      alert('saved');

      // this.$refs.settingsModal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-title {
  margin-bottom: 1.5rem;
}
.modal-form {
  width: 300px;
}
</style>
