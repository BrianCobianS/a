import sys
IP=(sys.argv[1])
USR=(sys.argv[2])
PASS=(sys.argv[3])
OPC=(sys.argv[4])
LEV=(sys.argv[5])
ASM=(sys.argv[6])
FECHA=(sys.argv[7])
VERSION=(sys.argv[8])
EMAIL=(sys.argv[9])
print(IP,USR,PASS,OPC,LEV,ASM,FECHA,VERSION,EMAIL)
def createmail(message):
    contenido = open("/home/ebossteam/UnattendedInstallation/FULLSTACK/mails/email.txt").read().splitlines()
    contenido.insert(2,"    ip: '"+IP+"',")
    contenido.insert(2,"    usr: '"+USR+"',")
    contenido.insert(2,"    pass: '"+PASS+"',")
    contenido.insert(2,"    email: '"+EMAIL+"',")
    contenido.insert(2,"    nivel: '"+LEV+"',")
    contenido.insert(2,"    version: '"+VERSION+"',")
    contenido.insert(2,"    paquetes: 'ACE,EPS',")
    contenido.insert(2,"    ASM: '"+ASM+"',")
    contenido.insert(2,"    fecha: '"+FECHA+"',")
    contenido.insert(2,"    opc: '"+OPC+"',")
    contenido.insert(2,"    message: '"+message+"',")
    f = open('/home/ebossteam/UnattendedInstallation/FULLSTACK/mails/mail.js', "w")
    #pruebas  python .\email.py 12.12.12 master m1 1 brian.cobian@alumnos.udg.mx 12.ver12 accept Morty ACE3DYEPS 12712/12
    f.writelines("\n".join(contenido))
    f.close

def changeBat(fileDirectory):
    with open(fileDirectory,'r') as archivo:
        ban = 0
        i=0
        Exito=0
        Fallo =0
        reserva=[]
        Error='The installation failed, the error occurred at:\n '
        Succes= 'The installation was successful, the current controller version is:\n'
        for linea in archivo:
            linea=linea.rstrip('\n')
            reserva.append(linea)
            if 'fatal:' in  linea:
                 for linea in reserva[i-3:i+1]:
                    Error=Error+linea
                 Fallo=1
            elif 'SUCCES' in linea:
                 Exito=1
            if 'Print RML' in linea or ban==1:
                Succes=Succes+linea
                ban=1
            i += 1
    if Exito ==1:
        print(Succes)
        createmail(Succes)
    elif Fallo==1:
        print(Error)
        createmail(Error)
    else:
        print('No se sabe que sucedio revisar log')
        createmail('No se sabe que sucedio revisar log')
    



