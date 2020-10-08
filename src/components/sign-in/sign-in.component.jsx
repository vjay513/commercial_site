import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password:''})
    }

    handleChnage = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="password" value={this.state.email} onChange={this.handleChnage} label="Email" required/>
                <FormInput type="email" value={this.state.password} onChange={this.handleChnage} label="Password" required/>
                <CustomButton type="button"> Sign in</CustomButton>
            </form>
            </div>
        )
    }
    
}

export default SignIn;