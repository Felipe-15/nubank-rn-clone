import React from 'react';

import {Container, Content} from './styles';

import Header from '../components/Header';
import {StatusBar} from 'react-native';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import Menu from '../components/Menu';

const App = () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={'#8b10ae'} />
            <Header />
            <Content>
                <Menu />
                <Card />
            </Content>
            <Tabs />
        </Container>
    );
};

export default App;
