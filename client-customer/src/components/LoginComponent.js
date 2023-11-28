import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    return (
      <div className="wrapper">
      <div className="logo">
          <img src="https://yousport.vn/Content/Frontend/assets/images/logo-ys.png" alt=""/>
      </div>
      <div className="text-center mt-4 name">
          <h3>ĐĂNG NHẬP</h3>
        </div>
      <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input type="text" name="userName" id="userName" placeholder="Tên đăng nhập" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
          </div>
          <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input type="password" name="password" id="pwd" placeholder="Mật khẩu" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}/>
          </div>
          <button className="btn mt-3" value="LOGIN" onClick={(e) => this.btnLoginClick(e)} >Đăng nhập</button>
      </form>
  </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
  
    if (!username && !password) {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
    } else if (!username) {
      alert('Vui lòng nhập tên đăng nhập.');
    } else if (!password) {
      alert('Vui lòng nhập mật khẩu.');
    } else {
      const account = { username: username, password: password };
      this.apiLogin(account);
    }
  }
  
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);