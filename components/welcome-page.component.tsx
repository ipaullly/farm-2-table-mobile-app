import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

const WelcomePage = (props: any) => {

  return (
		<View style={styles.container}>
			<Text
				style={styles.header}
			>Welcome</Text>
			<Text
				style={styles.instruction}
			>Please login or Sign Up to continue using our App</Text>
			<View style={styles.imgBack}>
				<View
					style={styles.img}
				/>
			</View>
			<Button
				title='Create Account'
				onPress={() => props.navigation.navigate('register')}
			/>
			<View style={styles.loginText}>
				<Text>Already have an account?</Text>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('login')}
				>
					<Text
						style={styles.loginLink}
					>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default WelcomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginTop: 30,
		paddingLeft: 25,
		paddingRight: 25
	},
	header: {
		fontSize: 30,
		paddingBottom: 10,
	},
	instruction: {
		fontSize: 12,
		marginTop: -80,
		width: '80%',
		letterSpacing: 2
	},
	img: {
		width: '70%',
		textAlign: 'center',
		height: '30vh',
		backgroundColor: 'pink'
	},
	imgBack: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 10
	},
	loginText: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: -50,
		letterSpacing: 2
	},
	loginLink: {
		textDecorationLine: 'underline',
		paddingLeft: 10
	}
})