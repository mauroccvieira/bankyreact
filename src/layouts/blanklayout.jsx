import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class Blanklayout extends React.Component {
  render() {
    return <div>

      <header class="section  page-header">

      <div class="rd-navbar-wrap rd-navbar-absolute">
        <nav class="rd-navbar rd-navbar-transparent" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="20px" data-xl-stick-up-offset="20px" data-xxl-stick-up-offset="20px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
          <div class="rd-navbar-main-outer">
            <div class="rd-navbar-main">
              
              <div class="rd-navbar-panel">
                
                <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                
                <div class="rd-navbar-brand"><a class="brand" href="index.html"><img class="brand-logo-dark" src="images/logo-84x23.png" alt="" width="84" height="23" /><img class="brand-logo-light" src="images/logo-inverse-84x23.svg" alt="" width="84" height="23" /></a>
                </div>
              </div>
              <div class="rd-navbar-main-element">
                <div class="rd-navbar-nav-wrap">
                
                  <ul class="rd-navbar-nav">
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#home">Home</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#about">Vantagens</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#manifesto">Manifesto</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#pricing">Solicite já</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#footer">Contatos</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="faq.html">FAQ</a>
                    </li>                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </header>
    </div>;
  }
}
export default Blanklayout;
