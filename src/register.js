import './register.css';
const Register = () => {
    return(
        <div id='container'>
<form id="test" class="ui form" method="POST" action="">
	<h4 class="ui center aligned top attached header">Please enter your credentials</h4>
	<div id="form-segment" class="ui center aligned attached segment">
		<div class="field">
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" placeholder="John Doe"/>
		</div>
		<div class="field">
			<label for="email">E-mail:</label>
			<input type="email" id="email" name="email" placeholder="john@doe.com"/>
		</div>
		<div class="field">
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" placeholder="••••••••"/>
		</div>
	</div>
	<div id="form-message" class="ui attached message">
		<i class="icon help"></i>
		Already registered? Please login <a href="#">here</a>.
	</div>
	<button class="ui bottom attached fluid button" type="submit">Register</button>
</form>
</div>
    )
}
export default Register;