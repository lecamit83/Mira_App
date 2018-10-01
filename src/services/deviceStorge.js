import { AsyncStorage } from "react-native";
import { JSONWEBTOKEN } from "../Constant";
import { postSignIn } from "../redux/actions/actionCreators";
import { connect } from "react-redux"
const deviceStorage = {
    async saveJWT( value ) {
        try {
            await AsyncStorage.setItem(JSONWEBTOKEN, JSON.stringify(value));    

        } catch (error) {
            console.log('AsyncStorage Error in Save: ' + error.message);
        }
    },
    async loginJWT (instance) {
        try {
            let account = await AsyncStorage.getItem(JSONWEBTOKEN);    
            if (account !== null) {
                let userInfor = JSON.parse(account);  
                instance.props.dispatch(postSignIn(userInfor));
            }
        } catch (error) {
            console.log('AsyncStorage Error in Load: ' + error.message);
        }
    },
    async deleteJWT () {
        try {
            await AsyncStorage.removeItem(JSONWEBTOKEN);
        } catch (error) {
            console.log('AsyncStorage Error in Delete: ' + error.message);
        }
    }
}
export default deviceStorage;