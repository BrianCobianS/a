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
#pruebas  python .\email.py 12.12.12 master m1 1 12.ver12 accept 12712/12 Morty brian.cobian@toshibagcs.com
print(IP,USR,PASS,OPC,LEV,ASM,FECHA,VERSION,EMAIL)
def createmail(message,path,boleano):
    # contenido = open("C:/Users/brian.cobian/Desktop/IMDesatendida/Fullstackpage/mails/email.txt").read().splitlines()
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
    contenido.insert(2,"    path: '"+path+"',")
    contenido.insert(2,"    boleano: '"+str(boleano)+"',")
    f = open('/home/ebossteam/UnattendedInstallation/FULLSTACK/mails/mail.js', "w")
    # f = open('C:/Users/brian.cobian/Desktop/IMDesatendida/Fullstackpage/mails/mail.js', "w")
    
    f.writelines("\n".join(contenido))
    f.close

def changeBat(fileDirectory):
    with open(fileDirectory,'r') as archivo:
        ban = 0
        i=0
        Exito=0
        reserva=[]
        Error='The installation failed, the error occurred at \t\t\t'
        Succes= 'The installation was successful, the current controller version is\t\t\t'
        
        for linea in archivo:
            linea=linea.rstrip('\n')
            reserva.append(linea)
            if 'fatal:' in  linea:
                 for linea in reserva[i-3:i+1]:
                    Error=Error+linea
                 Exito=0
            elif 'SUCCES' in linea:
                 Exito=1
            if 'Print RML' in linea or ban==1:
                Succes=Succes+linea
                ban=1
            i += 1
    if Exito ==1:
        print(Succes)
        createmail(Succes,fileDirectory,Exito)
    elif Exito==0:
        print(Error)
        createmail(Error,fileDirectory,Exito)
    else:
        print('No se sabe que sucedio revisar log')
        createmail('No se sabe que sucedio revisar log',fileDirectory,Nose=-1)
# changeBat(str(x))

x= open("/home/ebossteam/temp/"+IP+"/date.txt",'r')
for x in x:
    date=x
print(date)
changeBat("/var/log/logscontroladores/"+IP+"-"+date+".txt")

# changeBat("C:/Users/brian.cobian/Desktop/IMDesatendida/Fullstackpage/mails/log.txt")




