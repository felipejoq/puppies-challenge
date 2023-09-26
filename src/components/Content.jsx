import {Col, Row} from "react-bootstrap";
import CardPuppy from "./CardPuppy.jsx";

const Content = ({puppies}) => {
    return (
        <Row className="text-center">
            {
                puppies.map(({
                                 id,
                                 photo,
                                 name,
                                 description,
                                 breed,
                                 color
                             }) => (
                    <Col className="my-4 d-flex justify-content-center" key={id}>
                        <CardPuppy
                            image={photo}
                            puppyName={name}
                            puppyDescription={description}
                            breed={breed}
                            colorTag={color}
                        />
                    </Col>
                ))
            }
        </Row>
    );
};

export default Content;