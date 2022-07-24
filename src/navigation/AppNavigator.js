import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Home, Search } from "../screens";

const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen
				name="HomeStack"
				component={HomeNavigator}
				options={{
					headerShown: false,
					title: "Home",
					tabBarIcon: () => <TabBarIcon name="cloud-outline" color={"black"} />,
				}}
			/>
			<BottomTab.Screen
				name="SearchStack"
				component={SearchNavigator}
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: () => <TabBarIcon name="cloud-outline" color={"black"} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

function TabBarIcon(props) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{ headerTitle: "App One Title" }}
			/>
		</HomeStack.Navigator>
	);
}

const SearchStack = createNativeStackNavigator();
function SearchNavigator() {
	return (
		<SearchStack.Navigator screenOptions={{ headerShown: false }}>
			<SearchStack.Screen
				name="Search"
				component={Search}
				options={{ headerTitle: "App Two Title" }}
			/>
		</SearchStack.Navigator>
	);
}
