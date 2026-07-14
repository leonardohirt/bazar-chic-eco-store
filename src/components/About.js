import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';
import { Award, ShieldCheck, Sparkles } from 'lucide-react-native';

export default function About() {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.aboutContainer}>
      <View style={[
        styles.aboutContent,
        { flexDirection: isMobile ? 'column' : 'row' }
      ]}>
        
        {/* Lado Esquerdo: Imagem da Loja */}
        <View style={[
          styles.imageSection,
          { width: isMobile ? '100%' : '45%', marginBottom: isMobile ? 30 : 0 }
        ]}>
          <Image 
            source={require('../../assets/bazar_photo.jpg')}
            style={styles.aboutImage}
            resizeMode="cover"
          />
        </View>

        {/* Lado Direito: Texto Institucional */}
        <View style={[
          styles.textSection,
          { width: isMobile ? '100%' : '50%' }
        ]}>
          <Text style={styles.sectionSubtitle}>Nossa História</Text>
          <Text style={styles.sectionTitle}>Moda que respeita o amanhã</Text>
          
          <Text style={styles.description}>
            O **Bazar Chic Eco Store** nasceu com o propósito de provar que elegância e 
            sustentabilidade podem caminhar juntas de forma harmoniosa. Fazemos uma 
            curadoria atenta e profissional de roupas, calçados e acessórios de marca e de 
            alta qualidade, dando uma nova vida a cada peça através da economia circular.
          </Text>

          <Text style={styles.descriptionSecondary}>
            Nosso processo de curadoria é rigoroso. Cada item que entra em nosso acervo passa 
            por uma seleção detalhada de qualidade, higienização e pequenos reparos quando necessário. 
            Assim, entregamos a você peças exclusivas com cara de loja convencional, mas com a alma 
            e o impacto ambiental reduzido de um consumo verdadeiramente ecológico.
          </Text>

          {/* Mini Pilares */}
          <View style={styles.pillarsContainer}>
            <View style={styles.pillarItem}>
              <View style={styles.pillarIconBg}>
                <Award size={20} color={colors.primary} />
              </View>
              <View style={styles.pillarTextWrapper}>
                <Text style={styles.pillarTitle}>Qualidade Premium</Text>
                <Text style={styles.pillarText}>Apenas peças selecionadas em excelente estado.</Text>
              </View>
            </View>

            <View style={styles.pillarItem}>
              <View style={styles.pillarIconBg}>
                <ShieldCheck size={20} color={colors.secondary} />
              </View>
              <View style={styles.pillarTextWrapper}>
                <Text style={styles.pillarTitle}>Consumo Circular</Text>
                <Text style={styles.pillarText}>Redução do impacto ambiental e prolongamento da vida útil.</Text>
              </View>
            </View>

            <View style={styles.pillarItem}>
              <View style={styles.pillarIconBg}>
                <Sparkles size={20} color={colors.primary} />
              </View>
              <View style={styles.pillarTextWrapper}>
                <Text style={styles.pillarTitle}>Estilo Único</Text>
                <Text style={styles.pillarText}>Roupas com personalidade própria e preço justo.</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  aboutContent: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutImage: {
    width: '100%',
    height: 480,
    borderRadius: 24,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  textSection: {
    justifyContent: 'center',
  },
  sectionSubtitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 36,
    color: colors.text,
    lineHeight: 44,
    marginBottom: 20,
  },
  description: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 26,
    marginBottom: 15,
  },
  descriptionSecondary: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 15,
    color: colors.textLight,
    lineHeight: 24,
    marginBottom: 35,
  },
  pillarsContainer: {
    marginTop: 10,
  },
  pillarItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  pillarIconBg: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.grayLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 2,
  },
  pillarTextWrapper: {
    flex: 1,
  },
  pillarTitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  pillarText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
