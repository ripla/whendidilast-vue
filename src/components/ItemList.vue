<template>
  <div class="grid-wrapper">
    <template v-for="item in sortedItems">
      <div v-bind:key="item.id + '2'">{{item.date}}</div>
      <div v-bind:key="item.id + '3'">{{item.description}}</div>
      <button
        v-bind:key="item.id + '4'"
        v-on:click="handleClick(item.id)">I did this!</button>
      <button
        class="remove"
        v-bind:key="item.id + '5'"
        v-on:click="handleRemove(item.id)">X</button>
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
    grid-template-columns: minmax(50px, 1fr) 2fr 1fr 1fr;
    grid-gap: 5px;
  }

  button.remove {
    width: fit-content;
  }

</style>
