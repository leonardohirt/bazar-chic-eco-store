import React from 'react';
import { useResponsive } from '../theme/responsive';
import womenImg from '../../assets/category_women.jpg';
import menImg from '../../assets/category_men.jpg';
import shoesImg from '../../assets/category_shoes.jpg';
import accessoriesImg from '../../assets/category_accessories.jpg';
import './Categories.css';

export default function Categories({ onSelectCategory }) {
  const { isMobile } = useResponsive();

  const categories = [
    {
      id: 'feminino',
      title: 'Moda Feminina',
      count: '650+ Peças',
      image: womenImg,
    },
    {
      id: 'masculino',
      title: 'Moda Masculina',
      count: '320+ Peças',
      image: menImg,
    },
    {
      id: 'calcados',
      title: 'Calçados',
      count: '180+ Peças',
      image: shoesImg,
    },
    {
      id: 'acessorios',
      title: 'Acessórios',
      count: '240+ Peças',
      image: accessoriesImg,
    },
  ];

  return (
    <section className="categories-container">
      <div className="categories-content">
        
        {/* Cabeçalho da Seção */}
        <div className="categories-header">
          <span className="categories-subtitle">Curadoria</span>
          <h2 className="categories-title">Nossas Categorias</h2>
          <div className="categories-divider" />
          <p className="categories-desc">
            Navegue por nossas seções com curadoria premium e encontre o estilo ideal 
            para você, com responsabilidade socioambiental.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
            >
              <img src={cat.image} className="category-card-img" alt={cat.title} />
              
              <div className="category-card-overlay">
                <div className="category-card-badge">
                  <span className="category-card-badge-text">{cat.count}</span>
                </div>
                <div className="category-card-info">
                  <h3 className="category-card-title">{cat.title}</h3>
                  <span className="category-card-action">Ver Coleção →</span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
