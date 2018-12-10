import React from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  CardGroup,
  CardDeck,
  CardLink,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import img from "../../assets/images/logo-blue.svg";

const contentWrapper = {
  height: "100vh"
};
const card = {
  width: 448
};

const logo = {
  height: 60
};
class Queue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="bg-primary row justify-content-center align-items-center"
        style={contentWrapper}
      >
        <Card style={card} className="bg-white">
          <CardBody>
            <CardTitle className="text-center">
              <img style={logo} src={img} alt="logo" />
            </CardTitle>
            <CardSubtitle className="text-center">
              Falta pouco para você ter um Banky. Preencha os dados abaixo para
              entrar na nossa lista de espera.
            </CardSubtitle>
            <Form className="form-material">
              <FormGroup>
                <Input type="text" placeholder="CNPJ" required />
              </FormGroup>
              <FormGroup>
                <Input type="email" placeholder="E-mail" required />
              </FormGroup>
              <FormGroup>
                <Input type="tel" placeholder="Celular" required />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Nome para contato"required  />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Site (opcional)" />
              </FormGroup>
            </Form>
            <Button className="btn" color="primary" size="lg" block type="submit">
              Continuar
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Queue;
