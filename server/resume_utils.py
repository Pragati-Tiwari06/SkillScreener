import fitz  # PyMuPDF
import re
from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS

def extract_resume_text(file_path):
    text = ""
    with fitz.open(file_path) as doc:
        for page in doc:
            text += page.get_text()
    return text.lower()

def clean_text(text):
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)  # Remove special chars
    words = text.lower().split()
    filtered_words = [w for w in words if w not in ENGLISH_STOP_WORDS]
    return filtered_words

def extract_skills_dynamic(resume_text, job_description):
    resume_words = clean_text(resume_text)
    job_words = clean_text(job_description)

    job_keywords = list(set(job_words))  # unique keywords from JD
    resume_set = set(resume_words)

    matched = [word for word in job_keywords if word in resume_set]
    missing = [word for word in job_keywords if word not in resume_set]

    # Length bonus
    if len(resume_words) > 200:
        length_bonus = 1
    elif len(resume_words) > 100:
        length_bonus = 0.5
    else:
        length_bonus = 0

    # Weighted scoring
    try:
        score = (
            (len(matched) / len(job_keywords)) * 0.7 +
            (len(matched) / len(resume_words)) * 0.2 +
            length_bonus * 0.1
        ) * 100
    except ZeroDivisionError:
        score = 0

    return matched, missing, round(score, 2)
