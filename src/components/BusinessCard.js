import React from 'react';
import './BusinessCard.css';
import QRCode from 'react-qr-code';

const BusinessCard = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vitor.dev25@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5583999788683';
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5583999788683&text=Olá%20Vitor!%20Vi%20seu%20cartão%20de%20visita%20digital.', '_blank');
  };

  const siteUrl = 'https://vitordevcart.netlify.app/';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      alert('Link copiado para a área de transferência!');
    } catch (e) {
      console.error('Erro ao copiar link:', e);
    }
  };

  return (
    <div className="business-card">
      <div className="card-container">
        {/* Header com logo */}
        <div className="card-header">
          <img 
            src={`${process.env.PUBLIC_URL}/logo/logodevitorfundo.png`} 
            alt="Logo Vitor Luis" 
            className="main-logo"
          />

        </div>

        {/* Informações principais */}
        <div className="card-content">
          <h1 className="name">Vitor Luis</h1>
          <h2 className="title">Desenvolvedor Web</h2>
          <p className="slogan">Construindo soluções digitais personalizadas</p>

          {/* Contatos */}
          <div className="contact-section">
            <button className="contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.46-.01a.87.87 0 0 0-.64.3c-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
              </svg>
              <span>WhatsApp</span>
            </button>

            <button className="contact-btn email-btn" onClick={handleEmailClick}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
              </svg>
              <span>Email</span>
            </button>

            <button className="contact-btn phone-btn" onClick={handlePhoneClick}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
              </svg>
              <span>Telefone</span>
            </button>
          </div>

          {/* QR Code para compartilhar */}
          <div className="qr-section">
            <div className="qr-wrapper">
              <QRCode value={siteUrl} size={192} bgColor="#ffffff" fgColor="#000000" />
            </div>
            <p className="qr-text">Escaneie o QR Code ou copie o link abaixo para compartilhar:</p>
            <div className="qr-actions">
              <input type="text" readOnly value={siteUrl} className="qr-link" />
              <button className="contact-btn copy-btn" onClick={handleCopyLink}>Copiar link</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessCard;