import Badge from "react-bootstrap/Badge";

export const Tag = ({text, color}) => {
    return (
        <Badge bg={color}>{text}</Badge>
    );
};
