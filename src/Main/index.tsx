import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Container, Content} from './styles';

import Header from '../components/Header';
import {StatusBar} from 'react-native';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import Menu from '../components/Menu';

type AnimationContext = {
    translateY: number;
};

const App = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#8b10ae'}
                />
                <Header />
                <Content>
                    <Menu />
                    <Card />
                </Content>
                <Tabs />
            </Container>
        </GestureHandlerRootView>
    );
};

export default App;
