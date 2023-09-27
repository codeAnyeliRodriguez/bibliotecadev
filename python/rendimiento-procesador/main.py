# pip install psutil
# #pip install winsound
  #python main.py
import psutil
import winsound
import time

while 1<2:
  # print("hola soy Anyeli")
  porcentaje_cpu = psutil.cpu_percent(interval=1)
  print(porcentaje_cpu)

  if porcentaje_cpu >= 80:
    winsound.Beep(2500,500);
    winsound.Beep(2500,500);
    winsound.Beep(2500,500);

  time.sleep(1)