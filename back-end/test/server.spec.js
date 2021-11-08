var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = require('chai').expect;
var app = require('../server');

// Login-in & register testing
describe('Testing the POST Call', function(){
    it('API status code should return 200', function(done){
        chai.request(app)
              .post('/register-submit')
              .send({
                    "first_name": "Zunair",
                    "last_name": "Viqar",
                    "email":"zunairv@gmail.com",
                    "password":"saverieisawesome",
                    "repassword":"saverieisawesome"
              }).end((err,res)=>{
                 if(err) done(err);
                 expect(res).to.have.redirectTo("http://localhost:3000/signin");
                //  console.log(JSON.stringify(res,"",2));
                 done();
              })
      })
      it('API status code should return 400 for a missing value', function(done){
        chai.request(app)
              .post('/register-submit')
              .send({
                    "first_name": "Zunair",
                    "last_name": "Viqar",
                    "email":"zunairv@gmail.com",
                    "password":"saverieisawesome",
              }).end((err,res)=>{
                 if(err) done(err);
                 expect(res).to.have.redirectTo("http://localhost:3000/register");
                //  console.log(JSON.stringify(res,"",2));
                 done();
              })
      })

});

// User menu testing
describe('Testing user menu', () => {
    it('API status code returns 200', (done) => {
        chai.request(app)
            .get('/usermenu')
            .query({user: 'mockData'})
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it('API status code returns 404 for missing/incorrect data address', (done) => {
        chai.request(app)
            .get('/usermenu')
            .query({user: 'none'})
            .end((err, res) => {
                expect(res).to.have.status(404)
                done()
            })
    })
  });

// Saved distributors testing
describe('Testing saveddistributors', () => {
    it('API status code returns 200', (done) => {
        chai.request(app)
            .get('/saveddistributors')
            .query({user: 'mockData'})
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it('API status code returns 404 for missing/incorrect data address', (done) => {
        chai.request(app)
            .get('/saveddistributors')
            .query({user: 'none'})
            .end((err, res) => {
                expect(res).to.have.status(404)
                done()
            })
    })
})


// // menu page testing
describe('Testing menu page', () => {
    it('API status code returns 200', (done) => {
        chai.request(app)
            .get('/menu')
            .query({user: 'mockData'})
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it('API status code returns 404 for missing/incorrect data address', (done) => {
        chai.request(app)
            .get('/menu')
            .query({user: 'none'})
            .end((err, res) => {
                expect(res).to.have.status(404)
                done()
            })
    })
  });