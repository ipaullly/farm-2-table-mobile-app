import React, { useContext, useState } from 'react'
import { View,Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../store/auth-context';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('')

  const { addProduct } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.vendorTitle}>
        <Text style={styles.vendorTag}>Add Products</Text>
        <Text style={styles.seeAll}> </Text>
      </View>
      <View>
        <View style={styles.textInputBlock}>
          <Text>Product Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.textInputBlock}>
          <Text>Unit(s)</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setUnit(text)}
            value={unit}
          />
        </View>
        <View style={styles.textInputBlock}>
          <Text>Price</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setPrice(text)}
            value={price}
          />
        </View>
        <View style={styles.textInputBlock}>
          <Text>Description</Text>
          <TextInput
            multiline={true}
            style={styles.multilineTextInput}
            onChangeText={text => setDescription(text)}
            value={description}
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addProduct({ name, description, unit, price })}
          >
            <Text>ADD PRODUCT TO STORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AddProduct

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  seeAll: {},
  vendorTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  vendorTag: {
    backgroundColor: '#ff9999',
    textTransform: "uppercase",
    padding: 5,
    color: '#fff',
    borderRadius: 4
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  multilineTextInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInputBlock: {
    marginBottom: 20,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#8065qf',
    padding: 10,
    width: '70%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },
})