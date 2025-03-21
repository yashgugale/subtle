<script>
	// import cssProperties from '$lib/knowledgebase/cssProperties';
	import Button from '$lib/components/button/Button.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Login from '$lib/components/login/Login.svelte';

	const nav_info = {
		brand: 'SF',
		links: ['Home', 'About', 'Coding', 'Art', 'Contact']
	};

	// // Output the categories (for now as console.log, we'll adjust this later)
	// cssProperties.colorAndBackground.forEach((category) => {
	// 	console.log('\n');
	// 	console.log(category.name);
	// 	console.log(category.description);
	// 	console.log(category.sampleUse);
	// });
</script>

<Navbar {...nav_info} />
<Login />
