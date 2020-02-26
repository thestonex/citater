import React, { Component } from 'react'

class Addcitat extends Component {
  state = {
    title: null,
    citattekst: null,
    forfatter: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.Addcitat(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">title:</label>
          <input type="text" id="title" onChange={this.handleChange} />
          <label htmlFor="age">citattekst:</label>
          <input type="text" id="citattekst" onChange={this.handleChange} />
          <label htmlFor="belt">forfatter:</label>
          <input type="text" id="forfatter" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Addcitat