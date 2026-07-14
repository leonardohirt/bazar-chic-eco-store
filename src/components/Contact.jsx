import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, MessageSquare } from 'lucide-react';
import { Instagram } from './BrandIcons';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import modelImg from '../../assets/hero_fashion_model.jpg';
import womenImg from '../../assets/category_women.jpg';
import accessoriesImg from '../../assets/category_accessories.jpg';
import shoesImg from '../../assets/category_shoes.jpg';
import menImg from '../../assets/category_men.jpg';
import bazarPhoto from '../../assets/bazar_photo.jpg';
import './Contact.css';

export default function Contact() {
  const { isMobile } = useResponsive();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const instagramPosts = [
    { id: 'ig1', image: modelImg },
    { id: 'ig2', image: womenImg },
    { id: 'ig3', image: accessoriesImg },
    { id: 'ig4', image: shoesImg },
    { id: 'ig5', image: menImg },
    { id: 'ig6', image: bazarPhoto },
  ];

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(`Olá Bazar Chic! Meu nome é ${name || 'Visitante'}. Mensagem: ${message || 'Gostaria de saber mais sobre a loja.'}`);
    window.open(`https://wa.me/5542999999999?text=${text}`, '_blank');
  };

  const handleInstagramPress = () => {
    window.open('https://instagram.com/bazarchic_ecostore', '_blank');
  };

  const handleMapPress = () => {
    window.open('https://maps.google.com/?q=Capitão+Rocha+2228+Centro+Guarapuava+Paraná', '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        
        {/* Instagram Header & Grid */}
        <div className="instagram-header">
          <span className="instagram-subtitle">Siga-nos</span>
          <button onClick={handleInstagramPress} className="instagram-link">
            <Instagram size={20} color={colors.primary} style={{ marginRight: 8 }} />
            <h2 className="instagram-title">@bazarchic_ecostore</h2>
          </button>
          <p className="instagram-desc">Acompanhe nossas novidades diárias no feed</p>
        </div>

        {/* Grid de Posts do Instagram */}
        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <button 
              key={post.id}
              className="ig-post"
              onClick={handleInstagramPress}
            >
              <img src={post.image} className="ig-image" alt="Instagram Post Preview" />
              <div className="ig-overlay">
                <Instagram size={24} color={colors.white} />
              </div>
            </button>
          ))}
        </div>

        {/* Divisor Visual */}
        <div className="divider-large" />

        {/* Informações de Contato e Formulário */}
        <div className="contact-grid">
          
          {/* Lado Esquerdo: Contatos e Endereço */}
          <div className="contact-info-col">
            <h2 className="contact-heading">Fale Conosco</h2>
            <p className="contact-desc">
              Ficaremos felizes em te receber em nossa loja física ou atender você de 
              forma remota via WhatsApp e Instagram.
            </p>

            {/* Itens de Contato */}
            <div className="contact-info-card">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} color={colors.primary} />
                </div>
                <div>
                  <h4 className="contact-item-label">Endereço:</h4>
                  <p className="contact-item-value">Capitão Rocha, 2228 - Centro<br />Guarapuava - PR</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={22} color={colors.secondary} />
                </div>
                <div>
                  <h4 className="contact-item-label">Horário de Atendimento:</h4>
                  <p className="contact-item-value">Segunda a Sábado, das 9h às 18h</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={22} color={colors.primary} />
                </div>
                <div>
                  <h4 className="contact-item-label">WhatsApp / Redes Sociais:</h4>
                  <p className="contact-item-value">Fale conosco pelo WhatsApp ou Instagram<br />@bazarchic_ecostore</p>
                </div>
              </div>
            </div>

            {/* Espaço para o Mapa (Estilizado) */}
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={32} color={colors.secondary} style={{ marginBottom: 10 }} />
                <h4 className="map-text">Visualização do Mapa Interativo</h4>
                <p className="map-subtext">Capitão Rocha, 2228 - Centro, Guarapuava</p>
                <button
                  className="map-btn"
                  onClick={handleMapPress}
                >
                  Como Chegar
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com WhatsApp */}
          <div className="contact-form-col">
            <h2 className="contact-heading">Envie uma Mensagem</h2>
            <p className="contact-desc">
              Tem dúvidas sobre tamanhos ou marcas específicas? Fale conosco direto no WhatsApp!
            </p>

            <form className="contact-form-box" onSubmit={(e) => { e.preventDefault(); handleWhatsAppContact(); }}>
              <label className="form-field-label">Seu Nome:</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ex: Maria Souza"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="form-field-label">Como podemos ajudar?</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Ex: Gostaria de saber as medidas do vestido floral..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                className="form-submit-btn"
              >
                <MessageSquare size={18} color={colors.white} style={{ marginRight: 8 }} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
