<template>
  <va-card color="background" style="padding: 2rem 0.75rem 0.75rem">
    <div class="row">
      <div class="md12">
        <ClassicEditor />
      </div>
    </div>
  </va-card>
</template>

<script>
import { VaCard } from 'vuestic-ui';
import ClassicEditor from '@/components/ClassicEditor.vue';

export default {
  components: {
    VaCard,
    ClassicEditor,
  },

  data() {
    return {
      postId: 0,
    };
  },
};
</script>
