from flask import Flask, request
import numpy as np
import scipy.io.wavfile as wav

from flask import  render_template

# import the Python script for processing the audio file


app = Flask(__name__)

# define a route for the HTML page
@app.route('/')
def index():
    return render_template('teach.html')

# define a route for processing the uploaded audio file
@app.route('/process_audio', methods=['POST'])
def process_audio():
    audio_file = request.files['audio_file']
    audio_data = audio_file.read()
    signal = audio_to_signal(audio_data)
    # do something with the signal data
    return 'Audio file processed successfully'

if __name__ == '__main__':
    app.run(debug=True)

