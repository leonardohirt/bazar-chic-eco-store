import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Header({ onNavigate }) {
  const { isMobile } = useResponsive();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', target: 'hero' },
    { label: 'Sobre', target: 'about' },
    { label: 'Categorias', target: 'categories' },
    { label: 'Produtos', target: 'products' },
    { label: 'Diferenciais', target: 'benefits' },
    { label: 'Contato', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Slogan Banner Superior */}
      <View style={styles.topBanner}>
        <Text style={styles.topBannerText}>
          🌿 SUSTENTABILIDADE É A NOSSA MODA.
        </Text>
      </View>

      {/* Navbar Principal */}
      <View style={styles.navbar}>
        {/* Logo */}
        <TouchableOpacity 
          style={styles.logoContainer} 
          activeOpacity={0.8}
          onPress={() => handleNavClick('hero')}
        >
          <View style={styles.logoIconBg}>
            <Leaf size={20} color={colors.secondary} />
          </View>
          <View>
            <Text style={styles.logoText}>Bazar Chic</Text>
            <Text style={styles.logoSubtext}>ECO STORE</Text>
          </View>
        </TouchableOpacity>

        {/* Menu Desktop */}
        {!isMobile && (
          <View style={styles.navLinks}>
            {menuItems.map((item) => (
              <Pressable
                key={item.target}
                onPress={() => handleNavClick(item.target)}
                style={({ hovered }) => [
                  styles.navLinkPressable,
                  hovered && styles.navLinkHovered
                ]}
              >
                {({ hovered }) => (
                  <Text style={[
                    styles.navLinkText,
                    hovered && styles.navLinkTextHovered
                  ]}>
                    {item.label}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        )}

        {/* Botão de Destaque / Contato Desktop */}
        {!isMobile && (
          <Pressable
            style={({ hovered }) => [
              styles.ctaButton,
              hovered && styles.ctaButtonHovered
            ]}
            onPress={() => handleNavClick('contact')}
          >
            <ShoppingBag size={16} color={colors.white} style={styles.ctaIcon} />
            <Text style={styles.ctaButtonText}>Visite a Loja</Text>
          </Pressable>
        )}

        {/* Botão Hambúrguer Mobile */}
        {isMobile && (
          <TouchableOpacity 
            style={styles.menuToggleButton}
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={26} color={colors.text} />
            ) : (
              <Menu size={26} color={colors.text} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Menu Mobile Expandido */}
      {isMobile && mobileMenuOpen && (
        <View style={styles.mobileMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.target}
              style={styles.mobileNavLink}
              onPress={() => handleNavClick(item.target)}
            >
              <Text style={styles.mobileNavLinkText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.mobileCtaButton}
            onPress={() => handleNavClick('contact')}
          >
            <ShoppingBag size={18} color={colors.white} style={styles.ctaIcon} />
            <Text style={styles.mobileCtaButtonText}>Visite a Loja</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: colors.white,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    // Sombra sutil para sensação premium
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3,
  },
  topBanner: {
    width: '100%',
    backgroundColor: colors.secondaryLight,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBannerText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
    color: colors.secondary,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  navbar: {
    height: 75,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIconBg: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoText: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: colors.primary,
    lineHeight: 22,
  },
  logoSubtext: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 10,
    color: colors.secondary,
    letterSpacing: 2.5,
    marginTop: -2,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  navLinkPressable: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  navLinkHovered: {
    backgroundColor: colors.primaryLight,
  },
  navLinkText: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 14,
    color: colors.text,
  },
  navLinkTextHovered: {
    color: colors.primary,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  ctaButtonHovered: {
    backgroundColor: colors.text,
    transform: [{ translateY: -2 }],
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  ctaIcon: {
    marginRight: 8,
  },
  ctaButtonText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  menuToggleButton: {
    padding: 6,
  },
  mobileMenu: {
    width: '100%',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.grayLight,
    padding: 20,
    position: 'absolute',
    top: 108, // Altura do banner + navbar
    left: 0,
    right: 0,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  mobileNavLink: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
  },
  mobileNavLinkText: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 16,
    color: colors.text,
  },
  mobileCtaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
  },
  mobileCtaButtonText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    color: colors.white,
  },
});
