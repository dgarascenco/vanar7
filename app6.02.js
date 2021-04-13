let data = {  
    users:[
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
      }, 
    ]    
  }
////////////////
function getValue( path ) {

  let segments = path.split('.'); 
  let level = data;

  segments.forEach(element => {
    if (level !== undefined && level !== null){
      level = level[element];
    } else {
      level = undefined;
    }
  });

  return level;
}
////////////////
function getValue_Recursive( path, data ) {

    let segments = path.split('.'); 
    let level = data;   
    let str = ( path.split(segments[0])[1] ).substring(1);

    if ( segments.length == 1){
      console.log (level[segments[0]]);
      return level[ segments[0] ];
    }
    else {
       getValue_Recursive( str, level[segments[0]] );
    }
  }

  console.log( 'Result: '  +   getValue( "users.1.address.city", data ) );
   console.log( 'Result, using recursive: '  +   getValue_Recursive( "users.1.address.city", data ) );