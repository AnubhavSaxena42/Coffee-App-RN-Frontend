import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveItemToStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error: any) {
    console.error('AsyncStorage error: ' + error.message);
  }
}

export async function getItemFromStorage(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error: any) {
    console.error('AsyncStorage error: ' + error.message);
    return error.message;
  }
}

export async function deleteAllItemsFromStorage() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    keys.forEach(key => {
      deleteItemFromStorage(key);
    });
  } catch (error: any) {
    console.error('AsyncStorage error: ' + error.message);
  }
}

export async function deleteItemFromStorage(key: string) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error: any) {
    console.error('AsyncStorage error: ' + error.message);
  }
}
