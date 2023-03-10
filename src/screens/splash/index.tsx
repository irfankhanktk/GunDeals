import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
import { useAppDispatch, useAppSelector } from './../../hooks/use-store';
import Regular from '../../typography/regular-text';
import { SERVICES } from '../../utils';
import { STORAGEKEYS } from '../../config/constants';
import { bg } from '../../assets/images';
import { SplashIcon } from '../../assets/icons';

const Splash = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const store = useAppSelector(s => s);

  React.useEffect(() => {

    (async () => {
      let screen: 'Login' | 'Home' = 'Login';
      SERVICES.getItem(STORAGEKEYS.userId).then((userId: any) => {

        if (userId) {
          screen = 'Home';
          // dispatch(getUserData(userId));
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);
      })
    })()
  }, []);


  return (
    <View style={{ ...styles.container }}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar translucent backgroundColor='transparent' />
        <SplashIcon />
      </ImageBackground>
    </View>
  );
};
export default Splash;
