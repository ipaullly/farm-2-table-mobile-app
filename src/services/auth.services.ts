import React from 'react'
import Axios from 'axios'

interface ILoginBody {
  phone: string;
  password: string;
}

interface ISignUpBody {
  phone: string;
  email: string;
  password: string;
  name: string
}

export default class AuthAPI {
  static login = async ( body: ILoginBody) => {
    try {
      const response = await Axios.post('https://farm-2-table.herokuapp.com/api/user/token/', body);
      if ('data' in response){
        return response.data.access
      }
      console.log(response);
      
    } catch (error) {
      console.log(error.response.data, 'login api error');    
    }
  } 
  static register = async (body: ISignUpBody) => {
    try {
      const response: any = await Axios.post('https://farm-2-table.herokuapp.com/api/user/register/', body);
      console.log(response, 'success');
      
      if ('id' in response.data){
        return response
      } 
    } catch (error) {
      return error.response.data    
    }
  }
}