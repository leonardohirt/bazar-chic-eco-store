import React from 'react';
import { Eye, Leaf, Tag } from 'lucide-react';
import { colors } from '../theme/colors';
import womenImg from '../../assets/category_women.jpg';
import menImg from '../../assets/category_men.jpg';
import shoesImg from '../../assets/category_shoes.jpg';
import accessoriesImg from '../../assets/category_accessories.jpg';
import modelImg from '../../assets/hero_fashion_model.jpg';
import './FeaturedProducts.css';

export default function FeaturedProducts({ onSelectProduct, selectedCategoryFilter, setSelectedCategoryFilter }) {
  const productsList = [
    {
      id: 'p1',
      title: 'Vestido Midi Flora em Linho',
      category: 'feminino',
      categoryLabel: 'Moda Feminina',
      price: 'R$ 189,90',
      image: womenImg,
      description: 'Lindo vestido midi com abotoamento frontal e cinto regulável, feito 100% de linho orgânico certificado. Caimento leve e toque macio na pele.',
      ecoDetails: 'Economiza 1200L de água comparado ao algodão comum.',
      sizes: ['P', 'M', 'G'],
      isNew: true,
    },
    {
      id: 'p2',
      title: 'Camisa Rustic em Algodão',
      category: 'masculino',
      categoryLabel: 'Moda Masculina',
      price: 'R$ 139,90',
      image: menImg,
      description: 'Camisa casual masculina com gola clássica e botões de coco. Confeccionada em algodão rústico orgânico, sem tingimento químico agressivo.',
      ecoDetails: '100% biodegradável, livre de corantes sintéticos.',
      sizes: ['M', 'G', 'GG'],
      isNew: false,
    },
    {
      id: 'p3',
      title: 'Oxford Cortiça Comfort',
      category: 'calcados',
      categoryLabel: 'Calçados',
      price: 'R$ 219,95',
      image: shoesImg,
      description: 'Sapato social casual unissex com solado de borracha reciclada e cabedal revestido de cortiça premium. Levíssimo e impermeável por natureza.',
      ecoDetails: 'Cortiça extraída sem derrubar árvores (ciclo sustentável).',
      sizes: ['36', '38', '40', '42'],
      isNew: true,
    },
    {
      id: 'p4',
      title: 'Bolsa Tote EcoArt Minimalista',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      price: 'R$ 79,90',
      image: accessoriesImg,
      description: 'Bolsa sacola de lona grossa de algodão regenerado com bolso interno e estampagem manual em serigrafia à base de água.',
      ecoDetails: 'Feito a partir de resíduos de fiação têxtil.',
      sizes: ['Tamanho Único'],
      isNew: false,
    },
    {
      id: 'p5',
      title: 'Macacão Utilitário Terracota',
      category: 'feminino',
      categoryLabel: 'Moda Feminina',
      price: 'R$ 249,00',
      image: modelImg,
      description: 'Macacão com corte reto utilitário, bolsos cargos e ajuste na cintura. Confeccionado em mescla de liocel ecológico e linho circular.',
      ecoDetails: 'Liocel originado de florestas certificadas sustentáveis.',
      sizes: ['P', 'M'],
      isNew: true,
    },
    {
      id: 'p6',
      title: 'Óculos Madeira Bamboo',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      price: 'R$ 119,90',
      image: accessoriesImg,
      description: 'Óculos de sol polarizados com armação feita à mão de bambu orgânico leve. Acompanha estojo protetor em cortiça.',
      ecoDetails: 'Bambu de crescimento ultra-rápido, carbono neutro.',
      sizes: ['Tamanho Único'],
      isNew: false,
    },
  ];

  const categoriesFilter = [
    { id: 'todos', label: 'Todos' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'calcados', label: 'Calçados' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  const filteredProducts = productsList.filter(p => 
    selectedCategoryFilter === 'todos' || p.category === selectedCategoryFilter
  );

  return (
    <section className="products-section">
      <div className="products-content">
        
        {/* Cabeçalho */}
        <div className="products-header">
          <span className="products-subtitle">Seleção Especial</span>
          <h2 className="products-title">Produtos em Destaque</h2>
          <div className="products-divider" />
          <p className="products-desc">
            Roupas e acessórios cuidadosamente selecionados por nossa curadoria, 
            garantindo estilo refinado e responsabilidade com o meio ambiente.
          </p>
        </div>

        {/* Filtros de Categorias */}
        <div className="filter-wrapper">
          <div className="filter-container">
            {categoriesFilter.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${selectedCategoryFilter === f.id ? 'active' : ''}`}
                onClick={() => setSelectedCategoryFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="products-grid">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="product-card"
              onClick={() => onSelectProduct(prod)}
            >
              {/* Imagem do Produto */}
              <div className="card-image-container">
                <img src={prod.image} className="card-image" alt={prod.title} />
                
                {prod.isNew && (
                  <div className="card-new-badge">
                    <span className="card-new-badge-text">Novidade</span>
                  </div>
                )}

                <div className="card-eco-pill">
                  <span className="card-eco-pill-icon">
                    <Leaf size={10} color={colors.secondary} />
                  </span>
                  <span className="card-eco-pill-text">Eco</span>
                </div>

                {/* Overlay de Ação Rápida */}
                <div className="card-overlay">
                  <div className="view-detail-icon">
                    <Eye size={20} color={colors.white} />
                  </div>
                </div>
              </div>

              {/* Info do Produto */}
              <div className="card-info">
                <span className="card-category">{prod.categoryLabel}</span>
                <h3 className="card-title">{prod.title}</h3>
                
                <div className="price-row">
                  <span className="card-price">{prod.price}</span>
                  <div className="btn-details">
                    <Tag size={12} color={colors.primary} style={{ marginRight: 4 }} />
                    <span className="btn-details-text">Ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
