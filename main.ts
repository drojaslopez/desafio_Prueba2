import app from "./src/config/app"
import { sequelize } from "./src/config/sequelize";
import "dotenv/config"

const port = process.env.PORT ?? 3000;

const main = ()=>{ 
  cargarDB();
  cargarExpress();  
};

 const cargarDB = ()=>{
  try {
    sequelize.authenticate();
    sequelize.sync();
    //sequelize.sync({ force: true });
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

const cargarExpress = ()=>{
  try {
     app.listen(port, () => {
      console.log(`Server running on port : ${port}`);    
    }); 
  } catch (error) {
    console.error('Error al iniciar servicio :', error);  
  }
}


main();