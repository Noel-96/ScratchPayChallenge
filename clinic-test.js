const request = require('supertest'),
  Chai = require('chai'),
  app = require('./api/server'),
  expect = Chai.expect,
  assert = Chai.assert,

  ChaiHttp = require('chai-http');
  

Chai.should();

Chai.use(ChaiHttp);

describe('Array', function () {

  it("It should GET all the clinics data", (done) => {
    Chai.request(app)
      .get("/api/clinics")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(15);
        done();
      })
  })

  it("It should display 404 for wrong route", (done) => {
    Chai.request(app)
      .get("/api/clinic")
      .end((err, response) => {
        response.should.have.status(404);
        response.body.should.be.a('object');
        done();
      })
  })

  it("It should all the data if empty body request", (done) => {
    let mockbody = { }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(15);
        done();
      })
  })

  it("It should return an empty array if empty body request", (done) => {
    let mockbody = {
      clinicName: "",
      state: "",
      availability: ""
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(0);
        done();
      })
  })

  it("It should return an empty array if a match is not found", (done) => {
    let mockbody = {
      clinicName: "Vet",
      state: "ca",
      availability: "10:00"
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(0);
        done();
      })
  })
   
  it("It should return an empty array for invalid state", (done) => {
    let mockbody = {
      state: "lagos",
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(0);
        done();
      })
  })


  it("It should return match for  all of the request body", (done) => {
    let mockbody = {
      clinicName: "Vet",
      state: "ca",
      availability: "15:00"
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(1);
        done();
      })
  })

  it("It should return match for the given name & state query options", (done) => {
    let mockbody = {
      clinicName: "Vet",
      state: "ca",
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(1);
        done();
      })
  })

  it("It should return match for the given state & availability query options", (done) => {
    let mockbody = {
      state: "ca",
      availability: "23:59"
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(2);
        done();
      })
  })

  it("It should return match for the given name & availability query options", (done) => {
    let mockbody = {
      clinicName: "pet",
      availability: "23:59"
    }
    Chai.request(app)
      .get("/api/searchClinics")
      .send(mockbody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.eql(2);
        done();
      })
  })
});

