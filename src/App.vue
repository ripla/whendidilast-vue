<template>
  <div id="app">
    <title-view></title-view>
    <new-item-form v-on:newThing="handleNewThing"></new-item-form>
    <item-list
      v-bind:items="items"
      v-on:done="handleDone"
      v-on:remove="handleRemove">
    </item-list>
  </div>
</template>

<script>
import md5 from 'md5';
import ItemList from './components/ItemList';
import TitleView from './components/TitleView';
import NewItemForm from './components/NewItemForm';
import showNotification from './showNotification';

export default {
  name: 'App',
  components: {
    ItemList,
    TitleView,
    NewItemForm,
  },

  data() {
    const fromStorage = localStorage.getItem('whendidilast');
    const emptyState = {
      items: [],
    };

    return fromStorage ? JSON.parse(fromStorage) : emptyState;
  },

  watch: {
    items(newItems) {
      localStorage.setItem('whendidilast', JSON.stringify({
        items: newItems,
      }));
    },
  },

  methods: {
    handleDone(event) {
      const clickedItem = this.items.find(item => item.id === event.id);
      clickedItem.date = this.getCurrentDate();
    },

    handleNewThing(event) {
      const newThingDescription = event.newValue;

      if (!newThingDescription || newThingDescription === '') {
        return;
      }

      const newThingId = md5(newThingDescription + Math.round((new Date()).getTime() / 1000));
      const newThingDate = this.getCurrentDate();
      const newThing = { id: newThingId, date: newThingDate, description: newThingDescription };

      this.items.push(newThing);

      showNotification(`Added item <i>${newThingDescription}</i>`);
    },

    handleRemove(event) {
      const clickedItem = this.items.find(item => item.id === event.id);
      this.items.splice(this.items.indexOf(clickedItem), 1);
      showNotification(`Removed item <i>${clickedItem.description}</i>`);
    },

    getCurrentDate() {
      return new Date().toISOString();
    },
  },
};
</script>

<style>
#app {

}
</style>
