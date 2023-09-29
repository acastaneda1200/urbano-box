import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    backgroundColor: '',
    backgroundImage: '',
    firstTitleChip: '',
    secondTitleChip: '',
  }),
  getters: {
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
