import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  return StyleSheet.create({
    footer: {
      height: 64,
      width: "100%",
      borderTopWidth: 1,
      borderTopColor: t.colors.border,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 16,
      backgroundColor: t.colors.surface,
    },

    footerItem: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: 6,
      minWidth: 72,
    },

    // Base
    footerIcon: {
      width: 26,
      height: 26,
    },
    footerText: {
      fontSize: 12,
      marginTop: 2,
    },

    // Estados
    footerIconActive: {
      tintColor: t.colors.primary,
    },
    footerIconInactive: {
      tintColor: t.colors.mutedText,
    },
    footerTextActive: {
      color: t.colors.primary,
      fontWeight: "700",
    },
    footerTextInactive: {
      color: t.colors.mutedText,
      fontWeight: "500",
    },
  });
}
