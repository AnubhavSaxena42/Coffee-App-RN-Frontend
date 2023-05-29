import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {
  deleteAllItemsFromStorage,
  getItemFromStorage,
} from '../../services/storage-service';
import {STORAGE_KEYS} from '../../core/enums';
import {ROUTES} from '../../navigation/routes';

const SplashScreen = ({navigation}) => {
  const initApp = async () => {
    const localToken = await getItemFromStorage(STORAGE_KEYS.TOKEN);
    if (localToken) {
      navigation.replace(ROUTES.APP_VIEW);
    }
    await deleteAllItemsFromStorage();
    navigation.navigate(ROUTES.LOGIN_SCREEN);
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <View style={styles.splashScreenContainer}>
      <ActivityIndicator size="large" color="#EFE3C8" />
    </View>
  );
};

export default SplashScreen;
