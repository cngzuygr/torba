import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData } from "../utils/AsyncFunctions";

const SignUpScreen = () => {
	let storage = "onBoardingSeen";

	async function onBoardingSeen() {
		let result = await getData(storage);
		console.log(result);
	}

	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>SignUpScreen</Text>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({});
