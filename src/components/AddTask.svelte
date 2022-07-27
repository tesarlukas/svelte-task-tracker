<script>
  import { createEventDispatcher } from 'svelte';

  let text = '';
  let day = '';
  let reminder = false;

  const dispatch = new createEventDispatcher();
  const handleSubmit = () => {
    if (!text) {
      alert('Plase add a task');
      return;
    }

    const newTask = { text, day, reminder };
    dispatch('add-task', newTask);
  };
</script>

<form class="add-form" on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <label for="">Task</label>
    <input type="text" placeholder="Add Task" bind:value={text} />
  </div>
  <div class="form-control">
    <label for="">Day & Time</label>
    <input type="text" placeholder="Add Day & Time" bind:value={day} />
  </div>
  <div class="form-control form-control-check">
    <label for="">Set Reminder</label>
    <input type="checkbox" checked={reminder} bind:value={reminder} />
  </div>
  <div class="form-control">
    <input type="submit" class="btn btn-block" value="Save Task" />
  </div>
</form>
