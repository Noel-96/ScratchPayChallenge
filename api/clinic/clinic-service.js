const axios = require('axios');

async function getClinic() {
    const vetClinicRequest = axios.get('https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json')
    const  dentalClinicRequest = axios.get('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json')
    let clinics = await axios.all([dentalClinicRequest, vetClinicRequest]);
    let clinicData = [...clinics[0].data, ...clinics[1].data];
    return clinicData;
}


async function searchClinic(query){
    try {
        const AllClinicsData = await getClinic()
        const AllClinics = []
        AllClinicsData.map(c => AllClinics.push(...c));

        if (!query) {
            return AllClinics;
        }
        const queryFields = Object.keys(query);

        const filteredClinics = AllClinics.filter((clinic) => {
            for (const key of Object.keys(query)){

                switch (key) {
                    case 'name':
                        
                        isValid = isValid && getIsValidString(clinic, ['name', 'clinicName'], query[key]);
                    break;
                    case 'state':
                        isValid = isValid && getIsValidString(clinic, ['stateName', 'stateCode'], query[key]);
                    break;
                    case 'availabilty':
                        isValid = isValid && getIsValidTime(clinic, ['availability', 'opening'], query[key]);
                    break;
                    default:
                        isValid = isValid && clinic[key] === query[key];
                    break;
                }

            }

          });


    } catch {

    }
}
  

module.exports = {
    getClinic
  };
  