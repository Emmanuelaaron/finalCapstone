import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import LogOut from './LogOut';
import menuIcon from '../Img/menu.png';
import facebookImg from '../Img/facebook.png';
import twitterImg from '../Img/twitter.png';
import googleplusImg from '../Img/googleplus.png';
import pinterestImg from '../Img/pinterest.png';
import vimeoImg from '../Img/vimeo.png';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState('d-none');

  const menuLinks = [
    {
      id: 1,
      path: '/',
      text: 'Home'
    },
    {
      id: 2,
      path: '/newreservation',
      text: 'Reservation Form'
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Reservations'
    },
    {
      id: 4,
      path: '/newcar',
      text: 'Add Car'
    },
    {
      id: 5,
      path: '/deletecar',
      text: 'Remove Car'
    },
    {
      id: 6,
      path: '/logout',
      text: 'Log Out'
    }
  ];

  const menuBtnHandler = () => {
    if (menuStatus === 'd-none') {
      setMenuStatus('d-block');
    } else {
      setMenuStatus('d-none');
    }
  };

  return (
    <Nav className="d-flex flex-row d-md-flex flex-md-column justify-content-between navbar m-0 p-0 flex-nowrap" >
      <button
        className="d-md-none border-0 bg-transparent p-2 order-0"
        onClick={menuBtnHandler}
      >
        <img className="menuIcon" src={menuIcon} />
      </button>
      <p className="menuTitle order-3 order-md-0">J.D.E. Motor's</p>
      <div className="align-self-stretch flex-fill w-100 p-0 order-1 order-md-1">
        <ul className={menuStatus + " d-md-flex flex-md-column justify-content-around link-container ps-2"}>
          {
            menuLinks.map((link) => (
              link.id !== 6 ?
                (
                  <li
                    className="nav-item"
                    key={link.id}
                    onClick={() => setMenuStatus('d-none')}
                  >
                    <NavLink
                      className="fs-5 nav-link px-3"
                      to={link.path}
                      activeclassname="active"
                      exact="true"
                    >
                      {link.text.toUpperCase()}
                    </NavLink>
                  </li>
                )
                :
                (
                  <li className="nav-item log-out py-2" key={link.id}>
                    <LogOut text={link.text.toUpperCase()} />
                  </li>
                ) 
            ))
          }
        </ul>
      </div>
      <div className="d-none d-md-block m-0 order-md-2">
        <div className="d-flex flex-row justify-content-around m-0">
          <a href="#" target="_blank"><img className="nav-icons" src={twitterImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={facebookImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={googleplusImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={vimeoImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={pinterestImg} /></a>
        </div>
        <p className="d-none d-md-block text-muted m-0">{'© 2021 Microverse & C.S.P.A'}</p>
      </div>
    </Nav>
  );
};

export default Navbar;