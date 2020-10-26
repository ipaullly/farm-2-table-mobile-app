import React, { useContext, useEffect, useState } from 'react'
import { View,Text, StyleSheet, Image, TouchableOpacity, TextInput, Picker, ActivityIndicator } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../store/auth-context';
import AwesomeAlert from 'react-native-awesome-alerts';

const EditProduct = (props: any) => {
  const { name, description, price, quantity, category  } = props.route.params
  const [editName, setEditName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);
  const [editPrice, setEditPrice] = useState(price);
  const [editQuantity, setEditQuantity] = useState(quantity);
  const [editCategory, setEditCategory] = useState(category);

  const [nameRes, setNameRes] = useState<any>(null);
  const [priceRes, setPriceRes] = useState<any>(null);
  const [unitRes, setUnitRes] = useState<any>(null);
  const [categoryRes, setCategoryRes] = useState<any>(null);
  const [descriptionRes, setDescriptionRes] = useState<any>(null);

  const [feedback, setFeedback] = useState<any>(null);
  const [addProductLoading, setAddProductLoading] = useState(false)
  const [showUnitAlert, setShowUnitAlert] = useState<any>(null);
  const [showPriceAlert, setShowPriceAlert] = useState<any>(null);
  const [showCategoryAlert, setShowCategoryAlert] = useState<any>(null);
  const [showDescriptionAlert, setShowDescriptionAlert] = useState<any>(null);
  const [showFeedbackAlert, setShowFeedbackAlert] = useState<any>(null);
  const [showNameAlert, setShowNameAlert] = useState<any>(null);

  const { addProduct } = useContext(AuthContext);

  const handleEditProduct = async ( ) => {
    setAddProductLoading(true)
    // const res: any = await addProduct({ name, description, quantity, price, category });
    // console.log(res, 'addProducts');
    
    // if (typeof res === 'object' && res !== null) {
    //   if ('data' in res) {
    //     setFeedback(res.data.name)
    //   }
    //   if ('quantity' in res) {
    //     setUnitRes(res.quantity)
    //   }
    //   if ('price' in res) {
    //     setPriceRes(res.price)
    //   }
    //   if ('name' in res) {
    //     setNameRes(res.name)
    //   }
    //   if ('category' in res) {
    //     setCategoryRes(res.category)
    //   }
    //   if ('description' in res) {
    //     setDescriptionRes(res.description);
    //   }
    // }
    setAddProductLoading(false);
    // setShowEmailAlert(false)
    // setShowPhoneAlert(false)
    // setShowNameAlert(false)
    // setShowPasswordAlert(false)
  };
  
  const handleCancelProduct = () => {

  }

  useEffect(() => {
    if(nameRes) {
      setShowNameAlert(true)
    }
    if(unitRes) {
      setShowUnitAlert(true)
    }
    if(priceRes) {
      setShowPriceAlert(true)
    }
    if(categoryRes) {
      setShowCategoryAlert(true)
    }
    if(descriptionRes) {
      setShowDescriptionAlert(true)
    }
    if(feedback) {
      setShowFeedbackAlert(true)
    }
  }, [
    nameRes,
    unitRes,
    priceRes,
    categoryRes, 
    descriptionRes,
    feedback
  ]);

  return (
    <>
      <ScrollView style={styles.container}>
        {addProductLoading? (<View>
          <ActivityIndicator size="large" color="#33e026" />
        </View>) : null}
        <View style={styles.vendorTitle}>
          <Text style={styles.vendorTag}>Edit Product</Text>
          <Text style={styles.seeAll}> </Text>
        </View>
        <View>
          <View style={styles.textInputBlock}>
            <Text>Product Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setEditName(text)}
              value={editName}
            />
          </View>
          <View style={styles.textInputBlock}>
            <Text>Unit(s)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setEditQuantity(text)}
              value={editQuantity}
            />
          </View>
          <View style={styles.textInputBlock}>
            <Text>Price</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setEditPrice(text)}
              value={editPrice}
            />
          </View>
          <View style={styles.textInputBlock}>
            <Text>Category</Text>
            <Picker
              selectedValue={editCategory}
              style={{
                height: 50,
                borderRadius: 5,
                width: '60%',
                textAlign: 'center'
              }}
              onValueChange={(itemValue, itemIndex) => setEditCategory(itemValue)}
            >
              <Picker.Item label="select category..." value="" />
              <Picker.Item label="Vegetables" value="vegetables" />
              <Picker.Item label="Grains" value="grains" />
              <Picker.Item label="Fruits" value="fruits" />
              <Picker.Item label="Meat&Diary" value="meat & diary" />
            </Picker>
          </View>
          <View style={styles.textInputBlock}>
            <Text>Description</Text>
            <TextInput
              multiline={true}
              style={styles.multilineTextInput}
              onChangeText={text => setEditDescription(text)}
              value={editDescription}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleEditProduct()}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDelete}
              onPress={() => handleCancelProduct()}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <AwesomeAlert
        show={showNameAlert}
        showProgress={false}
        title="'Product Name' error"
        message={nameRes}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#ed9b1f"
        //  #58e026
        onConfirmPressed={() => {
          setShowNameAlert(false);
          // props.navigation.navigate("login")
        }}
      />
      <AwesomeAlert
        show={showUnitAlert}
        showProgress={false}
        title="'Unit(s)' error"
        message={unitRes}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#ed9b1f"
        //  #58e026
        onConfirmPressed={() => {
          setShowUnitAlert(false);
          // props.navigation.navigate("login")
        }}
      />
      <AwesomeAlert
        show={showPriceAlert}
        showProgress={false}
        title="'Price' error"
        message={priceRes}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#ed9b1f"
        //  #58e026
        onConfirmPressed={() => {
          setShowPriceAlert(false);
          // props.navigation.navigate("login")
        }}
      />
      <AwesomeAlert
        show={showCategoryAlert}
        showProgress={false}
        title="'Category' error"
        message={categoryRes}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#ed9b1f"
        //  #58e026
        onConfirmPressed={() => {
          setShowCategoryAlert(false);
          // props.navigation.navigate("login")
        }}
      />
      <AwesomeAlert
        show={showDescriptionAlert}
        showProgress={false}
        title="'Description' error"
        message={descriptionRes}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#ed9b1f"
        //  #58e026
        onConfirmPressed={() => {
          setShowDescriptionAlert(false);
          // props.navigation.navigate("login")
        }}
      />
      <AwesomeAlert
        show={showFeedbackAlert}
        showProgress={false}
        title="Success"
        message={feedback}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#58e026"
        //  #58e026
        onConfirmPressed={() => {
          setShowFeedbackAlert(false);
          props.navigation.navigate("VendorShop")
        }}
      />
    </>
  )
}

export default EditProduct

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
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
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center'
  },
  multilineTextInput: {
    height: 50,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center'
  },
  textInputBlock: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#fcba03',
    padding: 10,
    borderRadius: 6,
    width: '40%',
    textAlign: 'center',
  },
  buttonDelete: {
    backgroundColor: '#ff765e',
    padding: 10,
    borderRadius: 6,
    width: '40%',
    textAlign: 'center',
  },
})