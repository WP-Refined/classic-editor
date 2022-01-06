<template>
  <div class="dt-w-1/2 sm:dt-w-full overflow-hidden">
    <data-table
      :rows="tableData"
      :pagination="pagination"
      :query="query"
      :loading="isLoading"
      filter
      @load-data="loadData"
    >
      <template #thead>
        <table-head>ID</table-head>
        <table-head>Title</table-head>
        <table-head>Content</table-head>
        <table-head>Date Updated</table-head>
        <table-head>Date Created</table-head>
        <table-head />
      </template>

      <template #tbody="{ row }">
        <table-body v-text="row.id" />

        <table-body v-text="truncateText(row.title.rendered, 50)" />

        <table-body
          v-text="truncateText(formatRenderedContent(row.excerpt.rendered), 50)"
        />

        <table-body v-text="formatDate(row.modified)" />

        <table-body v-text="formatDate(row.date)" />

        <table-body>
          <button class="rounded">Edit</button>
        </table-body>
      </template>
    </data-table>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, reactive } from 'vue';
import { DateTime } from 'luxon';
import { DataTable, TableBody, TableHead } from '@jobinsjp/vue3-datatable';

const settings = reactive({
  apiUrl: 'https://wp-preflight.local',
});

export default {
  components: {
    TableBody,
    TableHead,
    DataTable,
  },
  setup() {
    // Reactive references
    const tableData = ref([]);
    const pagination = ref({});
    const query = ref({
      search: '',
    });
    const isLoading = ref(false);

    // Template Helper Methods
    const loadData = async query => {
      isLoading.value = true;
      const response = await axios.get(
        settings.apiUrl + '/wp-json/wp/v2/posts',
        {
          params: {
            page: query.page <= 0 ? 1 : query.page,
            per_page: query.per_page,
            search: query.search,
          },
        },
      );
      tableData.value = response.data;
      pagination.value = {
        page: query.page,
        total: Number(response.headers['x-wp-totalpages']),
      };
      isLoading.value = false;
    };

    const formatRenderedContent = content => {
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = content;
      return tmpDiv.textContent || tmpDiv.innerText || '';
    };

    const formatDate = date =>
      date ? DateTime.fromISO(date).toFormat('FF') : null;

    const formatUrl = url => (url.startsWith('http') ? url : `https://${url}`);

    const truncateText = (text, max) => {
      const truncated =
        text && text.length > max
          ? text.slice(0, max).split(' ').slice(0, -1).join(' ')
          : text;

      return truncated + '...';
    };

    return {
      tableData,
      pagination,
      query,
      isLoading,
      loadData,
      formatRenderedContent,
      formatDate,
      formatUrl,
      truncateText,
    };
  },
};
</script>
