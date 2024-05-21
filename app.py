import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
import pandas as pd

# Load the trained KNN model
import joblib

# Load the model
with open('model.pkl', 'rb') as file:
    est = pickle.load(file)
# Create the Flask app
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET'])
def index():
    return render_template('predict.html')  # Assuming an 'index.html' template exists

@app.route('/', methods=['POST'])
def predict():
    
        #print(l[i])
   
    # Check if the request method is POST
    if request.method == 'POST':
        print("post")
        form_data = request.form.to_dict()

        l = [form_data[key] for key in form_data]
        inputs=[float(j) for j in l]
        print(inputs)
        k=np.array([inputs])
        print(k)
        k.reshape(-1,1)
            # Make prediction using the model
        prediction = est.predict(k)
        print(prediction)
            # Generate prediction text based on the result
        prediction_text = "the person is suffering from ckd" if inputs[-5]== 1 else "the person is not suffering from ckd"

            # Return the prediction text as JSON
        return jsonify({'data': inputs[-5]})
    # except Exception as e:
    #         print("error")
            # Return error message if an exception occurs
        return jsonify({'error': str(e)})

    #Return error if the request method is not POST
    return jsonify({'error': 'Method not allowed'}), 405


if __name__ == '__main__':
    app.run(debug=False)