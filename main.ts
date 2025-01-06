import app from "./app"

const port = process.env.PORT ?? 5000;



const main = async () =>{
  try {
    //const ResponseDB  = await pool.query("SELECT NOW()");    
    //console.log(`DB conection running`);  
    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);    
    });    
  } catch (error) {
    console.error('Error al conectar:', error);  
  }
};

main();