import json

from utils.encoder import Encoder


def serialize_data(data):
    return json.loads(json.dumps(data, cls=Encoder))