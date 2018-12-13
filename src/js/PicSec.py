
from qpizero import MotionSenor
from picamera import PiCamera
from datetime import datetime
import time
import RPi.GPIO as GPIO
from curtsies import Input
GPIO.setmode(GPIO.BCM)

TRIG = 23
ECHO = 24

GPIO.setup(TRIG,GPIO.OUT)
GPIO.setup(TRIG,GPIO.IN)


pir = MotionSenor(18)
while True:
     print("No motion is detected")
     print.wait_for_motion()

     print("motion is detected")
     camera = PiCamera()
     filename = datetime.now().strftime(".jpg")

     camera.capture('/home/pi/picturesfromcemera/' + filename)
     #camera.stop_preview()
     print ("picture was taken")
     GPIO.output(TRIG, False)
     print "Waiting for the sensor"

     time.sleep (2)
     GPIO.output(TRIG, True)
     time.sleep(0.3)
     GPIO.output(TRIG, False)
        
    while GPIO.input(ECHO)==0:
      pulse_start = time.time()
    while GPIO.input(ECHO)==1:
      pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)
    print "Distance", distance, "cm"

    camera.close()
    time.sleeo(3)






