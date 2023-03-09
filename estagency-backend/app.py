from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return '<h1>Recipes API</h1>'
@app.route('/partner/<partner_id>')
def fetchPartner(partner_id):
    # võta andmebaasist id järgi

    # dummy
    return {
        'name': 'Andres', 'specialty' : 'Marketing, B2B & PR',
        'quote' : ('“It’s just business...” they say. There’s no such thing as “just business”. It’s The Business.'
            + 'We never say we know how to do it. We say: Let’s have a look inside and let’s do it better together. By your needs.')
    }