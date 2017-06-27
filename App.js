'use strict'
var webdriverio = require('webdriverio');
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
.setValue('#j_username', 'admin')
.setValue('#j_password', 'Password1')        
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






//      var webdriverio = require('webdriverio');
// var get = require('./seachElements.js');

// var options = {
    
//     desiredCapabilities: {
//         browserName: 'firefox',
//          logLevel: 'verbose'

//     }
// };  

// var client = webdriverio.remote(options);

// client
// .init()
// .url('https://dppi-idsr-sl.ehealthafrica.org/dhis-web-commons/security/login.action')
// .setValue('#j_username', 'admin')
// .setValue('#j_password', 'Password1')        
// .click('#submit')
// .url('https://dppi-idsr-sl.ehealthafrica.org/dhis-web-maintenance-mobile/editSMSCommand.action?selectedCommandID=1') 
// .then(function(){

//     get.data.then(function(data){    
//           for(let i=0 ; i<=data.length;i++){
//          var key = data[i].label
//          var im = i;
//          var id = data[i].keyId
//          var a = [];
//         var elem = client.getText('label[for=codeId'+i+']')
//         .then(function(value){ 
//         if(value.indexOf(key) !== -1 && data.indexOf(key) !== -1){
//          a.push(i)
//          for(let x = 0 ;x< a.length; x++)

//          return a
//         }
//         })
          
//           //   a = value.a

//          // console.log(a.length)
//          // client.setValue('#codeValue'+a[x],id)
//         // }) 
//         // });
//      }  
//      elem.then(function(values){
//         console.log(values);
//      })
// })
// })