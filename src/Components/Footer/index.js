import { View, Image, Pressable, Text } from "react-native";
import makeStyles from "./style";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Footer({ setModalSUSVisivel, susSelected = false }) {
  const navigation = useNavigation();
  const route = useRoute();
  const styles = useThemedStyles(makeStyles);

  const current = route?.name;
  const isHome = current === "Home";
  const isPerfil = current === "Perfil" || current === "EditarPerfil";
  const isSUS = !!susSelected;

  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate("Home")}
        hitSlop={10}
      >
        <Image
          source={require("../../../assets/home.png")}
          style={[
            styles.footerIcon,
            isHome ? styles.footerIconActive : styles.footerIconInactive,
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.footerText,
            isHome ? styles.footerTextActive : styles.footerTextInactive,
          ]}
        >
          Início
        </Text>
      </Pressable>

      <Pressable
        style={styles.footerItem}
        onPress={() => setModalSUSVisivel(true)}
        hitSlop={10}
      >
        <Image
          source={require("../../../assets/coracao-home.png")}
          style={[
            styles.footerIcon,
            isSUS ? styles.footerIconActive : styles.footerIconInactive,
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.footerText,
            isSUS ? styles.footerTextActive : styles.footerTextInactive,
          ]}
        >
          Cartão SUS
        </Text>
      </Pressable>

      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate("Perfil")}
        hitSlop={10}
      >
        <Image
          source={require("../../../assets/icon-perfil.png")}
          style={[
            styles.footerIcon,
            isPerfil ? styles.footerIconActive : styles.footerIconInactive,
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.footerText,
            isPerfil ? styles.footerTextActive : styles.footerTextInactive,
          ]}
        >
          Perfil
        </Text>
      </Pressable>
    </View>
  );
}
