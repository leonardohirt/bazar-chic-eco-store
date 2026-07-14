import React, { useState } from 'react';
import { X, MessageSquare, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import './ProductModal.css';

export default function ProductModal({ product, visible, onClose }) {
  const { isMobile } = useResponsive();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  if (!visible || !product) return null;

  const handleOrderPress = () => {
    const sizeText = selectedSize ? ` no tamanho ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Olá Bazar Chic Eco Store! Tenho interesse no produto: "${product.title}" (${product.price})${sizeText}. Está disponível?`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botão Fechar */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
          <X size={20} color={colors.text} />
        </button>

        {/* Lado Esquerdo: Imagem */}
        <div className="modal-image-container">
          <img 
            src={product.image} 
            className="modal-product-img"
            alt={product.title}
          />
          <button 
            className="modal-favorite-btn"
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Favoritar"
          >
            <Heart 
              size={20} 
              color={isFavorite ? colors.primary : colors.textSecondary} 
              fill={isFavorite ? colors.primary : 'none'} 
            />
          </button>
        </div>

        {/* Lado Direito: Detalhes */}
        <div className="modal-details-container">
          <div className="modal-scroll-content">
            
            {/* Categoria & Badge */}
            <div className="modal-header-info">
              <span className="modal-category-text">{product.categoryLabel}</span>
              <div className="modal-eco-badge">
                <span className="modal-eco-badge-icon">
                  <Leaf size={12} color={colors.secondary} />
                </span>
                <span className="modal-eco-badge-text">100% Eco</span>
              </div>
            </div>

            {/* Nome e Preço */}
            <h3 className="modal-product-title">{product.title}</h3>
            <p className="modal-product-price">{product.price}</p>

            {/* Divisor */}
            <div className="modal-divider" />

            {/* Descrição */}
            <h4 className="modal-section-heading">Detalhes do Produto</h4>
            <p className="modal-description">{product.description}</p>

            {/* Impacto Ecológico */}
            <div className="modal-eco-box">
              <span className="modal-eco-box-icon">
                <ShieldCheck size={18} color={colors.secondary} />
              </span>
              <p className="modal-eco-box-text">{product.ecoDetails}</p>
            </div>

            {/* Tamanhos */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="modal-sizes-section">
                <h4 className="modal-section-heading">Selecione o Tamanho:</h4>
                <div className="modal-sizes-grid">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-bubble ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ação Principal */}
            <button
              className="modal-cta-btn"
              onClick={handleOrderPress}
            >
              <span className="modal-cta-icon">
                <MessageSquare size={18} color={colors.white} />
              </span>
              Encomendar via WhatsApp
            </button>

            {/* Garantia Eco */}
            <p className="modal-footer-note">
              * Peça única selecionada sob curadoria rígida. Ao finalizar, o vendedor confirmará as medidas e fotos adicionais.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
