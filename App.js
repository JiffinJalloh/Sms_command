'use strict'
var webdriverio = require('webdriverio');
var wildcard = require('wildcard');
var get = require('./seachElements.js');
var env = require('./env.js');
 
var options = {
  
    desiredCapabilities: {
        browserName: 'firefox',
         logLevel: 'verbose'

    }
};  

var client = webdriverio.remote(options);
 
    client
    .init()
    .url(env.baseUrl)
    .setValue('#j_username',  env.accessTokenKeyName)
    .setValue('#j_password',  env.accessTokenKeyPass)        
    .click('#submit')
    .url(env.smsCommandUrl)
    .then(function(){
    get.data.then(function(data){    
        var array = []; 
        for(let i=1 ; i<= data.length;i++){
       var elem = client.getText('label[for=codeId'+i+']')
        .then(function(mdata){
             array.push(()=>i);
             client.setValue('#codeValue'+i, data[i].keyId)  

          });}

        elem.then(function(value){
           var arr = array.map(x=>x())
            console.log(arr)
        
        })
    }) 

    })
