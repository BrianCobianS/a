import { exec } from 'child_process';
function del(Controlador){
   exec(`rm -r /home/ebossteam/temp/${Controlador.ip} `, (error, stdout, stderr) => {
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
export default del;