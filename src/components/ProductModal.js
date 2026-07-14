import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, Pressable, TouchableWithoutFeedback, ScrollView, Linking } from 'react-native';
import { X, MessageSquare, ShieldCheck, Leaf, Heart } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function ProductModal({ product, visible, onClose }) {
  const { isMobile, width } = useResponsive();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  const handleOrderPress = () => {
    const sizeText = selectedSize ? ` no tamanho ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Olá Bazar Chic Eco Store! Tenho interesse no produto: "${product.title}" (${product.price})${sizeText}. Está disponível?`
    );
    Linking.openURL(`https://wa.me/5511999999999?text=${message}`);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[
              styles.modalContent,
              { 
                width: isMobile ? '90%' : 800,
                maxHeight: isMobile ? '85%' : 600,
                flexDirection: isMobile ? 'column' : 'row'
              }
            ]}>
              {/* Botão Fechar */}
              <Pressable style={styles.closeButton} onPress={onClose}>
                <X size={20} color={colors.text} />
              </Pressable>

              {/* Lado Esquerdo: Imagem */}
              <View style={[
                styles.imageContainer,
                { width: isMobile ? '100%' : '50%', height: isMobile ? 250 : '100%' }
              ]}>
                <Image 
                  source={product.image} 
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <Pressable 
                  style={styles.favoriteButton}
                  onPress={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={20} color={isFavorite ? colors.primary : colors.textSecondary} fill={isFavorite ? colors.primary : 'none'} />
                </Pressable>
              </View>

              {/* Lado Direito: Detalhes */}
              <View style={[
                styles.detailsContainer,
                { width: isMobile ? '100%' : '50%' }
              ]}>
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                  
                  {/* Categoria & Badge */}
                  <View style={styles.headerInfo}>
                    <Text style={styles.categoryText}>{product.categoryLabel}</Text>
                    <View style={styles.ecoBadge}>
                      <Leaf size={12} color={colors.secondary} style={styles.ecoBadgeIcon} />
                      <Text style={styles.ecoBadgeText}>100% Eco</Text>
                    </View>
                  </View>

                  {/* Nome e Preço */}
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>

                  {/* Divisor */}
                  <View style={styles.divider} />

                  {/* Descrição */}
                  <Text style={styles.sectionHeading}>Detalhes do Produto</Text>
                  <Text style={styles.description}>{product.description}</Text>

                  {/* Impacto Ecológico */}
                  <View style={styles.ecoBox}>
                    <ShieldCheck size={18} color={colors.secondary} style={styles.ecoBoxIcon} />
                    <Text style={styles.ecoBoxText}>{product.ecoDetails}</Text>
                  </View>

                  {/* Tamanhos */}
                  {product.sizes && product.sizes.length > 0 && (
                    <View style={styles.sizesSection}>
                      <Text style={styles.sectionHeading}>Selecione o Tamanho:</Text>
                      <View style={styles.sizesGrid}>
                        {product.sizes.map((size) => (
                          <Pressable
                            key={size}
                            style={[
                              styles.sizeBubble,
                              selectedSize === size && styles.sizeBubbleSelected
                            ]}
                            onPress={() => setSelectedSize(size)}
                          >
                            <Text style={[
                              styles.sizeText,
                              selectedSize === size && styles.sizeTextSelected
                            ]}>
                              {size}
                            </Text>
                          </Pressable>
                        ))}
                      </View>
                    </View>
                  )}

                  {/* Ação Principal */}
                  <Pressable
                    style={({ hovered }) => [
                      styles.ctaButton,
                      hovered && styles.ctaButtonHovered
                    ]}
                    onPress={handleOrderPress}
                  >
                    <MessageSquare size={18} color={colors.white} style={styles.ctaIcon} />
                    <Text style={styles.ctaButtonText}>Encomendar via WhatsApp</Text>
                  </Pressable>

                  {/* Garantia Eco */}
                  <Text style={styles.footerNote}>
                    * Peça única selecionada sob curadoria rígida. Ao finalizar, o vendedor confirmará as medidas e fotos adicionais.
                  </Text>
                </ScrollView>
              </View>

            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.grayLight,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detailsContainer: {
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 32,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ecoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ecoBadgeIcon: {
    marginRight: 4,
  },
  ecoBadgeText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 10,
    color: colors.secondary,
  },
  productTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: colors.text,
    marginBottom: 8,
  },
  productPrice: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 20,
    color: colors.text,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.grayLight,
    marginBottom: 16,
  },
  sectionHeading: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  ecoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.beige,
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  ecoBoxIcon: {
    marginRight: 8,
  },
  ecoBoxText: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 13,
    color: colors.secondary,
    flex: 1,
  },
  sizesSection: {
    marginBottom: 24,
  },
  sizesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeBubble: {
    borderWidth: 1.5,
    borderColor: colors.grayMedium,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  sizeBubbleSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  sizeText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 13,
    color: colors.textSecondary,
  },
  sizeTextSelected: {
    color: colors.primary,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 16,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  ctaButtonHovered: {
    backgroundColor: colors.text,
    transform: [{ translateY: -2 }],
  },
  ctaIcon: {
    marginRight: 8,
  },
  ctaButtonText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 15,
    color: colors.white,
  },
  footerNote: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 11,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 15,
  },
});
