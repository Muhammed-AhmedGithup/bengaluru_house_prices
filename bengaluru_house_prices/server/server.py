from flask import Flask, request, jsonify
from flask_cors import CORS

import util
app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
CORS(app) # new line to enable frontend access to flask api

@app.route('/')
def index():
    return 'hello world'


@app.route('/name',methods=['GET'])
def location_name():
    response= {
        'locations':util.get_location_name()
    }

    return response

@app.route('/predict',methods=['POST'])
def predict_fun():
    print("Request", request.json["total_sqft"])

    total_sqft=float(request.json['total_sqft'])
    location=request.json['location']
    bath=int(request.json['bath'])
    bhk=int(request.json['bhk'])
    
    respons=jsonify({
    'the-prediction':util.get_estimator_price(location=location,total_sft=total_sqft,bath=bath,bhk=bhk)
    })
    respons.headers["Access-Control-Allow-Origin"] = "*"

    return respons

if __name__ == '__main__':
    util.load_artificates()
    app.run(debug=True)

    