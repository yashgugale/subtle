<script lang="ts">
	import './button.css';
	let { text = 'Default' } = $props();
</script>

<button class="btn">{text}</button>
