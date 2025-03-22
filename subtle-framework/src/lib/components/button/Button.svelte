<script lang="ts">
	import './button.css';
	// let { text = 'Default', btnType = 'button' } = $props();
	let {
		text = 'Default',
		type = 'button'
	}: { text?: string; type?: 'button' | 'submit' | 'reset' } = $props();
</script>

<button class="btn" {type}>{text}</button>
