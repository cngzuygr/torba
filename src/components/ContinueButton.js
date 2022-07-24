import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const ContinueButton = ({ width }) => {
	const navigation = useNavigation();
	const buttonWidth = useSharedValue("0%");
	const textColor = useSharedValue("#FFCB0A");

	const viewStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(buttonWidth.value, {
				duration: 500,
			}),
		};
	});

	const textStyle = useAnimatedStyle(() => {
		return {
			color: withTiming(textColor.value, {
				duration: 1000,
			}),
		};
	});

	useEffect(() => {
		buttonWidth.value = "80%";
		textColor.value = "#232323";
	}, []);
	return (
		<View
			style={{
				flexDirection: "row",
				height: 80,
				width: width,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Animated.View style={viewStyle}>
				<TouchableOpacity
					onPress={() => navigation.navigate("SignUpScreen")}
					style={{
						height: 50,
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#FFCB0A",
						borderRadius: 6,
					}}
				>
					<Animated.Text
						style={[
							textStyle,
							{
								fontFamily: "Inter",
								fontWeight: "400",
								fontSize: 14,
								//color: "#232323",
								fontWeight: "700",
							},
						]}
					>
						Hemen Başla
					</Animated.Text>
				</TouchableOpacity>
			</Animated.View>
		</View>
	);
};

export default ContinueButton;

const styles = StyleSheet.create({});
