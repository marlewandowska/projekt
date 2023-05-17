import React from 'react';

class Calculator extends React.Component {
  fetchData = () => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchData}>Pobierz dane</button>
      </div>
    );
  }
}

export default Calculator;