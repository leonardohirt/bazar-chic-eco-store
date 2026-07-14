import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      id: 'r1',
      name: 'Mariana Silva',
      role: 'Advogada e Consumidora Consciente',
      quote: 'Fiquei chocada com a qualidade das peças! Comprei um vestido de linho da Zara que parecia novo, por menos da metade do preço. A curadoria é maravilhosa.',
      rating: 5,
    },
    {
      id: 'r2',
      name: 'Pedro Albuquerque',
      role: 'Designer Gráfico',
      quote: 'O atendimento pelo WhatsApp é impecável. Mandaram fotos extras das costuras e as medidas exatas. Virei cliente frequente da loja masculina!',
      rating: 5,
    },
    {
      id: 'r3',
      name: 'Camila Fernandes',
      role: 'Estudante de Agronomia',
      quote: 'Amo o lema da loja. Dá pra se vestir muito bem, com marcas premium, sem incentivar a exploração do fast-fashion. Sustentabilidade de verdade.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        
        {/* Cabeçalho */}
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Opiniões</span>
          <h2 className="testimonials-title">O que dizem nossas clientes</h2>
          <div className="testimonials-divider" />
        </div>

        {/* Grid de Depoimentos */}
        <div className="testimonials-grid">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="review-card"
            >
              {/* Estrelas */}
              <div className="star-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="star-icon">
                    <Star size={16} color="#FFC107" fill="#FFC107" />
                  </span>
                ))}
              </div>

              {/* Citação */}
              <blockquote className="quote-text">"{rev.quote}"</blockquote>

              {/* Linha Divisória */}
              <div className="card-divider" />

              {/* Cliente */}
              <div className="client-info">
                <div className="avatar-placeholder">
                  <span className="avatar-text">{rev.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="client-name">{rev.name}</h4>
                  <p className="client-role">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
