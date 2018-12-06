import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/login.css"; 

export default class Login extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          loginName: "",
          password: ""
        };
      }

      handleSubmit = (event) => {
        event.preventDefault();
      }

      validateForm() {
        return this.state.loginName.length > 0 && this.state.password.length > 0;
      }
    
     
      handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

	render()
	{
		return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="loginName">
                        <ControlLabel>Логин(e-mail)</ControlLabel>
                        <FormControl autoFocus type="email" value={this.state.loginName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Пароль</ControlLabel>
                        <FormControl value={this.state.password} onChange={this.handleChange}  type="password" />
                    </FormGroup>
                    <Button block disabled={!this.validateForm()} type="submit">Login/Войти</Button>
                </form>
            </div>
			);
	}
}

