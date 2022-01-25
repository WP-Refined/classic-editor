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
      overlay-opacity="0.3"
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
              v-model="apiUser"
              class="mb-4"
              label="API User"
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
        <va-button @click="saveSettings()">Save</va-button>
      </template>
    </va-modal>
  </div>
</template>

<script>
import { VaModal, VaForm, VaInput, VaButton } from 'vuestic-ui';
import { emit } from '@tauri-apps/api/event';

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
      apiUrl: '',
      apiUser: '',
      apiKey: '',
    };
  },

  methods: {
    saveSettings() {
      if (!this.$refs.settingsForm.validate()) {
        return; // TODO - fix validation
      }

      emit('update-state', {
        data: {
          apiUrl: this.apiUrl,
          apiUser: this.apiUser,
          apiKey: this.apiKey,
        },
      });

      this.$refs.settingsModal.hide();
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
