<template>
  <div class="editor">
    <h1 class="display-1">{{ post.title }}</h1>

    <va-divider />

    <editor-toolbar :editor="editor" />

    <editor-content class="editor--content" :editor="editor" />

    <va-button icon="save" @click="triggerSave">Save</va-button>
  </div>
</template>

<script>
import EditorToolbar from './EditorToolbar.vue';
import { VaDivider, VaButton } from 'vuestic-ui';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

export default {
  components: {
    VaDivider,
    VaButton,
    EditorToolbar,
    EditorContent,
  },

  props: {
    postData: {
      required: true,
      type: Object,
      default: () => {},
    },
  },

  emits: ['altered', 'save'],

  data() {
    return {
      editor: null,
      post: this.postData,
    };
  },

  created() {
    this.editor = new Editor({
      content: this.postData.content,
      extensions: [StarterKit, Underline],
    });

    // TODO: Improve on the mutation of post / meta data
    this.editor.on('update', () => {
      this.post.content = this.editor.getHTML();
      this.$emit('altered', this.post);
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    triggerSave() {
      this.post.content = this.editor.getHTML();

      this.$emit('save', this.post);
    },
  },
};
</script>
