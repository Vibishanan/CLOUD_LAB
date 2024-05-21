from flask import Flask, render_template, request, redirect
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)

cluster = MongoClient("mongodb+srv://vibishanan:73QYy8NvaghhA2vB@cloud.e9strt3.mongodb.net/?retryWrites=true&w=majority&appName=Cloud")

db = cluster["collegesdb"]

collection = db["colleges"]

@app.route("/")
def home():
    docs = list(collection.find({}))
    return render_template("index.html", colleges = docs)

@app.route("/insert", methods=['POST'])
def insert():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        code = int(request.form['code'])
        location = request.form['location']
        college_det = {
            "name" : name,
            "email" : email,
            "code" : code,
            "location" : location
        }
        collection.insert_one(college_det)
        return redirect("/")


@app.route("/delete", methods = ['POST'])
def delete():
    if request.method == 'POST':
        id = request.form['id']
        collection.delete_one({"_id" : ObjectId(id)})
        return redirect("/")


@app.route("/updatepage",methods = ['POST'])
def updatepage():
    if request.method == 'POST':
        id = request.form['id']
        doc = collection.find_one({"_id" : ObjectId(id)})
        return render_template("update.html", college = doc)


@app.route("/update", methods = ['POST'])
def update():
    if request.method == 'POST':
        id = request.form['id']
        name = request.form['name']
        email = request.form['email']
        code = int(request.form['code'])
        location = request.form['location']
        collection.update_one({"_id" : ObjectId(id)}, {'$set' : {"name" : name, "email" : email, "code" : code, "location" : location}})
        return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)