import axios from 'axios';
import { API_BASE_URL } from '../../config/parsed';

const methods = {

    checkAPIKey(){
        const headers = {
            "x-api-key": this.state.apiKey
        }

        axios.get(API_BASE_URL + "/system/status", {headers})
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                this.setters.setIsAuthorized(false);
            })

    }

}

export default methods;
