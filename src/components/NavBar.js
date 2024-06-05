import React, { useContext } from 'react'
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE, NEWS_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(()=>{
    const {user} = useContext(Context)
    const navigate= useNavigate()
    const logOut=()=>{
      user.setUser({})
      user.setIsAuth(false)
      user.setIsAdmin(false)
    }
  return(
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <NavLink style={{ color: 'white' }} to={NEWS_ROUTE}>Новости компании</NavLink>
        {user.isAuth ? (
            user.isAdmin ? (
                <Nav className="ms-auto" style={{ color: 'white' }}>
                    <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Админ</Button>
                    <Button variant='outline-light' onClick={() => logOut()}>Выйти</Button>
                </Nav>
            ) : (
                <Nav className="ms-auto" style={{ color: 'white' }}>
                    <Button variant='outline-light' onClick={() => logOut()}>Выйти</Button>
                </Nav>
            )
        ) : (
            <Nav className="ms-auto" style={{ color: 'white' }}>
                <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
        )}
    </Container>
</Navbar>

  );
})
export default NavBar;

