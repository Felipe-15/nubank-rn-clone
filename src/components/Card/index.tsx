import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import {
    PanGestureHandlerGestureEvent,
    PanGestureHandler,
} from 'react-native-gesture-handler';

import {
    CardContainer,
    Header,
    CardContent,
    Title,
    Description,
    CardFooter,
    Annotation,
} from './styles';

type AnimationContext = {
    translateY: number;
};

const Card = () => {
    const translateY = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateY: translateY.value}],
    }));

    const pansGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        AnimationContext
    >({
        onStart: (event, ctx) => {
            ctx.translateY = translateY.value;
        },
        onActive: (event, ctx) => {
            /*console.warn(
                'Evento: ',
                event.translationY,
                'Atual: ',
                translateY.value,
            );*/

            if (event.translationY < 0 && translateY.value < 0) {
                return;
            }

            if (event.translationY > 0 && translateY.value === 280) {
                return;
            }

            if (event.translationY > 300 || event.translationY < -300) {
                return;
            }

            if (translateY.value > 300 || translateY.value < -300) {
                return;
            }

            translateY.value = event.translationY + ctx.translateY;
        },
        onEnd: (event, ctx) => {
            if (translateY.value <= 140) {
                translateY.value = withSpring(0);
            } else {
                translateY.value = withSpring(280);
            }
        },
    });

    return (
        <PanGestureHandler onGestureEvent={pansGestureEvent}>
            <CardContainer style={animatedStyle}>
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
                        Transferência de R$ 20,00 recebida de João Marques hoje
                        às 06:00h.
                    </Annotation>
                </CardFooter>
            </CardContainer>
        </PanGestureHandler>
    );
};

export default Card;
