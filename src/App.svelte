<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Error from './pages/Error.svelte';
  import Focus from './pages/Focus.svelte';

  let routes = {
    '/': Home,
    '/about': About,
    '/about/:topic': About,
    '/focus': Focus,

    '*': Error,
  };
</script>

<main>
  <nav>
    <div class="logo">TrackerApp</div>
    <div class="separator">|</div>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/focus">Focus</a>
  </nav>
  <Router {routes} />
  <footer>© 2022 Lukáš Tesař</footer>
</main>
