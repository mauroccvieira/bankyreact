import React from "react";
import { Redirect, Route, Link } from "react-router-dom";
import indexRoutes from "../../routes/index.jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  FormGroup,
  Form,
  Row,
  Col,
  UncontrolledTooltip,
  Button
} from "reactstrap";
import img1 from "../../assets/images/logo-blue.svg";
import img2 from "../../assets/images/background/login-register.jpg";
import Fulllayout from "../../layouts/fulllayout.jsx";

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

const logo = {
  height: "80px"
}

class Login extends React.Component {
  state = {
    canLogin: false
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var elem = document.getElementById("loginform");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.display = "none";
    document.getElementById("recoverform").style.display = "block";
  }
  login(event) {
    this.setState({ canLogin: true });
  }
  render() {
    console.log("beforexD");
    if (this.state.canLogin === true) {
      {		
		  console.log("xD");
        return <Redirect to="/" component={Fulllayout} />
      }
    }
    return (
      <div className="">
        {/*--------------------------------------------------------------------------------*/}
        {/*Login Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div
          className="auth-wrapper d-flex no-block justify-content-center align-items-center"
          style={sidebarBackground}
        >
          <div className="auth-box on-sidebar">
            <div id="loginform">
              <div className="logo">
                <span className="db">
                  <img src={img1} alt="logo" style={logo} />
                </span>
                <h5 className="font-medium mb-3">Faça seu login</h5>
              </div>
              <Row>
                <Col xs="12">
                  <Form
                    className="mt-3"
                    id="loginform"
                    onSubmit={this.login.bind(this)}
                  >
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ti-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Usuário" required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ti-pencil" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Senha" required />
                    </InputGroup>
                    <div className="d-flex no-block align-items-center mb-3">
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckbox"
                        label="Lembrar de mim"
                      />
                      <div className="ml-auto">
                        <a
                          href="#recoverform"
                          id="to-recover"
                          onClick={this.handleClick}
                          className="forgot text-dark float-right"
                        >
                          {/* <i className="fa fa-lock mr-1" /> Esqueceu a senha? */}
                        </a>
                      </div>
                    </div>
                    <Row className="mb-3">
                      <Col xs="12">
                        <Button color="primary" size="lg" type="submit" block>
                          Entrar
                        </Button>
                      </Col>
                    </Row>
                    <div className="text-center">
                      Não possúi conta? Se inscreva na fila!
                      <Link
                        to="queue"
                        replace
                        className="text-info ml-1"
                      >
                        <b>Inscrever</b>
                      </Link>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
            <div id="recoverform">
              <div className="logo">
                <span className="db">
                  <img src={img1} alt="logo" />
                </span>
                <h5 className="font-medium mb-3">Recover Password</h5>
                <span>
                  Enter your Email and instructions will be sent to you!
                </span>
              </div>
              <Row className="mt-3">
                <Col xs="12">
                  <Form action="/dashbaord">
                    <FormGroup>
                      <Input
                        type="text"
                        name="uname"
                        bsSize="lg"
                        id="Name"
                        placeholder="Username"
                        required
                      />
                    </FormGroup>
                    <Row className="mt-3">
                      <Col xs="12">
                        <Button color="danger" size="lg" type="submit" block>
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
