import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    
    return (
<Navbar collapseOnSelect expand="lg" className="menu-body">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://yousport.vn/Content/Frontend/assets/images/logo-ys.png"
              width="120px"
              height="40px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <li className="menu"><Link to='/admin/home'>TRANG CHỦ</Link></li>
          <li className="menu"><Link to='/admin/category'>DANH MỤC</Link></li>
          <li className="menu"><Link to='/admin/product'>SẢN PHẨM</Link></li>
          <li className="menu"><Link to='/admin/order'>ĐẶT HÀNG</Link></li>
          <li className="menu"><Link to='/admin/customer'>KHÁCH HÀNG</Link></li>         
          </Nav>
          <Nav className="logout">
          <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>ĐĂNG XUẤT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;