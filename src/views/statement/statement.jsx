import React from "react";
import ReactTable from "react-table";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "react-table/react-table.css";
const data = [
  {
    date: "03/12/18",
    hour: "09:23",
    establishment: "AWS Amazon Web Service",
    valueDollar: 327.0,
    valueReal: 1327.0
  },
  {
    date: "04/12/18",
    hour: "10:53",
    establishment: "Google Firebase",
    valueDollar: 100.0,
    valueReal: 400.0
  },
  {
    date: "05/12/18",
    hour: "11:45",
    establishment: "Hostgator - Serviços",
    valueDollar: 0,
    valueReal: 39.9
  },
  {
    date: "07/12/18",
    hour: "23:14",
    establishment: "Attlasian Jira",
    valueDollar: 25.0,
    valueReal: 100.0
  },
  {
    date: "10/12/18",
    hour: "12:52",
    establishment: "1and1 - Blog",
    valueDollar: 11.9,
    valueReal: 45.6
  },
  {
    date: "11/12/18",
    hour: "11:29",
    establishment: "Github Services",
    valueDollar: 25.0,
    valueReal: 100.0
  },
  {
    date: "11/12/18",
    hour: "15:38",
    establishment: "Apple Developer Certified",
    valueDollar: 17.6,
    valueReal: 69.9
  },
  {
    date: "13/12/18",
    hour: "13:25",
    establishment: "Google Adwords",
    valueDollar: 40.0,
    valueReal: 120.0
  },
  {
    date: "13/12/18",
    hour: "21:23",
    establishment: "Serviços de Marketing",
    valueDollar: 0,
    valueReal: 251.0
  },
  {
    date: "14/12/18",
    hour: "10:35",
    establishment: "Themeforest Template",
    valueDollar: 33.0,
    valueReal: 122.0
  },
  {
    date: "14/12/18",
    hour: "12:53",
    establishment: "AWS Storage Service",
    valueDollar: 200.0,
    valueReal: 800.0
  },
  {
    date: "15/12/18",
    hour: "07:55",
    establishment: "Kaspersky Security Service",
    valueDollar: 150.0,
    valueReal: 600.0
  },
  {
    date: "15/12/18",
    hour: "09:31",
    establishment: "Aluguél do escritório",
    valueDollar: 500.0,
    valueReal: 2000.0
  }
];
class Statement extends React.Component {
  toCurrency(numberString) {
    let number = parseFloat(numberString);
    return new Intl.NumberFormat("USD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
  }
  render() {
    return (
      <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* 1st Row                                                                        */}
        {/*--------------------------------------------------------------------------------*/}

        <Card>
          <CardBody>
            <Row className="justify-content-center">
              <Col xs="12">
                <div className="d-flex flex-wrap">
                  <div>
                    <CardTitle className="h1">
                      Extrato do Cartão{" "}
                      <span className="h1 text-info">5432</span>
                    </CardTitle>
                  </div>
                </div>
              </Col>
              {/*                             */}
              {/* Início dos filtros          */}
              {/*                             */}

              <Col xs="12">
                <Form>
                  <Row>
                    <Col xs="auto">
                      <FormGroup>
                        <Input type="date" placeholder="10/12/2018" />
                      </FormGroup>
                    </Col>
                    <Col xs="auto">
                      <FormGroup>
                        <Input type="date" placeholder="10/12/2018" />
                      </FormGroup>
                    </Col>
                    <Col xs="auto">
                      <Button type="submit" className="btn btn-info">
                        <i className="fa fa-search mr-1" /> Filtrar{" "}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>

              {/*                             */}
              {/* Início da tabela de extrato */}
              {/*                             */}
              <Col xs="12">
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Data",
                      accessor: "date",
                      maxWidth: 100,
                      minWidth: 70,
                      style: {
                        textAlign: "center"
                      }
                    },
                    {
                      Header: "Hora",
                      accessor: "hour",
                      maxWidth: 100,
                      minWidth: 70,
                      style: {
                        textAlign: "center"
                      }
                    },
                    {
                      Header: "Estabelecimento",
                      accessor: "establishment",
                      minWidth: 300
                    },
                    {
                      Header: "Valor US$",
                      accessor: "valueDollar",
                      maxWidth: 150,
                      Cell: props => <div> {this.toCurrency(props.value)} </div>
                    },
                    {
                      Header: "Valor R$",
                      accessor: "valueReal",
                      maxWidth: 150,
                      Cell: props => <div> {this.toCurrency(props.value)} </div>
                    }
                  ]}
                  defaultPageSize={10}
                  previousText="Anterior"
                  nextText="Próximo"
                  pageText="Página"
                  rowsText="Linhas"
                  ofText="de"
                  className="-striped -highlight"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Statement;
