import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faHeart,
  faBell,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { layoutStyle } from "../StyleSheets";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={layoutStyle.container}>
      <TouchableOpacity
        style={[layoutStyle.button, layoutStyle.button1]}
        onPress={() => navigation.navigate("About")}>
        <FontAwesomeIcon icon={faHome} style={layoutStyle.icon} />
        <Text style={layoutStyle.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyle.button, layoutStyle.button2]}
        onPress={() => navigation.navigate("Contact")}>
        <FontAwesomeIcon icon={faSearch} style={layoutStyle.icon} />
        <Text style={layoutStyle.buttonText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyle.button, layoutStyle.button3]}
        onPress={() => navigation.navigate("Service")}>
        <FontAwesomeIcon icon={faHeart} style={layoutStyle.icon} />
        <Text style={layoutStyle.buttonText}>Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyle.button, layoutStyle.button4]}
        onPress={() => navigation.navigate("Question2")}>
        <FontAwesomeIcon icon={faBell} style={layoutStyle.icon} />
        <Text style={layoutStyle.buttonText}>Question 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyle.button, layoutStyle.button5]}
        onPress={() => navigation.navigate("Question3")}>
        <FontAwesomeIcon icon={faCog} style={layoutStyle.icon} />
        <Text style={layoutStyle.buttonText}>Question 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
