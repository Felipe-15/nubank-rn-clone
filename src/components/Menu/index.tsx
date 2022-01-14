import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';

import {
    Container,
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutText,
} from './styles';

const Menu = () => {
    return (
        <Container>
            <Code>
                <QRCode
                    value={'https://github.com/Felipe-15'}
                    size={80}
                    backgroundColor="#fff"
                    color="#8b10ae"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda!</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton>
                <SignOutText>SAIR DO APP</SignOutText>
            </SignOutButton>
        </Container>
    );
};

export default Menu;
