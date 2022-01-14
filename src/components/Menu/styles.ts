import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {alignItems: 'center'},
})`
    margin: 0 30px;
`;

export const Code = styled.View`
    background: #fff;
    padding: 10px;
`;

export const Nav = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.6);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.6);
`;

export const NavText = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`;

export const SignOutText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff;
`;
