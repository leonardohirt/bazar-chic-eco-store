import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { colors } from '../theme/colors';
import bazarPhoto from '../../assets/bazar_photo.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* Lado Esquerdo: Imagem da Loja */}
        <div className="about-image-section">
          <img 
            src={bazarPhoto}
            className="about-image"
            alt="Sobre a Bazar Chic Eco Store"
          />
        </div>

        {/* Lado Direito: Texto Institucional */}
        <div className="about-text-section">
          <span className="about-subtitle">Nossa História</span>
          <h2 className="about-title">Moda que respeita o amanhã</h2>
          
          <p className="about-desc">
            O <strong>Bazar Chic Eco Store</strong> nasceu com o propósito de provar que elegância e 
            sustentabilidade podem caminhar juntas de forma harmoniosa. Fazemos uma 
            curadoria atenta e profissional de roupas, calçados e acessórios de marca e de 
            alta qualidade, dando uma nova vida a cada peça através da economia circular.
          </p>

          <p className="about-desc-secondary">
            Nosso processo de curadoria é rigoroso. Cada item que entra em nosso acervo passa 
            por uma seleção detalhada de qualidade, higienização e pequenos reparos quando necessário. 
            Assim, entregamos a você peças exclusivas com cara de loja convencional, mas com a alma 
            e o impacto ambiental reduzido de um consumo verdadeiramente ecológico.
          </p>

          {/* Mini Pilares */}
          <div className="about-pillars">
            <div className="about-pillar-item">
              <div className="about-pillar-icon-bg">
                <Award size={20} color={colors.primary} />
              </div>
              <div className="about-pillar-text-wrapper">
                <h4 className="about-pillar-title">Qualidade Premium</h4>
                <p className="about-pillar-text">Apenas peças selecionadas em excelente estado.</p>
              </div>
            </div>

            <div className="about-pillar-item">
              <div className="about-pillar-icon-bg">
                <ShieldCheck size={20} color={colors.secondary} />
              </div>
              <div className="about-pillar-text-wrapper">
                <h4 className="about-pillar-title">Consumo Circular</h4>
                <p className="about-pillar-text">Redução do impacto ambiental e prolongamento da vida útil.</p>
              </div>
            </div>

            <div className="about-pillar-item">
              <div className="about-pillar-icon-bg">
                <Sparkles size={20} color={colors.primary} />
              </div>
              <div className="about-pillar-text-wrapper">
                <h4 className="about-pillar-title">Estilo Único</h4>
                <p className="about-pillar-text">Roupas com personalidade própria e preço justo.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
