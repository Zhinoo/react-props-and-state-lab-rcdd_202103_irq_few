<<<<<<< HEAD

=======
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
import React from 'react';

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
<<<<<<< HEAD
=======
            
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
<<<<<<< HEAD
            <span className="date">PET TYPE</span>
=======
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
<<<<<<< HEAD
=======
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
<<<<<<< HEAD
=======
    
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
    );
  }
}

export default Pet;