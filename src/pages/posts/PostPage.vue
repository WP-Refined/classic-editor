<template>
  <va-card color="background" style="padding: 2rem 0.75rem 0.75rem">
    <div class="row">
      <va-input
        v-model.number="perPage"
        class="flex mb-2 md3"
        type="number"
        placeholder="Items..."
        label="Items per page"
      />

      <va-input
        v-model.number="currentPage"
        class="flex mb-2 md3"
        type="number"
        placeholder="Page..."
        label="Current page"
      />

      <va-input
        v-model="filter"
        class="flex mb-2 md3"
        placeholder="Filter..."
      />
    </div>

    <va-data-table
      :items="items"
      :columns="columns"
      :per-page="perPage"
      :current-page="currentPage"
      :selectable="true"
      :filter="filter"
      @filtered="filtered = $event.items"
    >
      <template #bodyAppend>
        <tr>
          <td colspan="8" class="table-example--pagination">
            <va-pagination v-model="currentPage" input :pages="pages" />
          </td>
        </tr>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import { defineComponent } from 'vue';
import { VaCard, VaInput, VaDataTable } from 'vuestic-ui';

export default defineComponent({
  components: {
    VaDataTable,
    VaCard,
    VaInput,
  },
  data() {
    const users = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        website: 'ramiro.info',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
        website: 'kale.biz',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        phone: '(254)954-1289',
        website: 'demarco.info',
      },
    ];

    const columns = [
      { key: 'id', sortable: true },
      { key: 'username', sortable: true },
      { key: 'name', sortable: true },
      { key: 'email', sortable: true },
      { key: 'phone' },
      { key: 'website' },
    ];

    return {
      items: users,
      columns,
      perPage: 3,
      currentPage: 1,
      filter: '',
      filtered: users,
    };
  },

  computed: {
    pages() {
      return this.perPage && this.perPage !== 0
        ? Math.ceil(this.filtered.length / this.perPage)
        : this.filtered.length;
    },
  },
});
</script>

<style lang="scss" scoped>
.table-example--pagination {
  text-align: center;
  text-align: -webkit-center;
}
</style>
