import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    CardContainer,
    Header,
    CardContent,
    Title,
    Description,
    CardFooter,
    Annotation,
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <Header>
                <Icon name="attach-money" size={28} color="#555" />
                <Icon name="visibility-off" size={28} color="#555" />
            </Header>
            <CardContent>
                <Title>Saldo Disponível</Title>
                <Description>R$ 7.655,68</Description>
            </CardContent>
            <CardFooter>
                <Annotation>
                    Transferência de R$ 20,00 recebida de João Marques hoje às
                    06:00h.
                </Annotation>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
