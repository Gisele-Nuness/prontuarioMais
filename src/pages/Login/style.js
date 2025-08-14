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
      height: 30,
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      textAlign: 'center'
    },

    containerHora: {
        width: 100,
        alignItems: 'center'
    },

    containerIcons: {
        width: 100,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    hora: {
        color: '#fff',
        fontWeight: 'bold'
    },

    icons: {
      width: 20,
      height: 20,
    },

    txt1: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },

    main: {
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    txtBtnVoltar: {
        fontSize: 12,
        color: '#000',
        textTransform: 'uppercase'
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
      height: 40,
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