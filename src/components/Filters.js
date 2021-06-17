<<<<<<< HEAD
=======

>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
<<<<<<< HEAD
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFindPetsClick}
            className="ui secondary button">
            Find pets
          </button>
        </div>
      </div>
=======
         
           <div className="field">
           <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
@@ -15,11 +15,15 @@ class Filters extends React.Component {
        </div>

        <div className="field">
          
        <button
        onClick={this.props.onFindPetsClick}
        className="ui secondary button">
        Find pets
      </button>
        </div>
      </div>
    
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
    );
  }
}

<<<<<<< HEAD
export default Filters; 
=======

export default Filters;
>>>>>>> 0b5f2362257bb6e4d5463035981e22202354a08f
