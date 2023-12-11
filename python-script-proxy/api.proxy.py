import requests
from flask import Flask, request, jsonify

app = Flask(__name__)
EXPRESS_API_URL = "http://localhost:3000/api/v1"  # Replace with your Express API URL


@app.route("/proxy/<path:path>", methods=["GET", "POST", "PUT", "DELETE"])
def proxy(path):
    url = f"{EXPRESS_API_URL}/{path}"
    req_headers = dict(request.headers)
    req_body = request.get_data()

    # Use a dictionary to map methods to corresponding functions
    method_functions = {
        "GET": requests.get,
        "POST": requests.post,
        "PUT": requests.put,
        "DELETE": requests.delete
    }

    # Check if the request method is valid
    if request.method not in method_functions:
        return jsonify({"error": "Invalid request method"}), 400

    # Get the appropriate function based on the request method
    request_function = method_functions[request.method]

    try:
        # Make the request to the Express API
        response = request_function(url, headers=req_headers, data=req_body)
        response.raise_for_status()  # Raise an error for non-OK responses
        return jsonify(response.json()), response.status_code
    except requests.RequestException as e:
        error_message = f"Request failed: {str(e)}"
        app.logger.error(error_message)  # Log the error
        return jsonify({"error": error_message}), 500  # Return a 500 status for internal errors


if __name__ == "__main__":
    app.run(port=5000)  # Run the Flask app on a specified port
