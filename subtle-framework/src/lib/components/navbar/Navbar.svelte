<script lang="ts">
	import './navbar.css';
	let { brand = '', links = ['Home', 'About', 'Contact'] } = $props();

	let activeLink = $state(links[0]);
	function setActive(link: string) {
		activeLink = link;
	}
</script>

<nav class="navbar">
	<div class="navbar-brand">
		<a class="brand" href="#">{brand}</a>
	</div>
	<div class="navbar-links">
		{#each links as link}
			<a
				class="navbar-link"
				class:active={activeLink === link}
				onclick={() => setActive(link)}
				href="#">{link}</a
			>
		{/each}
	</div>
	<!-- <div class="navbar-login">Login/SignUp</div> -->
</nav>
