import {StyleSheet} from 'react-native';
import {APP_BACKGROUND_COLOR} from '../../core/constants';

export const styles = StyleSheet.create({
  catalogueScreenContainer: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  catalogueScreenHeader: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catalogueLogoStyle: {
    height: 120,
    width: 120,
  },
  catalogueAvatarContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#f4ce9a',
  },
});
