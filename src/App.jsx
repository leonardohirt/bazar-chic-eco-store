import React, { useState, useRef } from 'react';
import { colors } from './theme/colors';

// Importando componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductModal from './components/ProductModal';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  // Estados de Interação
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('todos');

  // Refs de Seção para Scroll Suave
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    categories: useRef(null),
    products: useRef(null),
    benefits: useRef(null),
    contact: useRef(null),
  };

  const handleNavigate = (target) => {
    const targetRef = sectionRefs[target];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategoryFromCard = (categoryId) => {
    setSelectedCategoryFilter(categoryId);
    // Pequeno atraso para dar tempo ao estado de atualizar e depois dar scroll
    setTimeout(() => {
      handleNavigate('products');
    }, 100);
  };

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <div className="app-container">
      {/* Cabeçalho Fixo */}
      <Header onNavigate={handleNavigate} />

      {/* Corpo Rolável */}
      <main className="scroll-content">
        {/* Seção Hero */}
        <div ref={sectionRefs.hero} className="app-section">
          <Hero onNavigate={handleNavigate} />
        </div>

        {/* Seção Sobre */}
        <div ref={sectionRefs.about} className="app-section">
          <About />
        </div>

        {/* Seção Categorias */}
        <div ref={sectionRefs.categories} className="app-section">
          <Categories onSelectCategory={handleSelectCategoryFromCard} />
        </div>

        {/* Seção Produtos em Destaque */}
        <div ref={sectionRefs.products} className="app-section">
          <FeaturedProducts 
            onSelectProduct={handleOpenProductDetails}
            selectedCategoryFilter={selectedCategoryFilter}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
          />
        </div>

        {/* Seção Diferenciais */}
        <div ref={sectionRefs.benefits} className="app-section">
          <Benefits />
        </div>

        {/* Seção Depoimentos */}
        <div className="app-section">
          <Testimonials />
        </div>

        {/* Seções de Instagram + Contatos + Mapa */}
        <div ref={sectionRefs.contact} className="app-section">
          <Contact />
        </div>

        {/* Rodapé */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}
