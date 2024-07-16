from flask import Flask, request, jsonify, send_from_directory
from subnet_calculator import calculate_subnet  # Import the function from subnet_calculator.py

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/calculate', methods=['GET'])
def calculate():
    network = request.args.get('network')
    subnet_mask = request.args.get('subnet_mask')
    result = calculate_subnet(network, subnet_mask)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
