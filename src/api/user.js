import React from 'react';

const URL = 'https://ba000d76.ngrok.io/api';

const auth = async(email, pass) => {
  try {
    let response = await fetch(URL+'/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "email" : email,
          "password" : pass
        })
      });
      let res = await response.json();

      return res;

  } catch(error) {
    console.log(error);
  }
}

const getUser = async(token) => {
  try {
    let response = await fetch(URL+'/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+token
      }});
      let res = await response.json();

      return res;

  } catch(error) {
    console.log(error);
  }
}

export { getUser, auth };