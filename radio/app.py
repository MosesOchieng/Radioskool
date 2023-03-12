from flask import Flask, render_template
import pyaudio
import serial

app = Flask(__name__)

# Set up the PyAudio and PySerial objects
chunk = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
ser = serial.Serial('/dev/tty.usbserial', 9600) # Replace with the serial port your radio transceiver is connected to

p = pyaudio.PyAudio()
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=chunk)

@app.route('/')
def index():
    return render_template('radio.html')

@app.route('/transmit')
def transmit():
    # Continuously read audio from the microphone and transmit it through the radio transceiver
    while True:
        data = stream.read(chunk)
        ser.write(data)

if __name__ == '__main__':
    app.run(debug=True)
