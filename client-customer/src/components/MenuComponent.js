import axios from 'axios';
import MyContext from '../contexts/MyContext';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Inform from './InformComponent';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";





class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  
  static contextType = MyContext;
  
  render() {
    const cates = this.state.categories.map((item) => (
      <li key={item._id} className="menu">
        <Link to={'/product/category/' + item._id}>{item.name}</Link>
      </li>
    ));
    
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className='menu-list' fixed="top">
            <Container fluid className='menu-list1'> 
              <Navbar.Brand href="/home">
                <img
                  src="https://yousport.vn/Content/Frontend/assets/images/logo-ys.png"
                  width="150px"
                  height="50px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand href="/home">
                      <img
                        src="https://yousport.vn/Content/Frontend/assets/images/logo-ys.png"
                        width="150px"
                        height="50px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                      />
                    </Navbar.Brand>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Nav className="hihihi flex-grow-1 pe-1 " >

                    <Nav.Link href="/home" className='home-link'>TRANG CHỦ</Nav.Link>
                    <Nav.Link href="/" className='home-link'>{cates}</Nav.Link>
                    
                  </Nav>
                      
                  <div className='search-box'>
                    <form className="home-link" id="searchbox" method="get" type="search" autoComplete="off">
                      <input name="" type="text" size="15" placeholder="Bạn đang tìm kiếm..." value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
                      <input id="button-submit" type="submit" value="" onClick={(e) => this.btnSearchClick(e)} />
                    </form>
                  </div>
                  <div className='huhuhu'>
                    <Nav.Link href="/gmap" ><FaMapMarkedAlt className='home-basket'/></Nav.Link>             
                    <Nav.Link href="" className='inform-link'><Inform /></Nav.Link>
                    <Link to='/mycart' className='home-icon'><FaCartShopping className='home-map'/> <p className='item-shop'>{this.context.mycart.length}</p></Link>
                  </div>
                  <div style={{ display: "inline" }} className="form-switch">
                    <input className="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} />&nbsp;
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }

  // event-handlers
  ckbChangeMode(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }

  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}

export default withRouter(Menu);
