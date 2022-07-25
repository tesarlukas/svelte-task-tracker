<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Error from './pages/Error.svelte';

  let routes = {
    '/': Home,
    '/about': About,
    '/about/:topic': About,

    '*': Error,
  };
</script>

<main>
  <nav>
    <div class="logo">Task Tracker</div>
    <div class="separator">|</div>
    <a href="#/">Home</a>
    <a href="#/About">About</a>
  </nav>
  <Router {routes} />
</main>

<style>
</style>
