<!--<template> -->
  <!-- <div class="grid-wrapper">
    <template v-for="item in sortedItems">
      <div v-bind:key="item.id + '2'">{{item.date}}</div>
      <div v-bind:key="item.id + '3'">{{item.description}}</div>
      <button
        v-bind:key="item.id + '4'"
        v-on:click="handleClick(item.id)">Mark as done!</button>
      <button
        class="remove"
        v-bind:key="item.id + '5'"
        v-on:click="handleRemove(item.id)">X</button>
    </template>
  </div> -->
  
<!--<template> -->
  <!-- <vaadin-grid v-bind:items="itemsAsJson">
        <vaadin-grid-column>
          <template class="header">First Name</template>
          <template>[[item.date]]</template>
          <template class="footer">First Name</template>
        </vaadin-grid-column>

        <vaadin-grid-column>
          <template class="header">Last Name</template>
          <template>[[item.description]]</template>
          <template class="footer">Last Name</template>
        </vaadin-grid-column>
  </vaadin-grid>  -->
<!-- </template> -->

<script>
const createTemplate = (createElement, dataObject, contents) => createElement('template', dataObject, contents);

const createColumn = (createElement, name) => createElement('vaadin-grid-column', [
  createTemplate(createElement, { class: { header: true } }, name),
  createTemplate(createElement, `[[item.${name}]]`),
  createTemplate(createElement, { class: { footer: true } }, name)]);

export default {
  name: 'ItemList',
  props: ['items'],

  render(createElement) {
    const propItems = this.itemsAsJson;
    return createElement('vaadin-grid', {
      attrs: {
        items: propItems,
      },
    },
    [createColumn(createElement, 'date')],
    );
  },

  computed: {
    sortedItems() {
      return this.items.slice().sort((a, b) => a.date > b.date);
    },

    itemsAsJson() {
      return JSON.stringify(this.items);
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
};
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: minmax(50px, 1fr) 2fr 1fr 1fr;
    grid-gap: 5px;
  }

  button.remove {
    width: fit-content;
  }

</style>
