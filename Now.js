import { exec } from 'child_process';
function now(Controlador){
    exec(`sh /home/ebossteam/UnattendedInstallation/FULLSTACK/Back-End/public/Inventories/controllers/${Controlador.ip}.sh`, (error, stdout, stderr) => {
        if (error) {
        console.error(`error: ${error.message}`);
        return;
        }
        if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
        }
        console.log(`stdout: \n${stdout}`);
   });
   exec(`python3  /home/ebossteam/UnattendedInstallation/FULLSTACK/Back-End/public/Inventories/now.py ${Controlador.ip} ${Controlador.usr} ${Controlador.pass} ${Controlador.opc} ${Controlador.complemento} ${Controlador.nivel} ${Controlador.ASM}`, (error, stdout, stderr) => {
      if (error) {
      console.error(`error: ${error.message}`);
      return;
      }
      if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
      }
      console.log(`stdout: \n${stdout}`);
   });

}
export default now;