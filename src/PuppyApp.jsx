import Header from "./components/Header.jsx";
import {getAllPuppies} from "./services/puppies.service.js";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

const PuppyApp = () => {

    const puppies = getAllPuppies();

    return (
        <Container>
            <Header title={'🐶 Adopt a puppy!'}/>
            <Content puppies={puppies}/>
            <Footer/>
        </Container>
    );
};

export default PuppyApp;