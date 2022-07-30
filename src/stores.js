import { writable } from 'svelte/store';

export const TaskStore = writable({
  id: undefined,
  text: undefined,
  day: undefined,
});
