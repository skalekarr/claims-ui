import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';

export const NavigationBar = () => {
    function handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    const navInstance = (
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/">
                PolicySearch
            </NavItem>
        </Nav>
    );

    return navInstance;
}