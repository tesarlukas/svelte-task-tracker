<script>
  import { push, pop, replace } from 'svelte-spa-router';
</script>

<div class="buttons">
  <button class="btn" on:click={() => pop()}>Back</button>
  <button class="btn" on:click={() => push('/')}>Go Home</button>
</div>

<style>
  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
