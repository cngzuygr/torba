import {
	StyleSheet,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
	Animated,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ContinueButton from "./ContinueButton";

const Paginator = ({ data, scrollX, scrollTo, scrollToEnd, currentIndex }) => {
	const { width } = useWindowDimensions();

	if (currentIndex === 2) {
		return <ContinueButton width={width} />;
	} else {
		return (
			<View
				style={{
					flexDirection: "row",
					height: 64,
					width: width,
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<TouchableOpacity onPress={scrollToEnd} style={{ marginLeft: 20 }}>
					<Text
						style={{
							fontFamily: "Inter",
							fontWeight: "400",
							fontSize: 14,
							color: "#232323",
						}}
					>
						Geç
					</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: "row" }}>
					{data.map((_, i) => {
						const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

						const dotWidth = scrollX.interpolate({
							inputRange,
							outputRange: [10, 20, 10],
							extrapolate: "clamp",
						});
						return (
							<Animated.View
								style={{
									height: 10,
									borderRadius: 5,
									backgroundColor: "#009743",
									marginHorizontal: 8,
									width: dotWidth,
								}}
								key={i.toString()}
							/>
						);
					})}
				</View>
				<TouchableOpacity onPress={scrollTo} style={{ marginRight: 20 }}>
					<AntDesign name="arrowright" size={24} color="black" />
				</TouchableOpacity>
			</View>
		);
	}
};

export default Paginator;

const styles = StyleSheet.create({});
