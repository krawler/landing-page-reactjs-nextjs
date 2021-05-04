import styled, { CSS } from "styled-components";

const titleSize = {
    small: (theme) => CSS`
        font-size: ${theme.font.sizes.small}
    `,
    medium: (theme) => CSS`
        font-size: ${theme.font.sizes.medium}
    `,
    big: (theme) => CSS`
        font-size: ${theme.font.sizes.big}
    `,
}

export const Wrapper = styled.dev`
    ${({ theme }) => CSS`
        background: ${theme.colors.mainBg}
    `}
`;