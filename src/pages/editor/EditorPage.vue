<template>
  <va-inner-loading :loading="isPostLoading" :size="60">
    <va-card color="background" style="padding: 2rem 0.75rem 0.75rem">
      <div class="row">
        <div class="flex md12">
          <classic-editor
            v-if="!isPostLoading"
            :post-data="postData"
            @save="savePost"
          />
        </div>
      </div>
    </va-card>
  </va-inner-loading>
</template>

<script>
import PostFormatters from '../../app/mixins/PostFormatters';
import axios from 'axios';
import { VaCard, VaInnerLoading } from 'vuestic-ui';
import ClassicEditor from '../../app/components/ClassicEditor.vue';

export default {
  components: {
    VaCard,
    VaInnerLoading,
    ClassicEditor,
  },

  mixins: [PostFormatters],

  data() {
    return {
      postId: null,
      postData: {},
      isPostLoading: false,
      settings: {
        apiUrl: '',
        apiUser: '',
        apiPassword: '',
      },
    };
  },

  created() {
    this.postId = this.$route.params.id;

    this.fetchPost(this.postId);
  },

  methods: {
    fetchPost(postId) {
      this.isPostLoading = true;

      axios
        .get(`${this.settings.apiUrl}/wp-json/wp/v2/posts/${postId}`)
        .then(response => {
          this.postData = this.formatPost(response.data);
          this.isPostLoading = false;
        })
        .catch(error => alert(error.message));
    },

    savePost(post) {
      const encodedAuthKey = btoa(
        `${this.settings.apiUser}:${this.settings.apiPassword}`,
      );

      axios
        .post(
          `${this.settings.apiUrl}/wp-json/wp/v2/posts/${post.id}`,
          {
            title: post.title,
            content: post.content,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${encodedAuthKey}`,
            },
          },
        )
        .catch(error => alert(error.message));
    },
  },
};
</script>
