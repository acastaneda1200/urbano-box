import { defineStore } from 'pinia';

export const useUtilityStore = defineStore('utility', {
  state: () => ({
    backgroundColor: '',
    backgroundImage: '',
    firstTitleChip: '',
    secondTitleChip: '',
  }),
  getters: {
  },
  actions: {
    setBackgroundImage(img) {
      this.backgroundImage = img;
    },
  },
});
