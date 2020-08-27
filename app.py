from flask import Flask,redirect,url_for,render_template
import flask 

app = flask.Flask(__name__)

@app.route("/")

def main():
    return render_template("index.html")


if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0",port=80)