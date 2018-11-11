import React, { Component } from 'react';
import Login from './components/Login';
import Manage from './components/Manage';
import './App.css';

class App extends Component {
    state = {
        login : false,
    };

    getData = (val) =>{
        if(val === "성공") {
            this.setState({
                login : true
            });
        }
        alert(val);
    };

  render() {
        const cond = this.state.login;
    return (
      <div className="App">
        <header className="App-header">
            {cond ? <Manage/> : <Login sendData={this.getData}/>}
        </header>
      </div>
    );
  }
}

export default App;
