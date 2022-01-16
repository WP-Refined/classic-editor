<template>
  <div class="editor">
    <div class="editor--header">
      <va-button
        :class="{ 'is-active': editor.isActive('bold') }"
        icon="format_bold"
        @click="editor.chain().focus().toggleBold().run()"
      />
      <va-button
        :class="{ 'is-active': editor.isActive('italic') }"
        icon="format_italic"
        @click="editor.chain().focus().toggleItalic().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('strike') }"
        icon="strikethrough_s"
        @click="editor.chain().focus().toggleStrike().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('underline') }"
        icon="format_underlined"
        @click="editor.chain().focus().toggleUnderline().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('code') }"
        icon="code"
        @click="editor.chain().focus().toggleCode().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        icon="format_size"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('bulletList') }"
        icon="format_list_bulleted"
        @click="editor.chain().focus().toggleBulletList().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('orderedList') }"
        icon="format_list_numbered"
        @click="editor.chain().focus().toggleOrderedList().run()"
      />

      <va-button
        :class="{ 'is-active': editor.isActive('blockquote') }"
        icon="format_quote"
        @click="editor.chain().focus().toggleBlockquote().run()"
      />

      <va-button
        icon="horizontal_rule"
        @click="editor.chain().focus().setHorizontalRule().run()"
      />

      <va-button icon="undo" @click="editor.chain().focus().undo().run()" />

      <va-button icon="redo" @click="editor.chain().focus().redo().run()" />

      <va-button icon="save" @click="triggerSave">Save</va-button>
    </div>

    <editor-content class="editor--content" :editor="editor" />
  </div>
</template>

<script>
import { VaButton } from 'vuestic-ui';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

export default {
  components: {
    VaButton,
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
