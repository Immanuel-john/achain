const JSON = require('circular-json');


var ownershipService = {
    create: function(req){
        //
        return new Promise((resolve,reject)=> {
            var res = JSON.stringify(req)
            console.log("res",req)
            resolve(res);
        })
    },

    read: function(req){
        //
        return new Promise((resolve,reject)=> {
            resolve(req);
        })
    }
}

module.exports = ownershipService