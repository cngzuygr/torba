import { StyleSheet, Animated, Dimensions, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { storeData } from "../utils/AsyncFunctions";
import { StatusBar } from "expo-status-bar";
import OnboardingItem from "../components/OnboardingItem";
import OnboardingData from "../utils/OnboardingData";
import Paginator from "../components/Paginator";

const WIDTH = Dimensions.get("screen").width;
const DATA = OnboardingData;

const OnboardingScreen = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const scrollTo = () => {
		if (currentIndex < DATA.length - 1) {
			slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
		} else {
			return;
		}
	};
	const scrollToEnd = () => {
		slidesRef.current.scrollToIndex({ index: 2 });
	};

	async function onBoardingSeen(storage, value) {
		let result = await storeData(storage, value);
		return result;
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <OnboardingItem item={item} />}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				bounces={false}
				keyExtractor={(item) => item.id}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{
						useNativeDriver: false,
					}
				)}
				scrollEventThrottle={32}
				onViewableItemsChanged={viewableItemsChanged}
				viewabilityConfig={viewConfig}
				ref={slidesRef}
			/>
			<Paginator
				data={DATA}
				scrollX={scrollX}
				scrollTo={scrollTo}
				scrollToEnd={scrollToEnd}
				currentIndex={currentIndex}
			/>
			<StatusBar />
		</SafeAreaView>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		width: WIDTH,
	},
});
