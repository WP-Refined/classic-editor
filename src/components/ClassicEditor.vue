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
    content: {
      required: false,
      type: String,
      default: '',
    },
  },

  emits: ['update'],

  data() {
    return {
      editor: null,
    };
  },

  created() {
    this.editor = new Editor({
      content: this.content,
      extensions: [StarterKit, Underline],
    });

    this.editor.on('update', () => {
      this.$emit('update', this.editor.getHTML());
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>
