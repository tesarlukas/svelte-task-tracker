<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  export let showAddTask = false;

  const dispatch = new createEventDispatcher();

  const handleToggle = () => {
    dispatch('toggle-show');
  };
  // this must be done through dispatch, because if you drill a prop through
  // component and change it here, it wouldn't trigger rerender in upper component
</script>

<header>
  <h1><slot /></h1>
  <Button onClick={handleToggle} color={showAddTask ? 'red' : 'green'}>
    {showAddTask ? 'Close' : 'Add'}
  </Button>
</header>
