<script>
  import AddTask from './AddTask.svelte';
  import Header from './Header.svelte';
  import Task from './Task.svelte';

  export let tasks = [{ id: 1, text: 'hello' }];

  let showAddTask = false;

  const toggleShow = () => {
    showAddTask = !showAddTask;
  };
</script>

<div class="container">
  <Header {showAddTask} on:toggle-show={toggleShow}>Tasks</Header>
  {#if showAddTask}
    <AddTask on:add-task />
  {/if}
  {#if tasks.length > 0}
    {#each tasks as task (task.id)}
      <Task {task} on:delete-task on:toggle-reminder />
    {/each}
  {:else}
    <p>There are no tasks</p>
  {/if}
</div>
