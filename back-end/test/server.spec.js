var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = require('chai').expect;
var app = require('../server');

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





