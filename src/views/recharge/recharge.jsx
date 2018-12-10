import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import cardTemplate from "../../assets/images/bank-card.svg";
const cardStyle = {
  lineHeight: "0"
};
class Recharge extends React.Component {
  render() {
    return (
      <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* 1st Row                                                                        */}
        {/*--------------------------------------------------------------------------------*/}
        <Row noGutters className="">
          <Col xs="12" md="auto">
            <Card>
              <CardBody>
                <Row className="justify-content-around">
                  {/* Título */}
                  <Col xs="12">
                    <div className="d-flex flex-wrap">
                      <div>
                        <CardTitle className="h1">Alterar Senha</CardTitle>
                      </div>
                    </div>
                  </Col>
                  {/* Imagem cartão */}
                  <Col xs="auto" className="text-center mb-3">
                    <img
                      className=""
                      src={cardTemplate}
                      style={cardStyle}
                      alt="Seu cartão"
                      height="160"
                    />
                  </Col>
                  {/* Bloquear */}
                  <Col xs="12" sm="auto" className="text-center">
                    <Card className="p-3">
                      <CardBody>
                        <CardTitle className="mb-0 text-left border-bottom pb-1">
                          Digite abaixo o valor da recarga
                        </CardTitle>
                        <div>
                          <div className="text-muted my-3 text-justify">
                            É só realizar o pagamento do boleto, pode deixar que
                            a gente cuida do resto.
                          </div>
                          <Form>
                            <FormGroup>
                              <Input
                                type="number"
                                placeholder="R$ 0,00"
                                required
                              />
                              <span className="text-muted text-left">
                                *Após efetuar o pagamento, o saldo será debitado
                                em D+1
                              </span>
                            </FormGroup>

                            <Button type="submit" className="btn btn-info">
                              Gerar Boleto
                            </Button>
                          </Form>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Recharge;
