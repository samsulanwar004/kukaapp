import React from 'react';
import { AsyncStorage } from 'react-native';

const storageSet = async(key, value) => {
    try {
      var value = await AsyncStorage.setItem(key, JSON.stringify(value));
      return value;
    } catch(error) {
      console.log(error);
    }
}

const storageGet = async(key) => {
  try {
       const retrieved = await AsyncStorage.getItem(key);
       const result = JSON.parse(retrieved);
       console.log(result);
       return result;
    } catch(error) {
      console.log(error);
    }
}

const storageClear = async() => {
  try {
    await AsyncStorage.clear();
  } catch {
    console.log(error);
  }
}

export { storageSet, storageGet, storageClear};