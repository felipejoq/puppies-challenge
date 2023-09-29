import Card from 'react-bootstrap/Card';
import {Tag} from "./Tag.jsx";

export const CardPuppy = ({image, puppyName, puppyDescription, breed, colorTag}) => {
    return (
        <Card className='card-puppy'>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{puppyName}</Card.Title>
                <Card.Text>
                    {puppyDescription}
                </Card.Text>
                <Tag text={breed} color={colorTag}/>
            </Card.Body>
        </Card>
    );
}