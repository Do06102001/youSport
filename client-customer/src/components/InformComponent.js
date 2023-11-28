import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import { FaUser } from "react-icons/fa";

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
<div className="menu-botton">
  <div className="home-link">
    {this.context.token === '' ?
      <div className="dropdown">
      <button className="dropbtn"><FaUser className='home-icon'/></button>
      <div className="dropdown-content">
      <Link to='/login' className="home-link">ĐĂNG NHẬP</Link>
        <Link to='/signup' className="home-link">ĐĂNG KÝ</Link>
      </div>
    </div>
      :
      <div className="float1">
          <Link className="home-link" to='/myorders'>ĐƠN HÀNG |</Link><Link className="home-link" to='/home' onClick={() => this.lnkLogoutClick()}> ĐĂNG XUẤT </Link>| <Link to='/myprofile'>{this.context.customer.name} </Link>
  
      </div>
    }
  </div>
</div>
    );
  }
    // event-handlers
    lnkLogoutClick() {
      this.context.setToken('');
      this.context.setCustomer(null);
      this.context.setMycart([]);
    }
}
export default Inform;