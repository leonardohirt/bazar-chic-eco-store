import React from 'react';
import { MessageSquare, ArrowRight, Leaf } from 'lucide-react';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import bazarPhoto from '../../assets/bazar_photo.jpg';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const { isMobile } = useResponsive();

  const handleWhatsAppPress = () => {
    const text = encodeURIComponent("Olá Bazar Chic Eco Store! Vim pelo site e gostaria de conhecer as novidades de moda consciente.");
    window.open(`https://wa.me/5542999999999?text=${text}`, '_blank');
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        
        {/* Lado Esquerdo: Texto e Ações */}
        <div className="hero-text-section">
          {/* Badge Ecológica */}
          <div className="hero-badge">
            <span className="hero-badge-icon">
              <Leaf size={14} color={colors.secondary} />
            </span>
            <span className="hero-badge-text">Curadoria 100% Sustentável</span>
          </div>

          {/* Título Principal */}
          <h2 className="hero-title">
            Moda consciente,<br />
            <span className="hero-title-highlight">estilo que transforma</span>
          </h2>

          {/* Subtítulo */}
          <p className="hero-subtitle">
            Oferecemos uma seleção premium de peças de alta qualidade, 
            personalidade marcante e consumo responsável. Encontre roupas e 
            acessórios elegantes que contam histórias e preservam o planeta.
          </p>

          {/* Ações */}
          <div className="hero-action-container">
            <button
              className="hero-primary-button"
              onClick={() => onNavigate('products')}
            >
              Conheça a Loja
              <span className="hero-btn-icon">
                <ArrowRight size={18} color={colors.white} />
              </span>
            </button>

            <button
              className="hero-secondary-button"
              onClick={handleWhatsAppPress}
            >
              <span className="hero-btn-icon-left">
                <MessageSquare size={18} color={colors.primary} />
              </span>
              Fale pelo WhatsApp
            </button>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="hero-stats-container">
            <div className="hero-stat-item">
              <h3 className="hero-stat-number">1.5k+</h3>
              <p className="hero-stat-label">Peças Circulares</p>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <h3 className="hero-stat-number">500+</h3>
              <p className="hero-stat-label">Clientes Felizes</p>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <h3 className="hero-stat-number">100%</h3>
              <p className="hero-stat-label">Curadoria Rígida</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Imagem Destaque */}
        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            <img 
              src={bazarPhoto}
              className="hero-image"
              alt="Bazar Chic Eco Store Curadoria"
            />
            {/* Elemento Decorativo Flutuante */}
            <div className="hero-floating-badge">
              <span className="hero-floating-badge-title">Eco Chic 🌿</span>
              <span className="hero-floating-badge-text">Estilo de Vida Verde</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
