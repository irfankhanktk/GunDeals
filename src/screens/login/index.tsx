import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <AppHeader title="Sign-in" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput keyboardType={'email-address'} label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
        <PrimaryInput
          secureTextEntry
          placeholder={'********'}
          label={'Password'}
          onChangeText={(str) => setValues({ ...values, password: str })}
          value={values.password} />
        <PrimaryButton disabled={!values?.email || !values?.password} title={'Login'} onPress={() => { }} containerStyle={styles.button} />
        <Medium style={styles.accountText} onPress={() => props?.navigation?.navigate('Signup')} label={'Register an account'} />
      </KeyboardAvoidScrollview>
    </View>

  );
};
export default Login;
