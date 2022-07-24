import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Navigation from "./src/navigation";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
	const [fonts] = useFonts({
		Inter: require("./assets/fonts/Inter-Regular.ttf"),
		InterBold: require("./assets/fonts/Inter-Bold.ttf"),
	});

	const [isLoading, setIsLoading] = useState(false);

	if (isLoading || !fonts) {
		return <SplashScreen />;
	}

	return <Navigation />;
}
