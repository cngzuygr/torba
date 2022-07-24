import {
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from "react-native";
import React from "react";

const OnboardingItem = ({ item }) => {
	const { width } = useWindowDimensions();
	return (
		<View style={{ width: width }}>
			<Image
				source={item.image}
				resizeMode="contain"
				resizeMethod="scale"
				style={{ width: width, height: width }}
			/>
			<View
				style={{
					flex: 1,
					width: "80%",
					justifyContent: "center",
					alignItems: "center",
					alignSelf: "center",
				}}
			>
				<Text
					style={{
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: 24,
						lineHeight: 29,
						marginBottom: 15,
					}}
				>
					{item.title}
				</Text>
				{item.id === "0" ? (
					<Text
						style={{
							fontFamily: "Inter",
							fontWeight: "400",
							fontSize: 14,
							lineHeight: 17,
							textAlign: "center",
							color: "#848484",
						}}
					>
						<Text
							style={{
								fontFamily: "Inter",
								fontWeight: "700",
								fontSize: 14,
								lineHeight: 17,
								textAlign: "center",
							}}
						>
							{item.extraDescription}
						</Text>
						{item.description}
					</Text>
				) : item.id === "2" ? (
					<Text
						style={{
							fontFamily: "Inter",
							fontWeight: "400",
							fontSize: 14,
							lineHeight: 17,
							textAlign: "center",
							color: "#848484",
						}}
					>
						<Text
							style={{
								fontFamily: "Inter",
								fontWeight: "700",
								fontSize: 14,
								lineHeight: 17,
								textAlign: "center",
							}}
						>
							{item.extraDescription}
						</Text>
						{item.description}
					</Text>
				) : (
					<Text
						style={{
							fontFamily: "Inter",
							fontWeight: "400",
							fontSize: 14,
							lineHeight: 17,
							textAlign: "center",
							color: "#848484",
						}}
					>
						{item.description}
					</Text>
				)}
			</View>
		</View>
	);
};

export default OnboardingItem;

const styles = StyleSheet.create({});
