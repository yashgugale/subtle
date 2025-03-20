<script lang="ts">
	import './button.css';
	let { text = 'default' } = $props();
</script>

<button class="btn">{text}</button>
