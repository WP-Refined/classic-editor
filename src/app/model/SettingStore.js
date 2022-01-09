import { createStore } from 'vuex';
import { Store } from 'electron-store';

const settings = {
  apiKey: {
    type: 'string',
    default: '',
  },
  apiUrl: {
    type: 'string',
    format: 'url',
    default: '',
  },
};

// Electron Store (stored in userdata system path)
const persistentStore = new Store({ settings, cwd: 'public' });

export default createStore({
  state: {
    settings: {
      apiKey: persistentStore.get('apiKey') || '',
      apiUrl: persistentStore.get('apiKey') || '',
    },
  },
  mutations: {
    updateSettings(state) {
      persistentStore.set('settings.apiKey', state['settings']['apiKey']);
      persistentStore.set('settings.apiUrl', state['settings']['apiUrl']);
    },
  },
});
