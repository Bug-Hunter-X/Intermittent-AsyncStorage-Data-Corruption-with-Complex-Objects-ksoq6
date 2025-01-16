// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeComplexObject = async (key, complexObject) => {
  try {
    const jsonValue = JSON.stringify(complexObject);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const retrieveComplexObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
};