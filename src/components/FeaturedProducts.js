import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Eye, Leaf, Tag } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function FeaturedProducts({ onSelectProduct, selectedCategoryFilter, setSelectedCategoryFilter }) {
  const { isMobile, width } = useResponsive();

  const productsList = [
    {
      id: 'p1',
      title: 'Vestido Midi Flora em Linho',
      category: 'feminino',
      categoryLabel: 'Moda Feminina',
      price: 'R$ 189,90',
      image: require('../../assets/category_women.jpg'),
      description: 'Lindo vestido midi com abotoamento frontal e cinto regulável, feito 100% de linho orgânico certificado. Caimento leve e toque macio na pele.',
      ecoDetails: 'Economiza 1200L de água comparado ao algodão comum.',
      sizes: ['P', 'M', 'G'],
      isNew: true,
    },
    {
      id: 'p2',
      title: 'Camisa Rustic em Algodão',
      category: 'masculino',
      categoryLabel: 'Moda Masculina',
      price: 'R$ 139,90',
      image: require('../../assets/category_men.jpg'),
      description: 'Camisa casual masculina com gola clássica e botões de coco. Confeccionada em algodão rústico orgânico, sem tingimento químico agressivo.',
      ecoDetails: '100% biodegradável, livre de corantes sintéticos.',
      sizes: ['M', 'G', 'GG'],
      isNew: false,
    },
    {
      id: 'p3',
      title: 'Oxford Cortiça Comfort',
      category: 'calcados',
      categoryLabel: 'Calçados',
      price: 'R$ 219,95',
      image: require('../../assets/category_shoes.jpg'),
      description: 'Sapato social casual unissex com solado de borracha reciclada e cabedal revestido de cortiça premium. Levíssimo e impermeável por natureza.',
      ecoDetails: 'Cortiça extraída sem derrubar árvores (ciclo sustentável).',
      sizes: ['36', '38', '40', '42'],
      isNew: true,
    },
    {
      id: 'p4',
      title: 'Bolsa Tote EcoArt Minimalista',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      price: 'R$ 79,90',
      image: require('../../assets/category_accessories.jpg'),
      description: 'Bolsa sacola de lona grossa de algodão regenerado com bolso interno e estampagem manual em serigrafia à base de água.',
      ecoDetails: 'Feito a partir de resíduos de fiação têxtil.',
      sizes: ['Tamanho Único'],
      isNew: false,
    },
    {
      id: 'p5',
      title: 'Macacão Utilitário Terracota',
      category: 'feminino',
      categoryLabel: 'Moda Feminina',
      price: 'R$ 249,00',
      image: require('../../assets/hero_fashion_model.jpg'),
      description: 'Macacão com corte reto utilitário, bolsos cargos e ajuste na cintura. Confeccionado em mescla de liocel ecológico e linho circular.',
      ecoDetails: 'Liocel originado de florestas certificadas sustentáveis.',
      sizes: ['P', 'M'],
      isNew: true,
    },
    {
      id: 'p6',
      title: 'Óculos Madeira Bamboo',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      price: 'R$ 119,90',
      image: require('../../assets/category_accessories.jpg'), // Reutilizado com elegância
      description: 'Óculos de sol polarizados com armação feita à mão de bambu orgânico leve. Acompanha estojo protetor em cortiça.',
      ecoDetails: 'Bambu de crescimento ultra-rápido, carbono neutro.',
      sizes: ['Tamanho Único'],
      isNew: false,
    },
  ];

  const categoriesFilter = [
    { id: 'todos', label: 'Todos' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'calcados', label: 'Calçados' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  // Filtra a lista
  const filteredProducts = productsList.filter(p => 
    selectedCategoryFilter === 'todos' || p.category === selectedCategoryFilter
  );

  return (
    <View style={styles.productsSection}>
      <View style={styles.content}>
        
        {/* Cabeçalho */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subtitle}>Seleção Especial</Text>
          <Text style={styles.title}>Produtos em Destaque</Text>
          <View style={styles.divider} />
          <Text style={styles.headerDescription}>
            Roupas e acessórios cuidadosamente selecionados por nossa curadoria, 
            garantindo estilo refinado e responsabilidade com o meio ambiente.
          </Text>
        </View>

        {/* Filtros de Categorias */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
          style={styles.filterWrapper}
        >
          <View style={styles.filterContainer}>
            {categoriesFilter.map((f) => (
              <Pressable
                key={f.id}
                style={[
                  styles.filterBtn,
                  selectedCategoryFilter === f.id && styles.filterBtnActive
                ]}
                onPress={() => setSelectedCategoryFilter(f.id)}
              >
                <Text style={[
                  styles.filterBtnText,
                  selectedCategoryFilter === f.id && styles.filterBtnTextActive
                ]}>
                  {f.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Grid de Produtos */}
        <View style={[
          styles.productsGrid,
          { flexDirection: 'row', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }
        ]}>
          {filteredProducts.map((prod) => {
            // Calcula largura responsiva
            let cardWidth = '100%';
            if (width >= 992) {
              cardWidth = '31.3%'; // 3 colunas no desktop
            } else if (width >= 768) {
              cardWidth = '47.5%'; // 2 colunas no tablet
            }

            return (
              <Pressable
                key={prod.id}
                style={({ hovered }) => [
                  styles.productCard,
                  { 
                    width: cardWidth,
                    marginHorizontal: isMobile ? 0 : '1%',
                    marginBottom: 30
                  },
                  hovered && styles.productCardHovered
                ]}
                onPress={() => onSelectProduct(prod)}
              >
                {/* Imagem do Produto */}
                <View style={styles.cardImageContainer}>
                  <Image source={prod.image} style={styles.cardImage} resizeMode="cover" />
                  
                  {prod.isNew && (
                    <View style={styles.newBadge}>
                      <Text style={styles.newBadgeText}>Novidade</Text>
                    </View>
                  )}

                  <View style={styles.ecoPill}>
                    <Leaf size={10} color={colors.secondary} style={styles.ecoPillIcon} />
                    <Text style={styles.ecoPillText}>Eco</Text>
                  </View>

                  {/* Overlay de Ação Rápida */}
                  <View style={styles.cardOverlay}>
                    <View style={styles.viewDetailIcon}>
                      <Eye size={20} color={colors.white} />
                    </View>
                  </View>
                </View>

                {/* Info do Produto */}
                <View style={styles.cardInfo}>
                  <Text style={styles.cardCategory}>{prod.categoryLabel}</Text>
                  <Text style={styles.cardTitle} numberOfLines={1}>{prod.title}</Text>
                  
                  <View style={styles.priceRow}>
                    <Text style={styles.cardPrice}>{prod.price}</Text>
                    <View style={styles.btnDetails}>
                      <Tag size={12} color={colors.primary} style={{ marginRight: 4 }} />
                      <Text style={styles.btnDetailsText}>Ver detalhes</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productsSection: {
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
    marginBottom: 35,
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
  filterWrapper: {
    width: '100%',
    marginBottom: 40,
  },
  filterScroll: {
    alignSelf: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.grayLight,
    marginHorizontal: 6,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  filterBtnActive: {
    backgroundColor: colors.primary,
  },
  filterBtnText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.textSecondary,
  },
  filterBtnTextActive: {
    color: colors.white,
  },
  productsGrid: {
    width: '100%',
  },
  productCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  productCardHovered: {
    transform: [{ translateY: -6 }],
    shadowOpacity: 0.2,
    shadowRadius: 15,
    borderColor: 'rgba(181, 91, 111, 0.15)',
  },
  cardImageContainer: {
    position: 'relative',
    height: 300,
    width: '100%',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  newBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  newBadgeText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 11,
    color: colors.white,
  },
  ecoPill: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ecoPillIcon: {
    marginRight: 4,
  },
  ecoPillText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 10,
    color: colors.secondary,
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(181, 91, 111, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '0.2s',
    // No hover do React Native Web, nós revelamos esse overlay. Em mobile, ele apenas clica.
  },
  viewDetailIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfo: {
    padding: 20,
  },
  cardCategory: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 11,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  cardTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'between',
  },
  cardPrice: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  btnDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  btnDetailsText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 11,
    color: colors.primary,
  },
});
