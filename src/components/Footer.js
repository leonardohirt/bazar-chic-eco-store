import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Linking } from 'react-native';
import { Leaf, MessageSquare } from 'lucide-react-native';
import { Instagram, Facebook } from './BrandIcons';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Footer({ onNavigate }) {
  const { isMobile } = useResponsive();

  const handleSocialPress = (platform) => {
    if (platform === 'instagram') {
      Linking.openURL('https://instagram.com/bazarchic_ecostore');
    } else if (platform === 'whatsapp') {
      Linking.openURL('https://wa.me/5542999999999');
    } else {
      Linking.openURL('https://facebook.com');
    }
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.content}>
        
        {/* Parte Superior do Rodapé */}
        <View style={[
          styles.topSection,
          { flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }
        ]}>
          {/* Branding */}
          <View style={[styles.brandCol, { marginBottom: isMobile ? 30 : 0 }]}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIconBg}>
                <Leaf size={16} color={colors.secondary} />
              </View>
              <Text style={styles.logoText}>Bazar Chic</Text>
            </View>
            <Text style={styles.slogan}>🌿 Sustentabilidade é a nossa moda.</Text>
            <Text style={styles.brandDesc}>
              Curadoria premium de moda circular. Conectando você ao estilo de forma 
              ética, ecológica e elegante.
            </Text>
          </View>

          {/* Links Rápidos */}
          <View style={[styles.linksCol, { marginBottom: isMobile ? 30 : 0 }]}>
            <Text style={styles.colTitle}>Links Rápidos</Text>
            <View style={styles.linksGrid}>
              <TouchableOpacity onPress={() => onNavigate('hero')} style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Início</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onNavigate('about')} style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Sobre</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onNavigate('categories')} style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Categorias</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onNavigate('products')} style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Produtos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onNavigate('contact')} style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Contato</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Redes Sociais */}
          <View style={styles.socialCol}>
            <Text style={styles.colTitle}>Nossas Redes</Text>
            <Text style={styles.socialDesc}>Siga nosso perfil e venha fazer parte da comunidade circular.</Text>
            
            <View style={styles.socialIconsRow}>
              <Pressable 
                style={({ hovered }) => [styles.socialIconBtn, hovered && styles.socialIconBtnHovered]}
                onPress={() => handleSocialPress('instagram')}
              >
                <Instagram size={20} color={colors.white} />
              </Pressable>

              <Pressable 
                style={({ hovered }) => [styles.socialIconBtn, hovered && styles.socialIconBtnHovered]}
                onPress={() => handleSocialPress('whatsapp')}
              >
                <MessageSquare size={20} color={colors.white} />
              </Pressable>

              <Pressable 
                style={({ hovered }) => [styles.socialIconBtn, hovered && styles.socialIconBtnHovered]}
                onPress={() => handleSocialPress('facebook')}
              >
                <Facebook size={20} color={colors.white} />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Linha Divisória */}
        <View style={styles.footerDivider} />

        {/* Parte Inferior (Copyright) */}
        <View style={[
          styles.bottomSection,
          { flexDirection: isMobile ? 'column' : 'row' }
        ]}>
          <Text style={styles.copyrightText}>
            © {new Date().getFullYear()} Bazar Chic Eco Store. Todos os direitos reservados.
          </Text>
          <Text style={[styles.creditsText, { marginTop: isMobile ? 8 : 0 }]}>
            Curadoria com Amor 💚 Feito para durar.
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#1F1F1F', // Cinza muito escuro/Charcoal para contraste
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
  },
  topSection: {
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  brandCol: {
    flex: 1,
    paddingRight: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoIconBg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(94, 150, 111, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoText: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 22,
    color: colors.white,
  },
  slogan: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 13,
    color: colors.secondary,
    marginBottom: 12,
  },
  brandDesc: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 13,
    color: colors.grayMedium,
    lineHeight: 20,
    maxWidth: 320,
  },
  linksCol: {
    flex: 1,
  },
  colTitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    color: colors.white,
    marginBottom: 20,
  },
  linksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    maxWidth: 240,
  },
  footerLink: {
    width: '45%',
    marginBottom: 8,
  },
  footerLinkText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    color: colors.grayMedium,
    transitionProperty: 'color',
    transitionDuration: '0.2s',
  },
  socialCol: {
    flex: 1,
  },
  socialDesc: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 13,
    color: colors.grayMedium,
    lineHeight: 20,
    marginBottom: 16,
    maxWidth: 300,
  },
  socialIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  socialIconBtnHovered: {
    backgroundColor: colors.primary,
    transform: [{ translateY: -2 }],
  },
  footerDivider: {
    height: 1,
    backgroundColor: '#333333',
    width: '100%',
    marginBottom: 24,
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  copyrightText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
    color: colors.grayMedium,
  },
  creditsText: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 12,
    color: colors.secondary,
  },
});
