import React from 'react';

class SubscriptionPicker extends React.Component {

  render(){

    // render regular comment here.

    return (
      <form className="subscription-selector">
      { /* Legit Comment here */ }
        <h2>Please pick a subscription</h2>
        <input type="text" placeholder="Pick your Subscription" />
        <button type="submit">Submit </button>
      </form>
    )
  }

}

export default SubscriptionPicker;