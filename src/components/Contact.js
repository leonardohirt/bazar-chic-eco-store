import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, Linking } from 'react-native';
import { MapPin, Clock, Phone, Send, MessageSquare } from 'lucide-react-native';
import { Instagram } from './BrandIcons';
import { colors } from '../theme/colors';
import { useResponsive } from '../theme/responsive';

export default function Contact() {
  const { isMobile, width } = useResponsive();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const instagramPosts = [
    { id: 'ig1', image: require('../../assets/hero_fashion_model.jpg') },
    { id: 'ig2', image: require('../../assets/category_women.jpg') },
    { id: 'ig3', image: require('../../assets/category_accessories.jpg') },
    { id: 'ig4', image: require('../../assets/category_shoes.jpg') },
    { id: 'ig5', image: require('../../assets/category_men.jpg') },
    { id: 'ig6', image: require('../../assets/bazar_photo.jpg') },
  ];

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(`Olá Bazar Chic! Meu nome é ${name || 'Visitante'}. Mensagem: ${message || 'Gostaria de saber mais sobre a loja.'}`);
    Linking.openURL(`https://wa.me/5542999999999?text=${text}`);
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/bazarchic_ecostore');
  };

  return (
    <View style={styles.contactSection}>
      <View style={styles.content}>
        
        {/* Instagram Header & Grid */}
        <View style={styles.instagramHeader}>
          <Text style={styles.subtitle}>Siga-nos</Text>
          <Pressable onPress={handleInstagramPress} style={styles.instagramLink}>
            <Instagram size={20} color={colors.primary} style={{ marginRight: 8 }} />
            <Text style={styles.instagramTitle}>@bazarchic_ecostore</Text>
          </Pressable>
          <Text style={styles.instagramSubtitle}>Acompanhe nossas novidades diárias no feed</Text>
        </View>

        {/* Grid de Posts do Instagram */}
        <View style={styles.instagramGrid}>
          {instagramPosts.map((post) => (
            <Pressable 
              key={post.id}
              style={({ hovered }) => [
                styles.igPost,
                { width: isMobile ? '47%' : '15%', height: isMobile ? 160 : 180 },
                hovered && styles.igPostHovered
              ]}
              onPress={handleInstagramPress}
            >
              <Image source={post.image} style={styles.igImage} resizeMode="cover" />
              <View style={styles.igOverlay}>
                <Instagram size={24} color={colors.white} />
              </View>
            </Pressable>
          ))}
        </View>

        {/* Divisor Visual */}
        <View style={styles.dividerLarge} />

        {/* Informações de Contato e Formulário */}
        <View style={[
          styles.footerGrid,
          { flexDirection: isMobile ? 'column' : 'row' }
        ]}>
          
          {/* Lado Esquerdo: Contatos e Endereço */}
          <View style={[
            styles.contactInfo,
            { width: isMobile ? '100%' : '48%', marginBottom: isMobile ? 40 : 0 }
          ]}>
            <Text style={styles.infoHeading}>Fale Conosco</Text>
            <Text style={styles.infoDesc}>
              Ficaremos felizes em te receber em nossa loja física ou atender você de 
              forma remota via WhatsApp e Instagram.
            </Text>

            {/* Itens de Contato */}
            <View style={styles.infoCard}>
              <View style={styles.contactItem}>
                <MapPin size={22} color={colors.primary} style={styles.infoIcon} />
                <View>
                  <Text style={styles.contactLabel}>Endereço:</Text>
                  <Text style={styles.contactValue}>Capitão Rocha, 2228 - Centro{"\n"}Guarapuava - PR</Text>
                </View>
              </View>

              <View style={styles.contactItem}>
                <Clock size={22} color={colors.secondary} style={styles.infoIcon} />
                <View>
                  <Text style={styles.contactLabel}>Horário de Atendimento:</Text>
                  <Text style={styles.contactValue}>Segunda a Sábado, das 9h às 18h</Text>
                </View>
              </View>

              <View style={styles.contactItem}>
                <Phone size={22} color={colors.primary} style={styles.infoIcon} />
                <View>
                  <Text style={styles.contactLabel}>WhatsApp / Redes Sociais:</Text>
                  <Text style={styles.contactValue}>Fale conosco pelo WhatsApp ou Instagram{"\n"}@bazarchic_ecostore</Text>
                </View>
              </View>
            </View>

            {/* Espaço para o Mapa (Estilizado) */}
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <MapPin size={32} color={colors.secondary} style={{ marginBottom: 10 }} />
                <Text style={styles.mapText}>Visualização do Mapa Interativo</Text>
                <Text style={styles.mapSubtext}>Capitão Rocha, 2228 - Centro, Guarapuava</Text>
                <Pressable
                  style={styles.mapBtn}
                  onPress={() => Linking.openURL('https://maps.google.com/?q=Capitão+Rocha+2228+Centro+Guarapuava+Paraná')}
                >
                  <Text style={styles.mapBtnText}>Como Chegar</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Lado Direito: Formulário com WhatsApp */}
          <View style={[
            styles.contactFormContainer,
            { width: isMobile ? '100%' : '48%' }
          ]}>
            <Text style={styles.formHeading}>Envie uma Mensagem</Text>
            <Text style={styles.formDesc}>
              Tem dúvidas sobre tamanhos ou marcas específicas? Fale conosco direto no WhatsApp!
            </Text>

            <View style={styles.form}>
              <Text style={styles.fieldLabel}>Seu Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Maria Souza"
                placeholderTextColor={colors.grayDark}
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.fieldLabel}>Como podemos ajudar?</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Ex: Gostaria de saber as medidas do vestido floral..."
                placeholderTextColor={colors.grayDark}
                multiline={true}
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
              />

              <Pressable
                style={({ hovered }) => [
                  styles.submitBtn,
                  hovered && styles.submitBtnHovered
                ]}
                onPress={handleWhatsAppContact}
              >
                <MessageSquare size={18} color={colors.white} style={{ marginRight: 8 }} />
                <Text style={styles.submitBtnText}>Enviar pelo WhatsApp</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactSection: {
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
  instagramHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  instagramLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  instagramTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: colors.text,
  },
  instagramSubtitle: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    color: colors.textSecondary,
  },
  instagramGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '100%',
  },
  igPost: {
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  igPostHovered: {
    transform: [{ scale: 1.05 }],
  },
  igImage: {
    width: '100%',
    height: '100%',
  },
  igOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(181, 91, 111, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '0.2s',
  },
  // No React Native Web, podemos configurar a visibilidade com hover na web real. 
  // Em mobile, clica e redireciona direto.
  dividerLarge: {
    height: 1,
    backgroundColor: 'rgba(181, 91, 111, 0.15)',
    marginVertical: 60,
    width: '100%',
  },
  footerGrid: {
    width: '100%',
    justifyContent: 'space-between',
  },
  contactInfo: {
    justifyContent: 'flex-start',
  },
  infoHeading: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: colors.text,
    marginBottom: 12,
  },
  infoDesc: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.grayLight,
    marginBottom: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  contactLabel: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 13,
    color: colors.primary,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  contactValue: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 15,
    color: colors.text,
    lineHeight: 20,
  },
  mapContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#E8F1EC', // Fundo sutil verde sálvia
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mapText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 4,
  },
  mapSubtext: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  mapBtn: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  mapBtnText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
    color: colors.white,
  },
  contactFormContainer: {
    justifyContent: 'flex-start',
  },
  formHeading: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: colors.text,
    marginBottom: 12,
  },
  formDesc: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 24,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 30,
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  fieldLabel: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 13,
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.grayLight,
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    color: colors.text,
    marginBottom: 20,
    outlineStyle: 'none', // Remove contorno azul no navegador
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    transitionProperty: 'all',
    transitionDuration: '0.2s',
  },
  submitBtnHovered: {
    backgroundColor: colors.text,
    transform: [{ translateY: -2 }],
  },
  submitBtnText: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 15,
    color: colors.white,
  },
});
