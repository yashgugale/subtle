<script lang="ts">
	import './image.css';
	let { src = '', alt = '', width = '', height = '' } = $props();
</script>

<img {src} {alt} {width} {height} />
