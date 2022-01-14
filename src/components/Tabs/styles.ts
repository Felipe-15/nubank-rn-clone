import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    padding: 10px;
    justify-content: space-between;
    margin-left: 8px;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #fff;
`;
