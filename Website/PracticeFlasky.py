from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("homepage.html")

@app.route("/material.html")
def timeline():
    return render_template("material.html")

@app.route("/research.html")
def code():
    return render_template("research.html")

@app.route("/reference.html")
def appendix():
    return render_template("reference.html")

if __name__ == "__main__":
    app.run(debug=True)
