<template>
  <div id="newItemForm">
    <span>Thing I did:</span>
      <vaadin-text-field
        placeholder="Item Description"
        v-bind:value="newValue"
        v-on:input="handleChange"
        v-on:keydown="handleKeyDown"
        ref="itemDescription"
         />
      <vaadin-button
        aria-label="Create new"
        v-on:click="handleSubmit"
        theme="primary">
        <iron-icon icon="lumo:plus"></iron-icon>
      </vaadin-button>
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

    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.handleSubmit();
      }
    },

    handleSubmit() {
      this.$emit('newThing', { newValue: this.newValue });
      this.newValue = '';
      this.$refs.itemDescription.blur();
    },
  },
};
</script>

<style scoped>
#newItemForm {
  padding: var(--lumo-space-wide-m);
}
</style>
