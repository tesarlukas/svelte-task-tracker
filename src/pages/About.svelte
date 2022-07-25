<script>
  import { push, pop, replace } from 'svelte-spa-router';
  export let params = {};
</script>

<h2>This is an About page</h2>
<h2>Topic: {params.topic}</h2>

<button on:click={() => pop()}>Back</button>
<button on:click={() => push('/')}>Go Home</button>
