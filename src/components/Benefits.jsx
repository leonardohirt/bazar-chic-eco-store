import React from 'react';
import { Leaf, Award, TrendingUp, Heart, RefreshCw } from 'lucide-react';
import { colors } from '../theme/colors';
import './Benefits.css';

export default function Benefits() {
  const benefitsList = [
    {
      id: 'b1',
      icon: <Leaf size={28} color={colors.secondary} />,
      title: 'Moda Sustentável',
      description: 'Apoiamos a economia circular, reduzindo o desperdício têxtil e incentivando hábitos saudáveis de consumo.',
    },
    {
      id: 'b2',
      icon: <Award size={28} color={colors.primary} />,
      title: 'Curadoria Rigorosa',
      description: 'Todas as roupas e acessórios passam por inspeção minuciosa para garantir excelente estado de conservação.',
    },
    {
      id: 'b3',
      icon: <TrendingUp size={28} color={colors.primary} />,
      title: 'Custo-Benefício',
      description: 'Tenha acesso a grandes marcas de moda e peças de alta costura por uma fração do preço de mercado.',
    },
    {
      id: 'b4',
      icon: <Heart size={28} color={colors.primary} />,
      title: 'Atendimento Único',
      description: 'Consultoria de estilo personalizada pelo WhatsApp para te ajudar a escolher o caimento e o look perfeitos.',
    },
    {
      id: 'b5',
      icon: <RefreshCw size={28} color={colors.secondary} />,
      title: 'Renovação Diária',
      description: 'Nosso acervo é atualizado quase diariamente com novos achados incríveis. Nunca há dois dias iguais.',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-content">
        
        {/* Cabeçalho */}
        <div className="benefits-header">
          <span className="benefits-subtitle">Vantagens</span>
          <h2 className="benefits-title">Por que escolher a Bazar Chic?</h2>
          <div className="benefits-divider" />
        </div>

        {/* Grid de Diferenciais */}
        <div className="benefits-grid">
          {benefitsList.map((item) => (
            <div 
              key={item.id}
              className="benefit-card"
            >
              <div className="benefit-icon-bg">
                {item.icon}
              </div>
              <h3 className="benefit-card-title">{item.title}</h3>
              <p className="benefit-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
