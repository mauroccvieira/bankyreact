import React from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import cardTemplate from "../../assets/images/bank-card.svg";
const cardStyle = {
  lineHeight: "0"
};
class Block extends React.Component {
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
                        <CardTitle className="h1">Bloquear Cartão</CardTitle>
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
                          Você perdeu seu cartão ou ele foi furtado? Bloqueie
                          aqui
                        </CardTitle>
                        <div>
                          <div className="text-muted my-3 text-justify">
                            Bloquear seu cartão nunca foi tão fácil
                          </div>
                          <Button className="btn btn-info">
                            Bloquear Cartão
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  {/* Aviso */}
                  <Col xs="12" className="text-center">
                    <Card className="p-3">
                      <CardBody>
                        <CardTitle className="mb-0 text-left pb-1">
                          Desbloquear cartão
                        </CardTitle>
                        <div>
                          <div className="text-muted  text-justify my-3">
                            Caso você recupere seu cartão perdido, é só mandar
                            uma mensagem para nós via whatsapp (11) 9999 99999
                            ou e-mail resolvemos@banky.com.br que iremos te
                            atender o mais rápido possível.
                          </div>
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

export default Block;
