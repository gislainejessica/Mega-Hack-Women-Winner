import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const DetailCategoryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <View style={[styles.wrapper2]} >
          <Text style={styles.title}>Bem-vinda a ConnectApp!</Text>
          <View style={styles.barra} />
          <Text style={styles.context}>
            Vamos fazer o que fazemos de melhor, compartilhar conhecimento e ajudar umas as outras.
          </Text>
        </View> */}

        <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}> Categoria Marketing: </Text>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <Text style={styles.subtitle}> Marketing em seu dia a dia, será possivel? </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.
            Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
            assessoria de comunicação, e-mail marketing e muito mais.
        </Text>
        </View>

      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    shadowColor: '#743c7a',
    elevation: 4,
    shadowOpacity: 0.50,
    shadowRadius: 1.41,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  wrapper2: {
    borderColor: '#F2EFEB',
    borderWidth: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  bloco: {
    display: "flex",
    flexDirection: 'row',
    padding: 20,
  },
  bigCardView: {
    display: "flex",
    flexDirection: 'column',
    width: '70%',
    backgroundColor: "#fff",
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 20,
    maxHeight: 250,
    padding: 20,
  },
  smallCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    height: 60,
  },
  smallCardView: {
    display: "flex",
    flexDirection: 'column',
    width: '25%',
  },
  barra: {
    marginVertical: 5,
    width: 55,
    height: 5,
    backgroundColor: Colors.dark.gray,
    borderRadius: 3,
  },
  barra2: {
    //marginVertical: 10,
    width: '80%',
    height: 2.5,
    backgroundColor: '#e2ddee',
    borderRadius: 3,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#d9e5f2',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    // marginVertical: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: 'bold',
    fontFamily: 'Grandstander',
  },
  subtitle: {
    fontSize: 18,
    // color: "#7369c1",
    // marginBottom: 10,
    fontWeight: '500',
    fontFamily: 'Grandstander',
  },
  context: {
    fontSize: 14,
    color: "#1a172b",
    fontWeight: '400',
    marginTop: 10,
    // fontFamily: 'Grandstander',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default DetailCategoryScreen;