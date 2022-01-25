<template>
  <div class="editor--toolbar text--center flex md5">
    <va-button
      flat
      :class="{ 'is-active': editor.isActive('bold') }"
      icon="format_bold"
      @click="editor.chain().focus().toggleBold().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('italic') }"
      icon="format_italic"
      @click="editor.chain().focus().toggleItalic().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('strike') }"
      icon="strikethrough_s"
      @click="editor.chain().focus().toggleStrike().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('underline') }"
      icon="format_underlined"
      @click="editor.chain().focus().toggleUnderline().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('code') }"
      icon="code"
      @click="editor.chain().focus().toggleCode().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      icon="format_size"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('bulletList') }"
      icon="format_list_bulleted"
      @click="editor.chain().focus().toggleBulletList().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('orderedList') }"
      icon="format_list_numbered"
      @click="editor.chain().focus().toggleOrderedList().run()"
    />

    <va-button
      flat
      :class="{ 'is-active': editor.isActive('blockquote') }"
      icon="format_quote"
      @click="editor.chain().focus().toggleBlockquote().run()"
    />

    <va-button
      flat
      icon="horizontal_rule"
      @click="editor.chain().focus().setHorizontalRule().run()"
    />

    <va-button flat icon="undo" @click="editor.chain().focus().undo().run()" />

    <va-button flat icon="redo" @click="editor.chain().focus().redo().run()" />
  </div>
</template>

<script>
import { VaButton } from 'vuestic-ui';

export default {
  components: {
    VaButton,
  },

  props: {
    editor: {
      required: true,
      type: Object,
      default: () => {},
    },
  },
};
</script>
