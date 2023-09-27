import Badge from "react-bootstrap/Badge";

const Tag = ({text, color}) => {
    return (
        <Badge bg={color}>{text}</Badge>
    );
};

export default Tag;