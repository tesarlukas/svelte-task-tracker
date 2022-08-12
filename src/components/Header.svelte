<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  export let showAddTask = false;

  const dispatch = new createEventDispatcher();

  const handleToggle = () => {
    dispatch('toggle-show');
  };
</script>

<header>
  <h1><slot /></h1>
  <Button onClick={handleToggle} color={showAddTask ? 'red' : 'green'}>
    {showAddTask ? 'Close' : 'Add'}
  </Button>
</header>
