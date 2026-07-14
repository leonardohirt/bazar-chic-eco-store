import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Categories({ onSelectCategory }) {
  const { isMobile } = useResponsive();

  const categories = [
    {
      id: 'feminino',
      title: 'Moda Feminina',
      count: '650+ Peças',
      image: require('../../assets/category_women.jpg'),
    },
    {
      id: 'masculino',
      title: 'Moda Masculina',
      count: '320+ Peças',
      image: require('../../assets/category_men.jpg'),
    },
    {
      id: 'calcados',
      title: 'Calçados',
      count: '180+ Peças',
      image: require('../../assets/category_shoes.jpg'),
    },
    {
      id: 'acessorios',
      title: 'Acessórios',
      count: '240+ Peças',
      image: require('../../assets/category_accessories.jpg'),
    },
  ];

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.content}>
        
        {/* Cabeçalho da Seção */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subtitle}>Curadoria</Text>
          <Text style={styles.title}>Nossas Categorias</Text>
          <View style={styles.divider} />
          <Text style={styles.headerDescription}>
            Navegue por nossas seções com curadoria premium e encontre o estilo ideal 
            para você, com responsabilidade socioambiental.
          </Text>
        </View>

        {/* Grid de Categorias */}
        <View style={[
          styles.grid,
          { flexDirection: isMobile ? 'column' : 'row' }
        ]}>
          {categories.map((cat) => (
            <Pressable
              key={cat.id}
              style={({ hovered }) => [
                styles.categoryCard,
                { 
                  width: isMobile ? '100%' : '23.5%',
                  height: isMobile ? 320 : 420,
                  marginBottom: isMobile ? 20 : 0
                },
                hovered && styles.categoryCardHovered
              ]}
              onPress={() => onSelectCategory(cat.id)}
            >
              <ImageBackground
                source={cat.image}
                style={styles.cardBg}
                imageStyle={styles.cardImage}
              >
                {/* Degradê de sobreposição linear */}
                <View style={styles.cardOverlay}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cat.count}</Text>
                  </View>
                  <View>
                    <Text style={styles.cardTitle}>{cat.title}</Text>
                    <Text style={styles.cardAction}>Ver Coleção →</Text>
                  </View>
                </View>
              </ImageBackground>
            </Pressable>
          ))}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
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
  headerDescription: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 24,
  },
  grid: {
    width: '100%',
    justifyContent: 'space-between',
  },
  categoryCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
    transitionProperty: 'all',
    transitionDuration: '0.3s',
  },
  categoryCardHovered: {
    transform: [{ scale: 1.03 }, { translateY: -6 }],
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowColor: colors.primary,
  },
  cardBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cardImage: {
    borderRadius: 20,
  },
  cardOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 24,
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(8px)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
    color: colors.white,
  },
  cardTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: colors.white,
    marginBottom: 6,
  },
  cardAction: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.primaryLight,
  },
});
