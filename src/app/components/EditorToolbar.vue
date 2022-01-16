<template>
  <div class="editor--toolbar text--center flex md5">
    <va-button
      :class="{ 'is-active': editor.isActive('bold') }"
      icon="format_bold"
      color="gray"
      @click="editor.chain().focus().toggleBold().run()"
    />
    <va-button
      :class="{ 'is-active': editor.isActive('italic') }"
      icon="format_italic"
      color="gray"
      @click="editor.chain().focus().toggleItalic().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('strike') }"
      icon="strikethrough_s"
      color="gray"
      @click="editor.chain().focus().toggleStrike().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('underline') }"
      icon="format_underlined"
      color="gray"
      @click="editor.chain().focus().toggleUnderline().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('code') }"
      icon="code"
      color="gray"
      @click="editor.chain().focus().toggleCode().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      icon="format_size"
      color="gray"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('bulletList') }"
      icon="format_list_bulleted"
      color="gray"
      @click="editor.chain().focus().toggleBulletList().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('orderedList') }"
      icon="format_list_numbered"
      color="gray"
      @click="editor.chain().focus().toggleOrderedList().run()"
    />

    <va-button
      :class="{ 'is-active': editor.isActive('blockquote') }"
      icon="format_quote"
      color="gray"
      @click="editor.chain().focus().toggleBlockquote().run()"
    />

    <va-button
      icon="horizontal_rule"
      color="gray"
      @click="editor.chain().focus().setHorizontalRule().run()"
    />

    <va-button
      icon="undo"
      color="gray"
      @click="editor.chain().focus().undo().run()"
    />

    <va-button
      icon="redo"
      color="gray"
      @click="editor.chain().focus().redo().run()"
    />

    <va-progress-bar size="small" :model-value="value" />
  </div>
</template>

<script>
import { VaButton, VaProgressBar } from 'vuestic-ui';

export default {
  components: {
    VaButton,
    VaProgressBar,
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
