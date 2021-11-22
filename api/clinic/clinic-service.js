const axios = require('axios');
const { checkMatchedName, checkMatchedState, checkIfOpened, searchOpeningTime, searchClosingTime} = require("./clinic-middleware")

async function getClinic() {
    const vetClinicRequest = axios.get('https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json')
    const  dentalClinicRequest = axios.get('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json')
    let clinics = await axios.all([dentalClinicRequest, vetClinicRequest])
    let clinicData = [...clinics[0].data, ...clinics[1].data]
    return clinicData
}



async function searchClinic(query){ 
    try{
        const clinics = await getClinic()

        if (!query) {
            return clinics
        }
        const filteredClinics = clinics.filter(clinic => {
            let BooleanCheck = true;
            for (const key of Object.keys(query)){

                switch (key) {
                    case 'clinicName':
                        BooleanCheck = BooleanCheck && checkMatchedName(clinic, query[key], ['name', 'clinicName'])
                    break;
                    case 'state':
                        BooleanCheck = BooleanCheck &&  checkMatchedState(clinic, query[key], ['stateName', 'stateCode'])
                    break;
                    case 'availability':
                        BooleanCheck = BooleanCheck &&  checkIfOpened(clinic, query[key], ['availability', 'opening'])
                    break;
                   default:
                        BooleanCheck = false
                    break;
                }
            };
            return BooleanCheck
          })
        return filteredClinics

    } catch(e) {
        throw new Error(e.message)
    }
}
  


module.exports = {
    getClinic,
    searchClinic
  }
  