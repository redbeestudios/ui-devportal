import React from "react";

const Footer = () => (
  <section className="footer">
    <div className="footer__info">
      <div className="footer__info__container container">
        <div className="footer__info__container__item">
          <div className="footer__info__container__item__socials">
            <span className="footer__info__container__item__socials__text">Síguenos en</span>
            <img alt="Facebook" src="/static/facebook.svg" className="footer__info__container__item__socials__social"/>
            <img alt="Youtube" src="/static/youtube.svg" className="footer__info__container__item__socials__social"/>
            <img alt="Twitter" src="/static/twitter.svg"className="footer__info__container__item__socials__social"/>
            <img alt="Whatsapp" src="/static/whatsapp.svg"className="footer__info__container__item__socials__social"/>
          </div>
        </div>
        <div className="footer__info__container__item">
          <div className="footer__info__container__item__contact">
            <span className="footer__info__container__item__contact__label">Servicio al Cliente</span>
            <span className="footer__info__container__item__contact__phone">600 450 5000</span>
          </div>
        </div>
        <div className="footer__info__container__item">
          <img className="footer__info__container__item__warning" src='/static/warning.svg' alt='Warning icon'/>
          <div className="footer__info__container__item__contact">
            <span className="footer__info__container__item__contact__label">Emergencia Tarjeta de Crédito</span>
            <span className="footer__info__container__item__contact__phone">800 374 500</span>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__mapsite container">
      <div className="footer__mapsite__item">
        <span className="footer__mapsite__item__title">Políticas del Sitio</span>
        <span className="footer__mapsite__item__subtitle">Privacidad y Seguridad</span>
        <span className="footer__mapsite__item__subtitle">Terminos y condiciones</span>
        <span className="footer__mapsite__item__subtitle">Protege tus datos</span>
        <span className="footer__mapsite__item__subtitle">Declaración Datos Personales</span>
      </div>
      <div className="footer__mapsite__item">
        <span className="footer__mapsite__item__title">Información</span>
        <span className="footer__mapsite__item__subtitle">Preguntas Frecuentes</span>
        <span className="footer__mapsite__item__subtitle">Ver Promociones y Ganadores</span>
        <span className="footer__mapsite__item__subtitle">Denuncias Ley Nº 20.393</span>
        <span className="footer__mapsite__item__subtitle">Educación Financiera</span>
        <span className="footer__mapsite__item__subtitle">Ahorrar te Hace Feliz</span>
        <span className="footer__mapsite__item__subtitle">Información Mediación Clientes SERNAC</span>
      </div>
      <div className="footer__mapsite__item">
        <span className="footer__mapsite__item__title">Tasa de Crédito</span>
        <span className="footer__mapsite__item__subtitle">Tarjeta Cencosud Scotiabank</span>
      </div>
      <div className="footer__mapsite__item">
        <span className="footer__mapsite__item__title">Contratos</span>
        <span className="footer__mapsite__item__subtitle">Tarjeta Cencosud Scotiabank</span>
      </div>
      <div className="footer__mapsite__item">
        <span className="footer__mapsite__item__title">Cencosud</span>
        <span className="footer__mapsite__item__subtitle">Seguros Cencosud Scotiabank</span>
        <span className="footer__mapsite__item__subtitle">Puntos Cencosud</span>
        <span className="footer__mapsite__item__subtitle">Despegar.com</span>
        <span className="footer__mapsite__item__subtitle">Paris</span>
        <span className="footer__mapsite__item__subtitle">Jumbo</span>
        <span className="footer__mapsite__item__subtitle">Easy</span>
        <span className="footer__mapsite__item__subtitle">Johnson</span>
        <span className="footer__mapsite__item__subtitle">Santa Isabel</span>
      </div>
    </div>
    <div className="footer__location">
      <div className="container">
          <p className="footer__location__label">Casa Matriz / CAT Administración de Tarjetas S. A. / Agustinas 785, piso 3 - Santiago, Chile</p>
      </div>
    </div>
    <div className="footer__branding container">
      <div className="footer__branding__brands">
        <img alt="Logo Paris" src="/static/logo-paris.svg"/>
        <img alt="Logo Santa Isabel" src="/static/logo-santaisabel.svg"/>
        <img alt="Logo Jumbo" src="/static/logo-jumbo.svg"/>
        <img alt="Logo Johnson" src="/static/logo-johnson.svg"/>
        <img alt="Logo Easy" src="/static/logo-easy.svg"/>
      </div>
      <div className="footer__branding__security">
        <img alt="Logo Secure global" src="/static/secure-global-sign.svg"/>
      </div>
    </div>
  </section>
);

export default Footer;
