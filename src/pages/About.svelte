<script>
  import { push, pop, replace } from 'svelte-spa-router';
  export let params = {};
</script>

<div>
  This is the about page

  <button class="btn" on:click={() => pop()}>Back</button>
  <button class="btn" on:click={() => push('/')}>Go Home</button>
</div>
