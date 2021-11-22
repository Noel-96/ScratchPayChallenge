// const Chai = require('chai');
// const ChaiHttp = require('chai-http');
// const server = require('../server');
// const { getClinic,  searchClinic} = require('../clinic/clinic-service');


// Chai.should();
// Chai.use(ChaiHttp);


// const mockData = [
//         {   
//            clinicName: "Good Health Home",
//             stateCode: "FL",
//             opening: {
//                 from: "15:00",
//                 to: "20:00"
//             }
//         },
//         {
//             clinicName: "National Veterinary Clinic",
//             stateCode: "CA",
//             opening: {
//                 from: "15:00",
//                 to: "22:30"
//             }
//         },
//         {
//             name: "Scratchpay Test Pet Medical Center",
//             stateName: "California",
//             availability: {
//                 from: "00:00",
//                 to: "24:00"
//             }
//         },
//         {
//             name: "Scratchpay Official practice",
//             stateName: "Tennessee",
//             availability: {
//                 from: "00:00",
//                 to: "24:00"
//             }
//         }
//   ]
  
//   describe('Clinics API', () => {
//     /**
//      * Test GET Clinic Route Without Query Params
//      */
//     describe("GET /api/v1/clinics", () => {
//         it("It should GET all the clinics without query params", (done) => {
//             Chai.request(Server)
//                 .get("/api/clinics")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('object');
//                     response.body.should.have.property('message').be.eql('Successful');
//                     // response.body.should.have.property('responseData').be.a('object');
//                     // response.body.responseData.should.have.property('items').be.a('array');
//                     // response.body.responseData.should.have.property('currentPage').eql(1);
//                     // response.body.responseData.should.have.property('pageCount');
//                     // response.body.responseData.should.have.property('pageSize').eql(10);
//                     //response.body.responseData.should.have.property('count');
//                 done();
//                 })
//         })
//     })
// })