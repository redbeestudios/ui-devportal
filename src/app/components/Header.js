import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false};
    this.getLogginButton.bind(this);
    this.getTarjeta.bind(this);
    this.getProfile.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.loginURL = process.env.APP_LOGIN_REDIRECT;
    this.logoutURL = process.env.APP_LOGOUT_REDIRECT;
  }

  render() {
    //console.log(this.props);
    return (
        <header className='header'>
          <div className='header__info'>
            <div className='header__info__container'>
              <div className='container'>
                <div className='header__info__container__info'>
                  <i className='header__info__container__info__warning'></i>
                  EMERGENCIAS DE TARJETAS DE CRÉDITO
                  <span>{this.props.telefono}</span>
                </div>
                <div className='header__info__container__info'>SUCURSALES</div>
                <div className='header__info__container__info'>
                  SERVICIO AL CLIENTE
                  <span>600 450 5000</span>
                </div>
              </div>
            </div>
          </div>
          <div className='header__brand'>
            <div className='container'>
              <img src='/static/logo.svg' className="header__brand__logo" alt="Quiero ver feliz"/>
              <div className={`header__brand__buttons ${this.props.isLogged?'header__brand--logged':''}`}>
                { this.getLogginButton() }
                { this.getTarjeta() }
                { this.getProfile() }
                <div className='header__brand__hamburger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className='header__menu'>
            <div className='container'>
              <ul className='header__menu__inline'>
                <li>Inicio</li>
                <li>Tarjetas</li>
                <li>Avance en efectivo</li>
                <li>Súper Avance</li>
                <li>Beneficios</li>
                <li>Pagos</li>
                <li>Puntos Cencosud</li>
              </ul>
            </div>
          </div>
          <div className={`header__aside_menu ${this.state.isMenuOpen?'header__aside_menu--opened':''}`}>
            <ul>
              <li><a href={this.logoutURL} target='_self' aria-label="Cerrar Sesion">Cerrar Sesión</a></li>
            </ul>
          </div>
        </header>
    );
  }

  toggleMenu(){ console.log('Click!'); this.setState({isMenuOpen: !this.state.isMenuOpen});}
  getLogginButton(){ return !this.props.isLogged ? <a href={`${this.loginURL}`} aria-label="Iniciar Sesion"><button className='btn btn-primary'>INICIAR SESIÓN</button></a> : null }
  getTarjeta(){ return !this.props.isLogged ? <button className='btn btn-secondary'><span>SOLICITAR TARJETA</span></button> : null }
  getProfile(){ return this.props.isLogged ? <img className={`header__brand__user ${this.state.isMenuOpen?'header__brand__user--opened':''}`} src="/static/profile.jpg" alt="brand" onClick={this.toggleMenu}/> : null }
}

const mapStateToProps = (state) => ({ isLogged: state.session.isLogged });

export default connect(mapStateToProps)(Header);
