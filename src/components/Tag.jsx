import Badge from "react-bootstrap/Badge";

const Tag = ({text, color}) => {
    return (
        <Badge className={"w-100 m-auto"} bg={color}>{text}</Badge>
    );
};

export default Tag;