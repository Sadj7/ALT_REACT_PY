from config import db

class Pokemon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    type = db.Column(db.String(100), nullable=False, unique=False)
    imageUrl = db.Column(db.String(100), nullable=False, unique=True)
    height = db.Column(db.Float, nullable=False, unique=False)
    weight = db.Column(db.Float, nullable=False, unique=False)
    abilities = db.Column(db.String(100), nullable=False, unique=False)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'imageUrl': self.imageUrl
        }