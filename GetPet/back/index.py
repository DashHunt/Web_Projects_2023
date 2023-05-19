import os

from datetime               import timedelta

from flask                  import Flask
from flask_cors             import CORS
from flask_jwt_extended     import JWTManager

from getPet.Routes          import api

from dotenv                 import load_dotenv
from os.path                import dirname, join

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
app.config["JWT_SECRET_KEY"]            = os.environ.get('JWT_TOKEN')
app.config["JWT_ACCESS_TOKEN_EXPIRES"]  = timedelta(hours=1)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(api, url_prefix='/getPet')

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=False)