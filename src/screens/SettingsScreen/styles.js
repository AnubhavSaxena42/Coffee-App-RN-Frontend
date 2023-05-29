import {StyleSheet} from 'react-native';
import {APP_BACKGROUND_COLOR, FONTS} from '../../core/constants';

export const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  settingItemContainer: {
    width: '100%',
    borderBottomColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    alignItems: 'center',
  },
  settingItemTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 12,
    color: '#f4ce9a',
  },
  settingsScreenAvatarContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f4ce9a',
  },
  settingsScreenProfileSection: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
