import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        id : "",
        pw : "",
    };

    updateInputValue = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    handleLogin = (e) =>{
        if(this.state.id == "admin" && this.state.pw == "admin"){
            this.props.sendData("성공");
        }else{
            this.props.sendData("실패");
        }
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        name="id"
                        onChange={this.updateInputValue}
                        value={this.state.id}
                    >
                    </input>
                </div>
                <div>
                    <input
                        type="password"
                        name="pw"
                        onChange={this.updateInputValue}
                        value={this.state.pw}
                    >
                    </input>
                </div>

                <button onClick={this.handleLogin}>login</button>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
