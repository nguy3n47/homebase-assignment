import requests
from flask import Flask, request, jsonify

app = Flask(__name__)
EXPRESS_API_URL = "http://localhost:3000/api/v1"  # Replace with your Express API URL


@app.route("/proxy/<path:path>", methods=["GET", "POST", "PUT", "DELETE"])
def proxy(path):
    url = f"{EXPRESS_API_URL}/{path}"
    req_headers = dict(request.headers)
    req_body = request.get_data()

    if request.method == "GET":
        response = requests.get(url, headers=req_headers)
    elif request.method == "POST":
        response = requests.post(url, headers=req_headers, data=req_body)
    elif request.method == "PUT":
        response = requests.put(url, headers=req_headers, data=req_body)
    elif request.method == "DELETE":
        response = requests.delete(url, headers=req_headers)
    else:
        return jsonify({"error": "Invalid request method"})

    if response.ok:
        return jsonify(response.json()), response.status_code
    return jsonify({"error": "Failed to process request"}), response.status_code


if __name__ == "__main__":
    app.run(port=5000)  # Run the Flask app on a specified port
