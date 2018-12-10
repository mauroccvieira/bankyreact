import React from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import cardTemplate from "../../assets/images/bank-card.svg";
const cardStyle = {
  lineHeight: "0"
}
class Home extends React.Component {
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
                  <Col xs="12">
                    <div className="d-flex flex-wrap">
                      <div>
                        <CardTitle className="h1">Seu saldo</CardTitle>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto" className="text-center mb-3">
                    <img
                      className=""
                      src={cardTemplate}
                      style={cardStyle}
                      alt="Seu cartão"
                      height="160"
                    />
                  </Col>
                  <Col xs="auto" className="text-center">
                    <Card className="p-3">
                      <CardBody>
                        <CardTitle className="mb-0 text-center">
                          Saldo atualizado as 10:45
                        </CardTitle>
                        <div>
                          <span className="display-6 text-success">
                            R$ 35,28
                          </span>
                          <h6 className="text-muted">
                            Gasto no mês: R$ 300,45
                          </h6>
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

export default Home;
