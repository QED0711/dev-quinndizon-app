import axios from 'axios';
import { API_BASE_URL } from '../../config/parsed';

const methods = {

    checkAPIKey(){
        const headers = {
            "x-api-key": this.state.apiKey
        }

        axios.get(API_BASE_URL + "/authorized", {headers})
            .then(response => {
                if(response.status === 200) {
                    this.setters.setIsAuthorized(true)
                }
            })
            .catch(err => {
                this.setters.setIsAuthorized(false);
            })

    }

}

export default methods;
