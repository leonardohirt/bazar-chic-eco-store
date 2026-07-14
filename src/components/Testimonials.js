import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Testimonials() {
  const { isMobile, width } = useResponsive();

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
    <View style={styles.testimonialsSection}>
      <View style={styles.content}>
        
        {/* Cabeçalho */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subtitle}>Opiniões</Text>
          <Text style={styles.title}>O que dizem nossas clientes</Text>
          <View style={styles.divider} />
        </View>

        {/* Grid de Depoimentos */}
        <View style={[
          styles.gridContainer,
          { 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between'
          }
        ]}>
          {reviews.map((rev) => {
            let cardWidth = '100%';
            if (width >= 992) {
              cardWidth = '31.3%'; // 3 colunas no desktop
            } else if (width >= 768) {
              cardWidth = '47.5%'; // 2 colunas no tablet
            }

            return (
              <View 
                key={rev.id}
                style={[
                  styles.reviewCard,
                  { 
                    width: cardWidth,
                    marginBottom: 30
                  }
                ]}
              >
                {/* Estrelas */}
                <View style={styles.starRow}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} color="#FFC107" fill="#FFC107" style={{ marginRight: 4 }} />
                  ))}
                </View>

                {/* Citação */}
                <Text style={styles.quoteText}>"{rev.quote}"</Text>

                {/* Linha Divisória */}
                <View style={styles.cardDivider} />

                {/* Cliente */}
                <View style={styles.clientInfo}>
                  <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>{rev.name.charAt(0)}</Text>
                  </View>
                  <View>
                    <Text style={styles.clientName}>{rev.name}</Text>
                    <Text style={styles.clientRole}>{rev.role}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testimonialsSection: {
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 50,
  },
  subtitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 36,
    color: colors.text,
    textAlign: 'center',
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: colors.secondary,
    marginVertical: 20,
    borderRadius: 2,
  },
  gridContainer: {
    width: '100%',
  },
  reviewCard: {
    backgroundColor: colors.beige,
    borderRadius: 24,
    padding: 30,
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quoteText: {
    fontFamily: 'PlayfairDisplay_700Bold_Italic',
    fontSize: 16,
    color: colors.text,
    lineHeight: 26,
    marginBottom: 20,
  },
  cardDivider: {
    height: 1,
    backgroundColor: 'rgba(181, 91, 111, 0.15)',
    marginBottom: 20,
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 16,
    color: colors.primary,
  },
  clientName: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 15,
    color: colors.text,
    marginBottom: 2,
  },
  clientRole: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
    color: colors.textLight,
  },
});
