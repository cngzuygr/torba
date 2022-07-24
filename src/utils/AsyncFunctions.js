import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (storage, value) => {
	try {
		await AsyncStorage.setItem(storage, value);
	} catch (e) {
		console.log(e);
	}
};

export const getData = async (storage) => {
	try {
		const value = await AsyncStorage.getItem(storage);
		if (value !== null) {
			return value;
		}
	} catch (e) {
		return e;
	}
};

export const removeData = async (storage) => {
	try {
		await AsyncStorage.removeItem(storage);
	} catch (e) {
		return e;
	}
};
