const { DataProvider } = require('./provider')

const data = { 
        users: [ 
            {
                name: "John",
                address: {
                  city: "GoodTown",
                  country: "Amazing States of Unity"
                }
              },
              {
                name: "Marry",
                address: {
                  city: "JobTown",
                  country: "Employment Emirates"
                }
              } 
        ] 
     }

let dataProvider = new DataProvider( data )

dataProvider.on('data', (path, data)=>{ console.log( "FOUND", data, "on", path)  })  //////  метод .on( ... )  унаследовался от родительского класса  EventEmitter
dataProvider.on('error', (path, error)=>{ console.log( error, "on", path)  })

dataProvider.select("users.1.address.city")
dataProvider.select("user.0.name")