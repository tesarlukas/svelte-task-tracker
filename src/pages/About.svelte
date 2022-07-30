<script>
  import NavButtons from '../components/Buttons.svelte';
  export let params = {};
</script>

<div>
  <div class="container">
    <h1 class="text-center">About This Application</h1>
    <p>This is an application serving as a simple Task Tracker application.</p>
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
