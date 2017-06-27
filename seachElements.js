   'use strick'

var request = require("request");

 var data = new Promise(function(resolve, reject){
 request({
  uri: "https://dppi-idsr-sl.ehealthafrica.org/api/dataSets/rq0LNr72Ndo/form.json?ou=rvphgxdAUQw",
  method: "GET",
  json: true,
	auth:{
    user: 'admin',
    pass: 'Password1',
    sendImmediately: true}
  },

   function(error,request,  response) {
   	if(!error){
 	var keys = []; var get=[];
 	var count=0; var dataArr = [];
 	var obj = response;
 	var groups = obj.groups;
    
	for ( var group of groups)
	{
		var limit = 2;
	  Object.keys(group.fields).forEach(function(field){
	  	var dataObject = {
	  		id: group.fields[field]. dataElement,
	  		keyId:group.fields[field].dataElement.substring(0, limit) + group.fields[field].categoryOptionCombo.substring(0,limit),
	  		label:group.fields[field].label
	  	}
	  	dataArr.push(dataObject)
	  	keys.push(dataObject.keyId)
	  	for(var i=0 ; i<keys.length; i++){
	    var key = keys[i]
	    if(keys.indexOf(key) != -1 && (get.indexOf(key) == -1)){
		count++;
		get.push(key);
	     }
	 	}
	  });
	}
	resolve(dataArr)
	}else
	{
		reject(error)
	}
});
})
module.exports.data = data;
