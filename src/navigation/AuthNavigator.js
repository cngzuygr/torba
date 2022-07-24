import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen, SignInScreen, SignUpScreen } from "../screens";

const AuthNav = createNativeStackNavigator();

export default function AuthNavigator() {
	// // async function onBoardingSeen() {
	// // 	let result = await getData();
	// // 	console.log(result);
	// // }

	// useEffect(() => {
	// 	onBoardingSeen();
	// }, []);

	return (
		<AuthNav.Navigator screenOptions={{ headerShown: false }}>
			<AuthNav.Screen name="OnboardingScreen" component={OnboardingScreen} />
			<AuthNav.Screen name="SignUpScreen" component={SignUpScreen} />
			<AuthNav.Screen name="SignInScreen" component={SignInScreen} />
		</AuthNav.Navigator>
	);
}
