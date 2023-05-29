import {saveItemToStorage} from '../services/storage-service';
import {STORAGE_KEYS} from './enums';
import {authTokenVar, refreshTokenVar, userVar} from './reactiveVariables';

export const saveUserInfoToStorageAndState = async ({
  token,
  refreshToken,
  user,
}) => {
  await saveItemToStorage(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  await saveItemToStorage(STORAGE_KEYS.TOKEN, token);
  await saveItemToStorage(
    STORAGE_KEYS.USER,
    user ? JSON.stringify(user) : JSON.stringify(userVar()),
  );
  authTokenVar(token);
  refreshTokenVar(refreshToken);
  userVar(user ?? userVar());
};
