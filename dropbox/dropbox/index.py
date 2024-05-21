from flask import Flask, render_template, request
import dropbox
import os

app = Flask(__name__)

dropbox_access_token = "sl.B1la2EafwT8nGDYDUrkmm4kfYmFXWa7-JRGMAAS0KTbD6hjsut2pQz4_W_xR6bqqIyLyGvd3P3-ot4Ys7wY54U7BwOozz8OOW3dEwymPwfs7zB5-nbqhqp6sTgiVuR1zbqeRGAA_Vhlk"
dbx = dropbox.Dropbox(dropbox_access_token)

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        return "No selected file"
    filename = file.filename
    print(filename)
    temp_file_path = r"C:\Users\vibis\OneDrive\Desktop\Cloud lab\Drop Box\dropbox" + filename
    file.save(temp_file_path)
    dropbox_path = "/image/"+filename

    with open(temp_file_path, "rb") as f:
        dbx.files_upload(f.read(), dropbox_path)

    os.remove(temp_file_path)

    return "File uploaded successfully"


if __name__ == '__main__':
    app.run(debug=True)