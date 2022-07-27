<script>
  export let color = '';
  export let onClick = () => alert('Function is missing');
</script>

<button class="btn" style={`background-color: ${color}`} on:click={onClick}>
  <slot />
</button>
