import React from 'react';

class App extends React.Component {

  render(){

    // render regular comment here.

    return (
      <form className="store-selector">
      { /* Legit Comment here */ }

        <h2>Please Enter a store</h2>
        <input type="text" placeholder="Store Name" />
        <button type="submit">Submit </button>
      </form>
    )
  }

}

export default App;