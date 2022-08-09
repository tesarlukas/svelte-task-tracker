<script>
  import NavButtons from '../components/NavButtons.svelte';
  import { TaskStore } from '../stores';
  // import { onDestroy, onMount } from 'svelte';

  // let task = {};

  // const unsubscribe = TaskStore.subscribe((data) => (task = data));

  // onDestroy(() => {
  //   console.log('destroyed');
  //   unsubscribe();
  // });
</script>

<div class="container">
  <h1 class="text-center">Your main focus today is</h1>
  <div class="task">
    {#if $TaskStore.text}
      <h3>{$TaskStore.text}</h3>
      <p>{$TaskStore.day}</p>
    {:else}
      <p class="text-center">There is no task you are focused on</p>
    {/if}
  </div>
  <NavButtons />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .task {
    margin: 20px 5px;
  }
</style>
