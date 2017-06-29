'use strict'
var webdriverio = require('webdriverio');
var wildcard = require('wildcard');
var get = require('./seachElements.js');

var options = {
	
    desiredCapabilities: {
        browserName: 'firefox',
         logLevel: 'verbose'

    }
};  

var client = webdriverio.remote(options);

client
.init()
.url('https://dppi-idsr-sl.ehealthafrica.org/dhis-web-commons/security/login.action')
.setValue('#j_username', username)
.setValue('#j_password', password)        
.click('#submit')
.url('https://dppi-idsr-sl.ehealthafrica.org/dhis-web-maintenance-mobile/editSMSCommand.action?selectedCommandID=1') 
.then(function(){
     
    get.data.then(function(data){    
        var array = []; 
        for(let i=1 ; i<= data.length;i++){
        let key = data[i].label
       var elem = client.getText('label[for=codeId'+i+']')
       // var elem = client.getAttribute('label='+data[i].label+'','for')
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
