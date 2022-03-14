import React, { useEffect, useState,useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './logo';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Modal,
  Switch,
  SafeAreaView,
  ToastAndroid,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Button
} from "react-native";
import { Title, useTheme, HelperText, Caption, RadioButton } from "react-native-paper";
import { useLogo } from "./hooks/useLogo";
import { TextInputDefault, ButtonDefault } from "./components";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Card} from 'react-native-shadow-cards';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import api from './server/api';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';
import UserInput from "./UserInput";
import Form from './Form';
import passwordImg from '../assets/images/password.png';
// import { Button } from "react-native-elements/dist/buttons/Button";

const LoginSchema = Yup.object().shape({
  phone: Yup.number().required('Mobile Number is required.')
});

export function Login() {
  const navigation = useNavigation();
  const { logShareLogo } = useLogo();
  const { bg, back1, back2 } = useLogo();
  const { truck } = useLogo();
  const [modalVisible, setModalVisible] = useState(null);
  const { colors } = useTheme();
  const [errors, setErros] = useState(false);
  const [roleserrors, setRolesrros] = useState(false);
  const [checked, setChecked] = React.useState('DRIVER');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmresult, setConfirmresult] = useState('');
  const [userid, setUserid] = useState('');
  const [verificationcode, setVerificationcode] = useState('');
  const phoneInput = useRef(null);
  const loginwithphone = async() => {
      // if(checked == 'DRIVER' || checked == 'CLIENT'){
        
      //     const response = await api().post(`/api/login`, JSON.stringify(data));
      //     if(response.status == 200){
      //       setErros(false);
      //       await AsyncStorage.setItem('token', response.data.result.token);
      //       await AsyncStorage.setItem('userName', response.data.result.user.name);
      //       await AsyncStorage.setItem('userId', JSON.stringify(response.data.result.user.id));
      //       await AsyncStorage.setItem('userType', checked);
      //       ToastAndroid.show(`${response.data.result.user.name} logged in successfully as ${checked}`, ToastAndroid.LONG);
      //       navigation.navigate("Onboarding");
      //     }else{
      //       setErros(true);
      //       ToastAndroid.show(`Invaliad Credential`, ToastAndroid.LONG);
      //     }
      //   }
        
        // console.log('phone',phoneNumber);
        // const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        // setConfirmresult(confirmation);
    }

  useEffect(() => {
    clearstorage();
    setErros(false);
    setRolesrros(false);
  }, []);

  const clearstorage = async() => {
    await AsyncStorage.clear();
  }
  const validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(phoneNumber)
  }
  const confirmCode = async() => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}}>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            backgroundColor: colors.white,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <SafeAreaView
                    style={{
                      backgroundColor: '#021c36',
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{flex: 0.8,width: '100%',justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 70 }}>
                    <Card 
                      style={{flex:1, width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}
                      elevation={10}
                      cornerRadius={15}
                      >
                        <View
                            style={{
                              flex: 0.2,
                              margin: 'auto',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'transparent'
                            }}
                          >
                          <Logo />
                        </View>
                          <View
                            style={{
                              flex: 0.6,
                              display: "flex",
                              justifyContent: "flex-start",
                              backgroundColor: 'transparent'
                            }}
                          >
                            <View
                              style={{
                                paddingHorizontal: 24,
                                flex: 0.25,
                                display: "flex",
                                justifyContent: "space-around",
                                backgroundColor: 'transparent'
                              }}
                            >
                              <Form />
                            </View>
                            <Text style={{color: '#4a6073', alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}>Forget Password?</Text>
                            <View style={{width: '100%',justifyContent: 'center',alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                              <TouchableOpacity>
                                <Text style = {{color: '#4a6073', fontSize: 20, fontWeight: 'bold', backgroundColor: '#dcdac5', width: 250, padding: 10, textAlign: 'center', borderRadius: 50}}>
                                  LOGIN
                                </Text>
                              </TouchableOpacity>
                            </View>
                            <Text  style={{color: '#4a6073', alignSelf: 'center', fontSize: 18}}>
                              Not a Member?
                              <Text style={{color: '#4a6073', alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}> Join Now!</Text>
                            </Text>
                          </View>
                      </Card>
                    </View>
                </SafeAreaView>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1
  },
  rect_imageStyle: {
    height: '100%',
  },
  rect_imageStyle_truck: {
    opacity: 1
  },
  inputsection: {
    height: 84,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconstyle: {
      padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'transparent',
    color: '#424242',
    fontSize: 24,
  },
  phoneContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#424242',
    fontSize: 24,
  },
  textInput: {
    paddingVertical: 0,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#023d6a',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});