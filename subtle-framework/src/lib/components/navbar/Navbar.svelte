<script lang="ts">
	import './navbar.css';
	let { brand = '', links = ['Home', 'About', 'Contact'] } = $props();
</script>

<nav class="navbar">
	<div class="navbar-brand">{brand}</div>
	<div class="navbar-links">
		{#each links as link}
			<a href="#">{link}</a>
		{/each}
	</div>
</nav>
