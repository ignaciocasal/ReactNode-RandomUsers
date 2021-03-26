import React from 'react';
import {Container, Icon, Menu} from "semantic-ui-react";

const Header = () => {
    return (
        <Menu color='violet' inverted stackable style={{borderRadius: 0}}>
            <Container>
                <Menu.Item>
                    <h2><Icon name='react'/> <Icon name='node js'/> React-Node | Random Users</h2>
                </Menu.Item>
            </Container>
        </Menu>
    )
};
export default Header;
