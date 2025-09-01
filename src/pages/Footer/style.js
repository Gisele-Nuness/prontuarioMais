 import { StyleSheet } from "react-native";
 
 export default StyleSheet.create({

footer: {
    height: 64,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#E9E9E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },

  footerItem: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 6,
  },

  footerIcon: {
    width: 26,
    height: 26,
  },

  footerText: {
    fontSize: 12,
    color: "#1600A4",
    marginTop: 2,
  },
});