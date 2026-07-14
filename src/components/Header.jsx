import React, { useState } from 'react';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import './Header.css';

export default function Header({ onNavigate }) {
  const { isMobile } = useResponsive();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', target: 'hero' },
    { label: 'Sobre', target: 'about' },
    { label: 'Categorias', target: 'categories' },
    { label: 'Produtos', target: 'products' },
    { label: 'Diferenciais', target: 'benefits' },
    { label: 'Contato', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header className="header-container">
      {/* Slogan Banner Superior */}
      <div className="top-banner">
        <span className="top-banner-text">
          🌿 SUSTENTABILIDADE É A NOSSA MODA.
        </span>
      </div>

      {/* Navbar Principal */}
      <div className="navbar">
        {/* Logo */}
        <button 
          className="logo-container" 
          onClick={() => handleNavClick('hero')}
        >
          <div className="logo-icon-bg">
            <Leaf size={20} color={colors.secondary} />
          </div>
          <div>
            <h1 className="logo-text">Bazar Chic</h1>
            <span className="logo-subtext">ECO STORE</span>
          </div>
        </button>

        {/* Menu Desktop */}
        {!isMobile && (
          <nav className="nav-links">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Botão de Destaque / Contato Desktop */}
        {!isMobile && (
          <button
            className="cta-button"
            onClick={() => handleNavClick('contact')}
          >
            <span className="cta-icon">
              <ShoppingBag size={16} color={colors.white} />
            </span>
            Visite a Loja
          </button>
        )}

        {/* Botão Hambúrguer Mobile */}
        {isMobile && (
          <button 
            className="menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={26} color={colors.text} />
            ) : (
              <Menu size={26} color={colors.text} />
            )}
          </button>
        )}
      </div>

      {/* Menu Mobile Expandido */}
      {isMobile && mobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <button
              key={item.target}
              className="mobile-nav-link"
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="mobile-cta-button"
            onClick={() => handleNavClick('contact')}
          >
            <span className="cta-icon">
              <ShoppingBag size={18} color={colors.white} />
            </span>
            Visite a Loja
          </button>
        </div>
      )}
    </header>
  );
}
