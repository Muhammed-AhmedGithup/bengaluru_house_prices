from flask import Flask, request, jsonify
import util
app = Flask(__name__)
@app.route('/')
def index():
    return 'hello world'


@app.route('/name',methods=['GET'])
def location_name():
    response= jsonify({
        'locations':util.get_location_name()
    })
    return response

@app.route('/predict',methods=['POST'])
def predict_fun():
    total_sqft=float(request.form['total_sqft'])
    location=request.form['location']
    bath=int(request.form['bath'])
    bhk=int(request.form['bhk'])
    respons=jsonify({
    'the prediction':util.get_estimator_price(location=location,total_sft=total_sqft,bath=bath,bhk=bhk)
    })
    return respons

if __name__ == '__main__':
    util.load_artificates()
    app.run(debug=True)

    