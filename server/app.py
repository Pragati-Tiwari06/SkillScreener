from flask import Flask, request, jsonify
from flask_cors import CORS
from resume_utils import extract_resume_text, extract_skills_dynamic

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "✅ Resume Screener API is running!"})
@app.route('/analyze-resume', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files or 'job_description' not in request.form:
        return jsonify({'error': 'Resume and job description are required'}), 400

    try:
        file = request.files['resume']
        job_description = request.form['job_description'].lower()

        file.save('temp_resume.pdf')
        resume_text = extract_resume_text('temp_resume.pdf')

        matched, missing, score = extract_skills_dynamic(resume_text, job_description)

        return jsonify({
            'match_score': score,
            'matched': matched,
            'missing': missing
        })

    except Exception as e:
        print("❌ Error during resume analysis:", str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)


