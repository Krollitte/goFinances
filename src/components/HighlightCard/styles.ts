import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

const Container = styled.View<TypeProps>`
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  border-radius: 5px;
  width: ${RFValue(300)}px;
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ type }) =>
    type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

const Footer = styled.View``;

const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;

const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;

export { Container, Header, Title, Icon, Footer, Amount, LastTransaction };
