import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
<<<<<<< HEAD
=======
   
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
<<<<<<< HEAD
=======
    
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
    };
  }

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
<<<<<<< HEAD
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
=======
@@ -24,16 +47,19 @@ class App extends React.Component {
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
<<<<<<< HEAD
=======
              
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      
    )
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
    );
  }
}

<<<<<<< HEAD
=======

>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
export default App;