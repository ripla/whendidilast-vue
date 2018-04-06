<template>
  <div class="grid-wrapper">
    <div class="header">Date when done</div>
    <div class="header">What did I do</div>
    <div class="header">Mark as done</div>
    <div class="header">Remove item</div>
    <template v-for="item in sortedItems">
      <div v-bind:key="item.id + '2'">{{item.date}}</div>
      <div v-bind:key="item.id + '3'">{{item.description}}</div>
      <div v-bind:key="item.id + '4'" class="button-wrapper">
        <vaadin-button
          aria-label="Mark as done"
          theme="primary icon success"
          v-on:click="handleClick(item.id)">
            <iron-icon icon="lumo:checkmark"></iron-icon>
        </vaadin-button>
      </div>
      <div v-bind:key="item.id + '5'" class="button-wrapper">
        <vaadin-button
          aria-label="Mark as done"
          theme="primary icon error"
          v-on:click="handleRemove(item.id)">
            <iron-icon icon="lumo:cross"></iron-icon>
        </vaadin-button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: ['items'],

  computed: {
    sortedItems() {
      return this.items.slice().sort((a, b) => a.date > b.date);
    },
  },

  methods: {
    handleClick(id) {
      this.$emit('done', { id });
    },

    handleRemove(id) {
      this.$emit('remove', { id });
    },
  },
  mounted() {
    // console.log(this.$refs.grid);
    // console.log(this.items);
    // this.$refs.grid.items = this.items;
  },
};
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: minmax(50px, 1fr) minmax(50px, 1fr) auto auto;
    grid-column-gap: var(--lumo-size-m);

    margin: var(--lumo-space-wide-m);
  }

  .header {
    font-size: var(--lumo-font-size-l);
    font-weight: bold;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  button, vaadin-button {
    width: fit-content;

  }

</style>
