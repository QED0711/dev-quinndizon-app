
const setters = {

    setAndVerifyApiKey(apiKey){
        this.setState(() => [{apiKey}, [this.paths.apiKey]], (state) => {
            this.methods.checkAPIKey()
        })
    }

}

export default setters;
