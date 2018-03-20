<template>
  <div>
    <h2>Thing I did:</h2>
    <form v-on:submit.prevent="handleSubmit">
      <input
        aria-label="New item"
        placeholder="New Item"
        type="text"
        v-bind:value="newValue"
        v-on:change="handleChange" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      newValue: '',
    };
  },
  methods: {
    handleChange(event) {
      this.newValue = event.target.value;
    },

    handleSubmit() {
      this.$emit('newThing', { newValue: this.newValue });
      this.newValue = '';
    },
  },
};
</script>

<style scoped>

</style>
