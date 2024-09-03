# test

from flask import request, jsonify
from config import app, db
from models import Pokemon

@app.route('/pokemons', methods=['GET'])
def get_pokemons():
    pokemons = Pokemon.query.all()
    json_pokemons = list(map(lambda pokemon: pokemon.to_json(), pokemons))
    return jsonify({'pokemons': json_pokemons})

@app.route('/create_pokemon', methods=['POST'])
def create_pokemon():
    name = request.json.get('name')
    type = request.json.get('type')
    imageUrl = request.json.get('imageUrl')
    height = request.json.get('height')
    weight = request.json.get('weight')
    abilities = request.json.get('abilities')

    if not name or not type or not imageUrl or not height or not weight or not abilities:
        return (
            jsonify({'error': 'Missing data'}), 
            400,
        )
    
    new_pokemon = Pokemon(name=name,type=type,imageUrl=imageUrl,height=height,weight=weight,abilities=abilities)
    try:
        db.session.add(new_pokemon)
        db.session.commit()
    except Exception as e:
        return jsonify({'message': str(e)}), 400
    
    return jsonify({'message': 'Pokemon created!'}), 201

@app.route('/update_pokemon/<int:pokemon_id>', methods=['PUT'])
def update_pokemon(pokemon_id):
    pokemon = Pokemon.query.get(pokemon_id)

    if not pokemon:
        return jsonify({'message': 'Pokemon not found'}), 404
    
    data = request.json
    pokemon.name = data.get('name', pokemon.name)
    pokemon.type = data.get('type', pokemon.type)
    pokemon.imageUrl = data.get('imageUrl', pokemon.imageUrl)
    pokemon.height = data.get('height', pokemon.height)
    pokemon.weight = data.get('weight', pokemon.weight)
    pokemon.abilities = data.get('abilities', pokemon.abilities)

    db.session.commit()

    return jsonify({'message': 'Pokemon updated!'}), 200

@app.route('/delete_pokemon/<int:pokemon_id>', methods=['DELETE'])
def delete_pokemon(pokemon_id):
    pokemon = Pokemon.query.get(pokemon_id)

    if not pokemon:
        return jsonify({'message': 'Pokemon not found'}), 404

    db.session.delete(pokemon)
    db.session.commit()

    return jsonify({'message': 'Pokemon deleted!'}), 200



if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)

# Index             /
# -Image
# -Name
# -Type


# Specific view     /pokemon/{name}
# -Name
# -Image
# -Type
# -Height
# -Weight
# -Abilities

# Search             /search
# -Name
# -Type
# -Abilities
