<script lang="ts">
	import './login.css';
	import Button from '$lib/components/button/Button.svelte';
	import Input from '../input/Input.svelte';

	let {
		loginTitle = 'Login',
		loginDescription = 'Enter your email below to login to you account',
		emailPlaceholder = 'm@example.com',
		passwordPlaceholder = 'password',
		newUserText = "Don't have an account?",
		signUpLink = 'Sign Up'
	} = $props();
</script>

<div class="login">
	<div class="login-content">
		<div class="login-header">
			<h1>{loginTitle}</h1>
			<div>{loginDescription}</div>
		</div>
		<div class="login-form">
			<div class="email">
				<div>Email</div>
				<Input type="email" placeholder={emailPlaceholder} />
			</div>
			<div class="password">
				<div class="password-header">
					<div>Password</div>
					<div>Forgot password?</div>
				</div>
				<Input type="password" placeholder={passwordPlaceholder} />
			</div>
			<Button text="Login" />
			<div class="no-account">{newUserText} <a class="signup-link">{signUpLink}</a></div>
		</div>
	</div>
</div>
