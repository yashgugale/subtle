<script>
	import Button from '$lib/components/button/Button.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';

	const nav_info = {
		brand: 'Subtle Framework',
		links: ['Home', 'About', 'Coding', 'Art', 'Contact']
	};
</script>

<Navbar {...nav_info} />
<Button text="Click me!" />
<Button />
