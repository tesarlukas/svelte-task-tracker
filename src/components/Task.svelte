<script>
  import { createEventDispatcher } from 'svelte';
  import { TaskStore } from '../stores';

  export let task = {};

  const dispatch = new createEventDispatcher();

  const handleDelete = (taskId) => {
    dispatch('delete-task', taskId);
  };

  const handleToggle = (taskId) => {
    dispatch('toggle-reminder', taskId);
  };

  const handleFocus = (task) => {
    TaskStore.set(task);
    alert('Your focus has been set to this task');
  };
</script>

<div
  class={`task ${task.reminder ? 'reminder' : ''}`}
  on:dblclick={handleToggle(task.id)}
>
  <h3>
    {task.text}
    <div>
      <i
        class="fas fa-check"
        style="color: blue"
        on:click={handleFocus(task)}
      />
      <i
        class="fas fa-times"
        style="color: red"
        on:click={handleDelete(task.id)}
      />
    </div>
  </h3>
  <p>{task.day}</p>
</div>
