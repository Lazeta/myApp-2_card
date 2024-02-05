import styled from "styled-components";
import { myTheme } from "../MyTheme.styled";

type ButtonPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "finite"
    active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 8rem;
    border: 2px solid ${myTheme.colors.primary};
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || "1.2rem"};
    font-weight: bold;
    background-color: transparent;
`