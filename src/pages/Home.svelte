<script>
  import { onMount } from 'svelte';
  import Tasks from '../components/Tasks.svelte';

  let tasks = [];

  onMount(async () => {
    tasks = await fetchTasks();
  });

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`);
    const data = res.json();

    return data;
  };

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5001/tasks');
    const data = await res.json();

    return data;
  };

  const addTask = async (e) => {
    const newTask = e.detail;

    const res = await fetch('http://localhost:5001/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();

    tasks = [...tasks, data];
  };

  const deleteTask = async (e) => {
    const taskId = e.detail;

    await fetch(`http://localhost:5001/tasks/${taskId}`, {
      method: 'DELETE',
    });
    tasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
  };

  const toggleReminder = async (e) => {
    const taskId = e.detail;
    const taskToToggle = await fetchTask(taskId);
    const toggledTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5001/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(toggledTask),
    });

    const data = await res.json();
    console.log(data);

    // interestingly Svelte doesn't compile "find" method into "update the state" so it doesn't trigger rerender
    // const taskToUpdate = tasks.find((task) => task.id === taskId);
    // taskToUpdate.reminder = data.reminder;
    tasks = tasks.map((task) => {
      return task.id !== taskId ? task : { ...task, reminder: data.reminder };
    });
  };
</script>

<Tasks
  {tasks}
  on:add-task={addTask}
  on:delete-task={deleteTask}
  on:toggle-reminder={toggleReminder}
/>
