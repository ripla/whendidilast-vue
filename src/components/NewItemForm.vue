<template>
  <div id="newItemForm">
    <span>Thing I did:</span>
    <vaadin-text-field
      placeholder="description"
      v-bind:value="newValue"
      v-on:input="handleChange"
      v-on:keydown="handleKeyDown"
      ref="itemDescription"
        />
    <vaadin-button
      aria-label="Create new"
      v-on:click="handleSubmit"
      theme="primary icon">
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
    },
  },
};
</script>

<style scoped>
#newItemForm {
  margin: var(--lumo-space-wide-m);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#newItemForm span {
  margin-right: 0.5em;
}
</style>
