<<<<<<< HEAD
import React from 'react';

=======

import React from 'react';
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
  }
}

<<<<<<< HEAD
export default PetBrowser; 
=======
export default PetBrowser;
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
