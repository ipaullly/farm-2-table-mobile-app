import React from 'react'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

interface IAddProductBody {
  name: string;
  description: string;
  category: string;
  quantity: string;
  price: string;
}



export default class ProductsAPI {
  static addProduct = async ( body: IAddProductBody) => {
    let userId, userToken;
    try {
      userToken = await AsyncStorage.getItem('userToken');
      userId = await AsyncStorage.getItem('id');
    } catch (e) {
      // restoration of token failed throw error
    };

    const requestBody = {
      ...body,
      availability: true,
      canceled_at: "2020-10-02T11:43:36.901Z",
      farmer: userId,
    }
    try {
      const response = await Axios.post(
        'https://farm-2-table.herokuapp.com/api/produce/create/',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
        );
      if (response){
        return response
      }
      console.log(response, 'API');
      
    } catch (error) {
      console.log(error.response.data, 'add Product api error');
      return error.response.data;    
    }
  } 
}