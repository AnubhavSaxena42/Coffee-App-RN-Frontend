import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SettingItem from './SettingItem';

const SettingsScreen = () => {
  return (
    <View style={styles.settingsScreenContainer}>
      {/* Profile Picture Section */}
      <View style={styles.settingsScreenProfileSection}>
        <View style={styles.settingsScreenAvatarContainer}></View>
      </View>
      {/* Settings */}
      <SettingItem title={'Update Profile Picture'} onPress={() => {}} />
      <SettingItem title={'View Recent Orders'} onPress={() => {}} />
      <SettingItem title={'Logout'} onPress={() => {}} />
    </View>
  );
};

export default SettingsScreen;
