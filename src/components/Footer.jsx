import React from 'react';
import { Leaf, MessageSquare } from 'lucide-react';
import { Instagram, Facebook } from './BrandIcons';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const { isMobile } = useResponsive();

  const handleSocialPress = (platform) => {
    if (platform === 'instagram') {
      window.open('https://instagram.com/bazarchic_ecostore', '_blank');
    } else if (platform === 'whatsapp') {
      window.open('https://wa.me/5542999999999', '_blank');
    } else {
      window.open('https://facebook.com', '_blank');
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Parte Superior do Rodapé */}
        <div className="footer-top">
          {/* Branding */}
          <div className="footer-brand-col">
            <div className="footer-logo-container">
              <div className="footer-logo-icon-bg">
                <Leaf size={16} color={colors.secondary} />
              </div>
              <span className="footer-logo-text">Bazar Chic</span>
            </div>
            <p className="footer-slogan">🌿 Sustentabilidade é a nossa moda.</p>
            <p className="footer-brand-desc">
              Curadoria premium de moda circular. Conectando você ao estilo de forma 
              ética, ecológica e elegante.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Links Rápidos</h3>
            <div className="footer-links-grid">
              <button onClick={() => onNavigate('hero')} className="footer-link">
                Início
              </button>
              <button onClick={() => onNavigate('about')} className="footer-link">
                Sobre
              </button>
              <button onClick={() => onNavigate('categories')} className="footer-link">
                Categorias
              </button>
              <button onClick={() => onNavigate('products')} className="footer-link">
                Produtos
              </button>
              <button onClick={() => onNavigate('contact')} className="footer-link">
                Contato
              </button>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="footer-social-col">
            <h3 className="footer-col-title">Nossas Redes</h3>
            <p className="footer-social-desc">Siga nosso perfil e venha fazer parte da comunidade circular.</p>
            
            <div className="footer-social-icons">
              <button 
                className="footer-social-icon-btn"
                onClick={() => handleSocialPress('instagram')}
                aria-label="Instagram"
              >
                <Instagram size={20} color={colors.white} />
              </button>

              <button 
                className="footer-social-icon-btn"
                onClick={() => handleSocialPress('whatsapp')}
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} color={colors.white} />
              </button>

              <button 
                className="footer-social-icon-btn"
                onClick={() => handleSocialPress('facebook')}
                aria-label="Facebook"
              >
                <Facebook size={20} color={colors.white} />
              </button>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer-divider" />

        {/* Parte Inferior (Copyright) */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bazar Chic Eco Store. Todos os direitos reservados.
          </p>
          <p className="footer-credits">
            Curadoria com Amor 💚 Feito para durar.
          </p>
        </div>

      </div>
    </footer>
  );
}
