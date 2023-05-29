import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SettingItem from './SettingItem';
import {deleteAllItemsFromStorage} from '../../services/storage-service';
import {ROUTES} from '../../navigation/routes';
import {useReactiveVar} from '@apollo/client';
import {userVar} from '../../core/reactiveVariables';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingsScreen = ({navigation}) => {
  const user = useReactiveVar(userVar);
  const logout = async () => {
    await deleteAllItemsFromStorage();
    navigation.replace(ROUTES.AUTH_STACK);
  };
  return (
    <View style={styles.settingsScreenContainer}>
      {/* Profile Picture Section */}
      <View style={styles.settingsScreenProfileSection}>
        <View style={styles.settingsScreenAvatarContainer}>
          <Entypo name="user" size={30} color="#f4ce9a" />
        </View>
        <Text style={{marginVertical: 20, fontSize: 12, color: '#f4ce9a'}}>
          {user?.name}
        </Text>
      </View>
      {/* Settings */}
      <SettingItem title={'Update Profile Picture'} onPress={() => {}} />
      <SettingItem title={'View Recent Orders'} onPress={() => {}} />
      <SettingItem title={'Logout'} onPress={logout} />
    </View>
  );
};

export default SettingsScreen;
