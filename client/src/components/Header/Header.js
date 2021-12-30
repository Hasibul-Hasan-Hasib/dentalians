import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dashboard } from '@material-ui/icons';
import logo from '../../images/Capture.png';
import { MenuItem } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './Header.css'
import { Form } from 'react-bootstrap';
import { Button, Menu } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    const navActiveStyle = { borderBottom: "2px solid steelblue" };
    return (
        <div className="nav-container">
            <div className="logo-container">
                <img src={logo} className="logo" alt="" />
            </div>
            <nav className="nav-1">
                <div className="link-container">
                    <NavLink className="link" activeStyle={navActiveStyle} to="/home"><Button variant="text">Home</Button></NavLink>
                    <NavLink className="link" activeStyle={navActiveStyle} to="/about"><Button variant="text">About</Button></NavLink>
                    <NavLink className="link" activeStyle={navActiveStyle} to="/services"><Button variant="text">Services</Button></NavLink>
                    <NavLink className="link" activeStyle={navActiveStyle} to="/contact"><Button variant="text">Contact</Button></NavLink>
                    <Form className="d-flex align-items-center">
                        {
                            user.email ?
                                <NavLink className="link" onClick={logOut} to='/login'><Button variant="contained" onClick={logOut}>log out</Button></NavLink>
                                :
                                <NavLink className="link" to='/login'><Button variant="contained" className='link'>Sign In</Button></NavLink>}
                        {
                            user.email && <h5 className='text-dark mx-4'>{user.displayName}</h5>
                        }
                    </Form>
                </div>
            </nav>
            <nav className="nav-2">
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                                <Dashboard />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}><NavLink className="link" activeStyle={navActiveStyle} to="/home">Home</NavLink></MenuItem>
                                <MenuItem onClick={popupState.close}><NavLink className="link" activeStyle={navActiveStyle} to="/about">About</NavLink></MenuItem>
                                <MenuItem onClick={popupState.close}><NavLink className="link" activeStyle={navActiveStyle} to="/courses">Courses</NavLink></MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Form className="d-flex flex-column">
                                        {
                                            user.email ?
                                                <NavLink className="link" onClick={logOut} to='/login'><Button variant="contained" onClick={logOut}>log out</Button></NavLink>
                                                :
                                                <NavLink className="link" to='/login'><Button variant="contained" className='link'>Sign In</Button></NavLink>}
                                        {
                                            user.email && <h5 className='text-dark ms-2'>{user.displayName}</h5>
                                        }
                                    </Form>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </nav>
        </div>
    );
};

export default Header;