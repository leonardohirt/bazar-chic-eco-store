import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Leaf, Award, TrendingUp, Heart, RefreshCw } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Benefits() {
  const { isMobile, width } = useResponsive();

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
    <View style={styles.benefitsSection}>
      <View style={styles.content}>
        
        {/* Cabeçalho */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subtitle}>Vantagens</Text>
          <Text style={styles.title}>Por que escolher a Bazar Chic?</Text>
          <View style={styles.divider} />
        </View>

        {/* Grid de Diferenciais */}
        <View style={[
          styles.gridContainer,
          { 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }
        ]}>
          {benefitsList.map((item) => {
            // Calcula largura responsiva para as 5 colunas
            let cardWidth = '100%';
            if (width >= 1024) {
              cardWidth = '18%'; // 5 colunas lado a lado no desktop largo com margens
            } else if (width >= 768) {
              cardWidth = '45%'; // 2 colunas no tablet
            }

            return (
              <View 
                key={item.id}
                style={[
                  styles.benefitCard,
                  { 
                    width: cardWidth,
                    marginHorizontal: isMobile ? 0 : '1%',
                    marginBottom: 20
                  }
                ]}
              >
                <View style={styles.iconBg}>
                  {item.icon}
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            );
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  benefitsSection: {
    width: '100%',
    backgroundColor: colors.beige,
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
  benefitCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  iconBg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
