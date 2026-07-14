import React, { useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts, 
  PlayfairDisplay_700Bold, 
  PlayfairDisplay_700Bold_Italic 
} from '@expo-google-fonts/playfair-display';
import { 
  Outfit_400Regular, 
  Outfit_500Medium, 
  Outfit_600SemiBold, 
  Outfit_700Bold 
} from '@expo-google-fonts/outfit';

// Importando cores
import { colors } from './src/theme/colors';

// Importando componentes
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Categories from './src/components/Categories';
import FeaturedProducts from './src/components/FeaturedProducts';
import ProductModal from './src/components/ProductModal';
import Benefits from './src/components/Benefits';
import Testimonials from './src/components/Testimonials';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_700Bold_Italic,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
  });

  // Estados de Interação
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('todos');

  // Refs de Seção para Scroll Suave
  const scrollRef = useRef(null);
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    categories: useRef(null),
    products: useRef(null),
    benefits: useRef(null),
    contact: useRef(null),
  };

  const handleNavigate = (target) => {
    const targetRef = sectionRefs[target];
    if (targetRef && targetRef.current) {
      if (Platform.OS === 'web') {
        // Scroll nativo no navegador para máxima suavidade
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Scroll no Mobile usando referências de coordenada
        targetRef.current.measureLayout(
          scrollRef.current,
          (x, y) => {
            scrollRef.current.scrollTo({ y: y - 50, animated: true });
          },
          () => {}
        );
      }
    }
  };

  const handleSelectCategoryFromCard = (categoryId) => {
    setSelectedCategoryFilter(categoryId);
    // Pequeno atraso para dar tempo ao estado de atualizar e depois dar scroll
    setTimeout(() => {
      handleNavigate('products');
    }, 100);
  };

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Carregando Bazar Chic Eco Store...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.white} />
      
      {/* Cabeçalho Fixo */}
      <Header onNavigate={handleNavigate} />

      {/* Corpo Rolável */}
      <ScrollView 
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Seção Hero */}
        <View ref={sectionRefs.hero} style={styles.section}>
          <Hero onNavigate={handleNavigate} />
        </View>

        {/* Seção Sobre */}
        <View ref={sectionRefs.about} style={styles.section}>
          <About />
        </View>

        {/* Seção Categorias */}
        <View ref={sectionRefs.categories} style={styles.section}>
          <Categories onSelectCategory={handleSelectCategoryFromCard} />
        </View>

        {/* Seção Produtos em Destaque */}
        <View ref={sectionRefs.products} style={styles.section}>
          <FeaturedProducts 
            onSelectProduct={handleOpenProductDetails}
            selectedCategoryFilter={selectedCategoryFilter}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
          />
        </View>

        {/* Seção Diferenciais */}
        <View ref={sectionRefs.benefits} style={styles.section}>
          <Benefits />
        </View>

        {/* Seção Depoimentos */}
        <View style={styles.section}>
          <Testimonials />
        </View>

        {/* Seções de Instagram + Contatos + Mapa */}
        <View ref={sectionRefs.contact} style={styles.section}>
          <Contact />
        </View>

        {/* Rodapé */}
        <Footer onNavigate={handleNavigate} />
      </ScrollView>

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.beige,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: 'System',
    fontSize: 16,
    color: colors.primary,
    marginTop: 14,
    fontWeight: '600',
  },
  scrollContent: {
    flexGrow: 1,
  },
  section: {
    width: '100%',
  },
});
