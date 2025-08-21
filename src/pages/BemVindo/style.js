import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1600a4ff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      gap: 10,
    },

    header: {
      gap: 10,
      height: '50%',
      width: '100%',
      justifyContent: 'flex-end',
      marginBottom: 40,
      alignItems: 'center',
    },

    imgCoracao: {
      width: 100,
      height: 100,
      borderRadius: 150,
      right: 110,
    },

    txt1: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },

    footer: {
      backgroundColor: '#fff',
      width: '100%',
      height: 400,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    txt2: {
      color: '#abaaaaff',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      bottom: 65
    },

    btn: {
      width: 300,
      height: 50,
      backgroundColor: '#1600a4ff',
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    txtBtn: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      textTransform: 'uppercase'
    }



  });