<template>
  <va-card color="background" style="padding: 2rem 0.75rem 0.75rem">
    <div class="row">
      <va-input
        v-model.number="perPage"
        class="flex mb-2 md2"
        type="number"
        placeholder="Items..."
        label="Items per page"
      />

      <va-input
        v-model.number="currentPage"
        class="flex mb-2 md2"
        type="number"
        placeholder="Page..."
        label="Current page"
      />

      <va-input
        v-model="filter"
        class="flex mb-2 md3"
        label="Filter"
        placeholder="Search posts..."
      />
    </div>

    <va-data-table
      :items="items"
      :columns="columns"
      :current-page="currentPage"
      :selectable="true"
      :loading="isTableLoading"
      :filter="filter"
      @filtered="filtered = $event.items"
    >
      <template #bodyAppend>
        <tr>
          <td colspan="8" class="post-table--pagination">
            <va-pagination v-model="currentPage" input :pages="totalPages" />
          </td>
        </tr>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import { defineComponent } from 'vue';
import { DateTime } from 'luxon';
import axios from 'axios';
import { VaCard, VaInput, VaDataTable, VaPagination } from 'vuestic-ui';

export default defineComponent({
  components: {
    VaDataTable,
    VaCard,
    VaInput,
    VaPagination,
  },

  data() {
    const columns = [
      { key: 'id', sortable: true },
      { key: 'title', sortable: true },
      { key: 'content' },
      { key: 'date_updated', sortable: true },
      { key: 'date_created', sortable: true },
    ];

    return {
      items: [],
      columns,
      totalPages: 1,
      perPage: 10,
      currentPage: 1,
      filter: '',
      filtered: [],
      isTableLoading: true,
      settings: {
        apiUrl: 'https://wp-preflight.local',
      },
    };
  },

  watch: {
    currentPage() {
      this.fetchPosts();
    },

    perPage() {
      this.fetchPosts();
    },
  },

  created() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      this.isTableLoading = true;

      axios
        .get(this.settings.apiUrl + '/wp-json/wp/v2/posts', {
          params: {
            page: this.currentPage <= 0 ? 1 : this.currentPage,
            per_page: this.perPage,
            search: this.filter,
          },
        })
        .then(response => {
          this.totalPages = Number(response.headers['x-wp-totalpages']);
          this.items = this.formatPosts(response.data);
          this.isTableLoading = false;
        })
        .catch(error => alert(error.message));
    },

    formatPosts(posts) {
      let formatted = [];

      posts.forEach(post => {
        formatted.push({
          id: post.id,
          title: this.truncateText(post.title.rendered, 50),
          content: this.truncateText(
            this.formatRenderedContent(post.excerpt.rendered),
            50,
          ),
          link: this.formatUrl(post.link),
          date_updated: this.formatDate(post.modified),
          date_created: this.formatDate(post.date),
        });
      });

      return formatted;
    },

    formatRenderedContent(content) {
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = content;
      return tmpDiv.textContent || tmpDiv.innerText || '';
    },

    formatDate(date) {
      return date ? DateTime.fromISO(date).toFormat('FF') : null;
    },

    formatUrl(url) {
      return url.startsWith('http') ? url : `https://${url}`;
    },

    truncateText(text, max) {
      const truncated =
        text && text.length > max
          ? text.slice(0, max).split(' ').slice(0, -1).join(' ')
          : text;

      return truncated + '...';
    },
  },
});
</script>

<style lang="scss" scoped>
.post-table--pagination {
  text-align: center;
  text-align: -webkit-center;

  .va-pagination {
    margin-top: 2rem;
  }
}
</style>
