import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Linking } from 'react-native';
import { MessageSquare, ArrowRight, Leaf } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Hero({ onNavigate }) {
  const { isMobile, width } = useResponsive();

  const handleWhatsAppPress = () => {
    const text = encodeURIComponent("Olá Bazar Chic Eco Store! Vim pelo site e gostaria de conhecer as novidades de moda consciente.");
    Linking.openURL(`https://wa.me/5542999999999?text=${text}`);
  };

  return (
    <View style={styles.heroContainer}>
      <View style={[
        styles.heroContent,
        { flexDirection: isMobile ? 'column-reverse' : 'row' }
      ]}>
        
        {/* Lado Esquerdo: Texto e Ações */}
        <View style={[
          styles.textSection,
          { width: isMobile ? '100%' : '50%', paddingRight: isMobile ? 0 : 40, marginTop: isMobile ? 30 : 0 }
        ]}>
          {/* Badge Ecológica */}
          <View style={styles.badge}>
            <Leaf size={14} color={colors.secondary} style={styles.badgeIcon} />
            <Text style={styles.badgeText}>Curadoria 100% Sustentável</Text>
          </View>

          {/* Título Principal */}
          <Text style={[
            styles.title,
            { fontSize: isMobile ? 32 : 54, lineHeight: isMobile ? 40 : 64 }
          ]}>
            Moda consciente,{'\n'}
            <Text style={styles.titleHighlight}>estilo que transforma</Text>
          </Text>

          {/* Subtítulo */}
          <Text style={styles.subtitle}>
            Oferecemos uma seleção premium de peças de alta qualidade, 
            personalidade marcante e consumo responsável. Encontre roupas e 
            acessórios elegantes que contam histórias e preservam o planeta.
          </Text>

          {/* Ações */}
          <View style={[
            styles.actionContainer,
            { flexDirection: isMobile && width < 480 ? 'column' : 'row' }
          ]}>
            <Pressable
              style={({ hovered }) => [
                styles.primaryButton,
                hovered && styles.primaryButtonHovered,
                isMobile && width < 480 && styles.fullWidthBtn
              ]}
              onPress={() => onNavigate('products')}
            >
              <Text style={styles.primaryButtonText}>Conheça a Loja</Text>
              <ArrowRight size={18} color={colors.white} style={styles.btnIcon} />
            </Pressable>

            <Pressable
              style={({ hovered }) => [
                styles.secondaryButton,
                hovered && styles.secondaryButtonHovered,
                isMobile && width < 480 && [styles.fullWidthBtn, { marginTop: 12, marginLeft: 0 }]
              ]}
              onPress={handleWhatsAppPress}
            >
              <MessageSquare size={18} color={colors.primary} style={styles.btnIconLeft} />
              <Text style={styles.secondaryButtonText}>Fale pelo WhatsApp</Text>
            </Pressable>
          </View>

          {/* Estatísticas Rápidas */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.5k+</Text>
              <Text style={styles.statLabel}>Peças Circulares</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Clientes Felizes</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Curadoria Rígida</Text>
            </View>
          </View>
        </View>

        {/* Lado Direito: Imagem Destaque */}
        <View style={[
          styles.imageSection,
          { width: isMobile ? '100%' : '50%' }
        ]}>
          <View style={styles.imageWrapper}>
            <Image 
              source={require('../../assets/bazar_photo.jpg')}
              style={[
                styles.heroImage,
                { height: isMobile ? 350 : 555 }
              ]}
              resizeMode="cover"
            />
            {/* Elemento Decorativo Flutuante */}
            <View style={styles.floatingBadge}>
              <Text style={styles.floatingBadgeTitle}>Eco Chic 🌿</Text>
              <Text style={styles.floatingBadgeText}>Estilo de Vida Verde</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    width: '100%',
    backgroundColor: colors.beige,
    paddingVertical: 60,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  badgeIcon: {
    marginRight: 6,
  },
  badgeText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
    color: colors.secondary,
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    color: colors.text,
    marginBottom: 20,
  },
  titleHighlight: {
    color: colors.primary,
    fontFamily: 'PlayfairDisplay_700Bold_Italic',
  },
  subtitle: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 26,
    marginBottom: 35,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 30,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  primaryButtonHovered: {
    backgroundColor: colors.text,
    transform: [{ translateY: -2 }],
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  primaryButtonText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 15,
    color: colors.white,
  },
  btnIcon: {
    marginLeft: 8,
  },
  btnIconLeft: {
    marginRight: 8,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    marginLeft: 16,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  secondaryButtonHovered: {
    backgroundColor: colors.primaryLight,
    transform: [{ translateY: -2 }],
  },
  secondaryButtonText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 15,
    color: colors.primary,
  },
  fullWidthBtn: {
    width: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(181, 91, 111, 0.15)',
    paddingTop: 30,
  },
  statItem: {
    flex: 1,
  },
  statNumber: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
    color: colors.textLight,
  },
  statDivider: {
    width: 1,
    height: 35,
    backgroundColor: 'rgba(181, 91, 111, 0.15)',
    marginHorizontal: 15,
  },
  imageSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 500,
  },
  heroImage: {
    width: '100%',
    borderRadius: 24,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  floatingBadge: {
    position: 'absolute',
    bottom: 20,
    left: -20,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  floatingBadgeTitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 2,
  },
  floatingBadgeText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 11,
    color: colors.textSecondary,
  },
});
