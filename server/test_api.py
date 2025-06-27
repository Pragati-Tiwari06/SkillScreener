import requests

url = "http://127.0.0.1:5000/analyze-resume"
file_path = "Pragati tiwari resume.pdf"  # Make sure it's in the server folder

with open(file_path, "rb") as f:
    files = {"resume": f}
    response = requests.post(url, files=files)

print("Status Code:", response.status_code)
print("Response JSON:")
print(response.json())
