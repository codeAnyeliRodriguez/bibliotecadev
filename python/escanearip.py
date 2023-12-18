import nmap

scanner = nmap.PortScanner()

ip = input('inserte una direccion ip')
print('Esta es la IP que escribiste:',ip)
scanner.scan(ip)

print(scanner.all_hosts())

#https://www.youtube.com/shorts/-tMw2yr25AA