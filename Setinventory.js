import { exec } from 'child_process';
function inventory(parametros){
    console.log(`python ${parametros.ip} ${parametros.usr} ${parametros.pass}`)
    exec(`mkdir /home/ebossteam/temp/${parametros.ip}`, (error, stdout, stderr) => {
        if (error) {
        console.error(`error: ${error.message}`);
        return;
        }
        if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
        }
        console.log(`stdout:  \n${stdout}`);
    });
    exec(`cp -r /home/ebossteam/ansibletest/ansible/* /home/ebossteam/temp/${parametros.ip}/`, (error, stdout, stderr) => {
        if (error) {
        console.error(`error: ${error.message}`);
        return;
        }
        if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
        }
        console.log(`stdout:  \n${stdout}`);
    });
    exec(`python3 /home/ebossteam/UnattendedInstallation/FULLSTACK/Back-End/public/Inventories/Inventory.py ${parametros.ip} ${parametros.usr} ${parametros.pass} ${parametros.opc}`, (error, stdout, stderr) => {
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
    console.log(`se eligio ${parametros.opc}`)
    exec(`echo ${parametros.opc} >> /home/ebossteam/temp/${parametros.ip}/playbooks/os4690/roles/installation/files/AUTO.BAT`, (error, stdout, stderr) => {
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
export default inventory;