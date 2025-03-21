<script lang="ts">
	import './input.css';
	let { type = 'text', placeholder = 'Enter text here' } = $props();
</script>

<input {type} {placeholder} class="input" />
