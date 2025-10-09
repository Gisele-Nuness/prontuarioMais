import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  const isDark = t.name === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.colors.background,
      flexDirection: "column",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      height: 120,
      width: "100%",
      justifyContent: "center",
      flexDirection: "column",
      padding: 5,
      alignItems: "center",
      textAlign: "center",
      backgroundColor: isDark ? t.colors.surface : t.colors.primary,
      borderBottomWidth: 1,
      borderBottomColor: t.colors.border,
      paddingVertical: 80,
    },

    imagem: {
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: t.colors.border,
      backgroundColor: t.colors.surface,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40
    },

    imgPerfil: {
      width: 92,
      height: 92,
      borderRadius: 50,
      tintColor: isDark ? t.colors.primary : t.colors.border,
      borderWidth: 2,
      borderColor: isDark ? t.colors.primary : t.colors.border,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40
    },

    imgLapis: {
      width: 15,
      height: 15,
      position: "absolute",
      right: 10,
      bottom: 10,
      tintColor: t.colors.primary,
    },

    main: {
      backgroundColor: t.colors.background,
      width: "100%",
      flex: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    btnVoltar: {
      width: 100,
      height: 30,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: -10,
      left: -10,
      borderColor: t.colors.border,
    },

    txtBtnVoltar: {
      fontSize: 12,
      color: t.colors.text,
      textTransform: "uppercase",
      fontWeight: "bold",
    },

    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 60,
      color: t.colors.primary,
      textAlign: "center",
    },

    logo: {
      width: 220,
      height: 220,
      alignItems: "center",
      justifyContent: "center",
      top: 50,
    },

    carregando: {
      marginTop: 8,
      color: t.colors.text,
    },

    containerInputs: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      gap: 30,
      marginTop: 30,
    },

    label: {
      alignSelf: "flex-start",
      marginLeft: 2,
      marginBottom: -25,
      color: t.colors.mutedText,
      fontSize: 14,
      fontWeight: "bold",
    },

    input: {
      width: 300,
      height: 40,
      borderBottomWidth: 2,
      borderColor: t.colors.border,
      color: t.colors.text,
      fontSize: 16,
    },

    picker: {
      width: 300,
      height: 40,
      backgroundColor: t.colors.background,
      borderBottomWidth: 2,
      borderColor: t.colors.border,
      color: t.colors.text,
      fontSize: 16,
      marginTop: 20,
    },

    containerBtn: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      marginTop: 30,
      marginBottom: 60,
    },

    btn: {
      width: 200,
      height: 40,
      backgroundColor: t.colors.primary,
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },

    txtBtn: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: t.colors.background,
      textTransform: "uppercase",
    },

    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
      backgroundColor: t.colors.surface,
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
      borderWidth: 1,
      borderColor: t.colors.border,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: "center",
      color: t.colors.text,
    },

    pickerText: {
      fontSize: 16,
      color: t.colors.text,
    },

      overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,

  },

    webPickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  webPickerOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  webPickerOptionSelected: {
    backgroundColor: t.colors.primary,
    color: t.colors.background,
  },
  webPickerOptionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
 
  });
}
