import { StyleSheet, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
	const { width } = useWindowDimensions();
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../../assets/images/torbaLogo.png")}
				resizeMode="contain"
				resizeMethod="scale"
				style={{ width: width / 2, height: width / 2 }}
			/>
			<StatusBar />
		</SafeAreaView>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
});
