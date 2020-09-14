import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'

function Login() {
		// changes url programatically
		const history = useHistory();
		{/* utilize state the useState hook to track input in our input field with an empty str */}
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		{/* Prevent the page from refreshing once signIn event (submit) is called */}
		const signIn = e => {
			e.preventDefault()
			// insert fancy firebase shit
			auth
				.signInWithEmailAndPassword(email, password)
				.then(auth => {
					history.push('/')
				})
				.catch(error => alert(error.message))
		}

		const register = e => {
			e.preventDefault();
			// create a new acct using preset firebase authentication with email & password
			auth 
				.createUserWithEmailAndPassword(email, password)
				.then((auth) => {
					// create a new user with email & password through auth var
					if (auth) {
						history.push('/')
					}
				})
				// if there's an error for any reason, alert me 
				.catch(error => alert(error.message))
		}

	return (
		<div className='login'>
			<Link to='/'>
				<img 
					className='login__logo' 
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
				/>
			</Link>

			<div className='login__container'>
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					{/* User needs to input to set email then map their email value to set email to and have access to our email var */}
					<input type='text' value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type='password' value={password} onChange={e => setPassword(e.target.value)} /> {/* type='password' renders input as asterisk */} 

					<button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
				</form>

				<p>
					By signing-in, you agree to AmaXon CLONE's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
				</p>

				<button className='login__registerButton' onClick={register}>Create Your AmaXon Account</button>
			</div>
		</div>
	)
}

export default Login;
