const EventEmitter = require('events')
const calendar = new EventEmitter()

calendar.on('Sunday', ()=>{
      console.log("Yey!! Sunday arrived!!!")
   })
calendar.on('Friday', ()=>{
      console.log("Yey!! Weekend  arrived!!!")
   })

calendar.on('', ()=>{
      console.log("Yey!!!!!")
   })   
   
calendar.emit("Friday")

function callBack(){
    calendar.emit("Sunday")
} 

setTimeout(calendar.emit, 3000, "Sunday")
