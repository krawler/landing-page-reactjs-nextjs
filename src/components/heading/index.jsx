import * as styled from './styles';
import P from "prop-types";

export const Heading = ({ children }) => {
    return <styled.Title>{children}</styled.Title>
};

P.propTypes = {
    children: P.string.isRequired
}