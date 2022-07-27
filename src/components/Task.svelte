<script>
  import { createEventDispatcher } from 'svelte';
  export let task = {};

  const dispatch = new createEventDispatcher();

  const handleDelete = (taskId) => {
    dispatch('delete-task', taskId);
  };

  const handleToggle = (taskId) => {
    dispatch('toggle-reminder', taskId);
  };
</script>

<div
  class={`task ${task.reminder ? 'reminder' : ''}`}
  on:dblclick={handleToggle(task.id)}
>
  <h3>
    {task.text}
    <span style="color:red" on:click={handleDelete(task.id)}>X</span>
  </h3>
  <p>{task.day}</p>
</div>
