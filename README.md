# ScratchPayChallenge

Create one RESTful API endpoint to allow search in multiple clinic providers and display results from all the available clinics by any of the following:

Clinic Name
State [ex: "CA" or "California"]
Availability [ex: from:09:00, to:20:00]

This is including search by multiple criteria in the same time like search by state and availability together.
Note: We need only one endpoint to search for all clinics.

## Dependencies

- [NodeJS](https://reactjs.org) - Main javascript framework
- [Express](https://expressjs.com/) - Web Framework for NodeJS
- [Mocha](https://mochajs.org) - JavaScript Unit Testing Framework 

## Installing Node Modules

To step up this project, install all the dependencies using

## Development

Open your favorite Terminal and run these commands.

To start the React server use:

```sh
npm start
```

To start the Mocha test:

```sh
npm run test -- clinic-test
```

Server and Test library set to run by default in http://localhost:5000/

## API Documentation 

## Routes
GET(/api/clinic) - returns all availble clinics 

GET(/api/searchClinics) - returns all filtered clinics based on request body, returns all clinics if body is empty 
Request Body 
- clinicName [ex: "Good Health Home" or "Health"]
- state [ex: "CA" or "California"]
- availability [ex: 09:00, time clinic is opened]




