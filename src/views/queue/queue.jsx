import React from "react";

import { Button, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import img from "../../assets/images/logo-white.svg";
import InputBanky from "../../components/inputBanky/InputBanky";
import Validator from "../../util/validator";

class Queue extends React.Component {
  state = {
    cnpj: "",
    email: "",
    celular: "",
    site: "",
    nome: "",
    status: 0
  };
  constructor(props) {
    super(props);
    this.validators = Validator;
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  validForm() {
    let status = true;
    Object.keys(this.validators).forEach(field => {
      this.formValidators(field, this.state[field]);
      if (field === "email" || field === "password") {
        if (!this.validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  }
  formValidators(fieldName, value) {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach(rule => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === "function") {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
    this.setState(this.state);
  }
  showErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = "";
    console.log("MOstrando erros");
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          <span className="error" key={index}>
            * {info}
            <br />
          </span>
        );
      });
      return <div className="error mb-2">{errors}</div>;
    }
    return result;
  }
  handleClick(e) {
    console.log(e);
    this.validForm();
  }

  render() {
    return (
      <Row noGutters className="justify-content-center align-items-stretch page">
        <Row noGutters className="wrapper justify-content-center align-items-stretch">
          <Row noGutters className="justify-content-center align-items-center">
            <Col xs="12" className="text-center">
              <img className="logo" src={img} alt="Logo Banky" />
            </Col>
            <Col xs="12">
              <div className="text-center introduction">
                Chega de misturar as contas pessoais com contas corporativas!
                Preencha os dados abaixo e entre em nossa lista de espera.
              </div>
            </Col>
          </Row>
          <Form className="form-material w-100">
            <Row noGutters>
              <Col xs="12">
                <InputBanky
                  label="CNPJ"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.cnpj}
                  name="cnpj"
                  formNoValidate
                  required
                />
                {this.showErrors("cnpj")}
              </Col>
            </Row>
            <Row noGutters>
              <Col xs="12">
                <InputBanky
                  label="E-mail"
                  onChange={this.handleChange.bind(this)}
                  type="email"
                  value={this.state.email}
                  name="email"
                  formNoValidate
                  required                                    
                />
                {this.showErrors("email")}
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6">
                <InputBanky
                  label="Celular"
                  type="tel"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.celular}
                  name="celular"
                  formNoValidate
                  required
                />
              </Col>
              <Col xs="12" md="6">
                <InputBanky
                  label="Site (Opcional)"
                  type="url"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.site}
                  formNoValidate
                  name="site"
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
              <InputBanky
                  label="Nome para contato"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.nome}
                  formNoValidate
                  name="nome"
                />
              </Col>
            </Row>
            <Button
              size="lg"
              block
              type="submit"
              onClick={this.handleClick.bind(this)}
              className="btn btn-light text-primary"
            >
              Entrar na lista de espera
            </Button>
          </Form>
        </Row>
      </Row>
    );
  }
}

export default Queue;
