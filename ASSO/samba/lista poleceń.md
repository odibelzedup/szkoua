1. apt update
2. apt upgrade
3. apt install ifupdown
4. nano /etc/network/interfaces
   --
# W pliku tym pod instniejącym tekstem należy wpisać ten:

#enp0s3
auto enp0s3
iface enp0s3 inet dhcp

#enp0s8
auto nep0s8
allow-hotplug enp0s8
iface enp0s8 inet static
  address 192.168.1.1
  netmask 255.255.255.0
  network 192.168.1.0
  gateway 192.168.1.1

  --

5. /etc/init.d/networking restart
6. mkdir /Dane
7. mkdir /Public
8. ls -l | more
9. apt install samba
10.  nano /etc/samba/smb.conf
--

*plik konfiguracyjny Samby*

*[Dane]*
path = /Dane/
guest ok = no
guest only = no
unix passwords = yes
encrypt passwords = yes
admin users = @admin
write list = @admin

*[Public]*
path = /Public/
encrypt passwords = yes
unix password = yes
admin users = @gargamel
write list = @gargamel

--

11. adduser admin
12. adduser gargamel
13. smbpasswd -a admin
14. smbpasswd -a gargamel
15. /etc/init.d/smbd restart
--
*import clienta win10*
--

16. login na admina
17. zmienić we właściwościach sieci na IPV4 i ustawić manualny adres IP
18. domyślić się jak zrobić kopie zapasową
