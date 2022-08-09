<script>
  import NavButtons from '../components/NavButtons.svelte';
</script>

<div>
  <div class="container">
    <h1 class="text-center">About This Application</h1>
    <p>
      This is an application serving as a simple Task Tracker application. Its
      main purpose is to show practical usage of the Svelte framework and its
      main features in comparison to the other frameworks/libraries such as
      React or Vue.
    </p>
    <NavButtons />
  </div>
</div>

<style>
  .container {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
