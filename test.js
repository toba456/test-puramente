const { default: axios } = require("axios");
const dayjs = require("dayjs");

    estadistica = async ()=>{
      let today = dayjs("2022-01-25T22:34:14-03:00").format("DD/MMMM/YYYY");
          sesiones;
          racha=[];
        try {
         sesiones= await axios.get("https://gist.githubusercontent.com/nahuelb/0af04ce9aadab10afe2f37ba566070c2/raw/47effc9a678e9616369b56eeeb4ee54f22763b21/sessions.json");
          
        } catch (errors) {
            console.error(errors);
        }
        sesiones=sesiones.data.reverse()
        sesiones.map(session=> session.dateSession = dayjs(session.dateSession));
      for(let i=0; i<sesiones.length; i++){
          let aux;
          if(sesiones[i].dateSession.format("DD/MMMM/YYYY") == today && sesiones[i].isSessionCompleted && racha.length == 0){                              
            racha.push(sesiones[i]);
            today= sesiones[i].dateSession.format("DD/MMMM/YYYY");
          }
          else if(sesiones[i].dateSession.add(1,'day').format("DD/MMMM/YYYY") != today && sesiones[i].dateSession.format("DD/MMMM/YYYY") == today ){
            i=sesiones.reverse().length;

          }
          else if( sesiones[i].dateSession.isBefore(today,'day') && sesiones[i].isSessionCompleted){
           
            racha.push(sesiones[i])
            today= sesiones[i].dateSession.format("DD/MMMM/YYYY");
          }
          else if(sesiones[i].dateSession.format("DD/MMMM/YYYY") == today && sesiones[i].isSessionCompleted){
            today= sesiones[i].dateSession.format("DD/MMMM/YYYY");

          }
          else if(sesiones[i].dateSession.format("DD/MMMM/YYYY") == today && !sesiones[i].isSessionCompleted){
            today= sesiones[i].dateSession.format("DD/MMMM/YYYY");
          }
          else if(sesiones[i].dateSession.isBefore(today,'day') && !sesiones[i].isSessionCompleted){
              aux=1;
              today= sesiones[i].dateSession.format("DD/MMMM/YYYY");
          }
          else if(aux == 1 && sesiones[i].dateSession.format("DD/MMMM/YYYY") == today && sesiones[i].isSessionCompleted){
              aux=0;
              today= sesiones[i].dateSession.format("DD/MMMM/YYYY");

          }
          else {
             i=sesiones.reverse().length;
          }
        }

           console.log(racha.length)
           
      
}
     
     
 
estadistica()