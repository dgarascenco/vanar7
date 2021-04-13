const EventEmitter = require('events')
module.exports.DataProvider = class DataProvider extends EventEmitter {
  constructor ( dataSource ) {
    super()                               /////  вызывает родительский конструктор, т.е. конструктор класса EventEmitter
    this.dataSource = dataSource;
  }  
  
  select( path ) {
    let result = this.getValue(path);

    if ( result === undefined) {
      console.log(result, "on", path);
    }
    else 
      console.log("FOUND", result, "on", path);
    // 1. getValue() from the path ( path is somth like "this.is.0.the.path.to.the.value" )
    // 2. if undefined - emit -> 'error' with a message and the path
    // 3. if data exist -> emit -> 'data' with data and path
    //...
    
    
  }

  getValue( path  ) {

    let segments = path.split('.'); 
    let level = this.dataSource;
    let last_element = undefined;
    segments.forEach(element => {
     
      if ( level === undefined || level === null){  
        level = undefined;
        throw "ERROR: Key " + last_element + " not found!"      
      } else {        
        level = level[element];
      }
      last_element = element;
    });

    return level;
  }
  
}

