import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
<div class="wrapper">
      <div class="logo">
          <img src="https://yousport.vn/Content/Frontend/assets/images/logo-ys.png" alt=""/>
      </div>
      <div class="text-center mt-4 name">
          <h3>THÔNG TIN TÀI KHOẢN</h3>
        </div>
      <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input type="text" name="userName" id="userName" placeholder="Tên đăng nhập" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}  />
          </div>
          <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input type="password" name="password" id="pwd" placeholder="Mật khẩu" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="text" placeholder="Tên khách hàng" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="tel" placeholder="Số điện thoại" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input type="email" placeholder="Email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} />
          </div>
          <button class="btn mt-3" type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} >Cập nhập</button>
      </form>
  </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('Cập nhập hoàn tất');
        this.context.setCustomer(result);
      } else {
        alert('Vui lòng thử lại');
      }
    });
  }
}
export default Myprofile;