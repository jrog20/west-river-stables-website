import React, { Component } from 'react';

// This component should stay in React. No need for Redux
class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      image: null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onImageChange = event => { 
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('caption', this.state.caption);
    formData.append('image', this.state.image);
    fetch('http://localhost:3001/sliders', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
  }

  render () {
    return (
      <div className="Slider">
        <form onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            name="caption" 
            placeholder="caption" 
            onChange={this.handleChange}
          />
          <input 
            type="file" 
            placeholder="image" 
            accept="image/*" 
            multiple={false} 
            onChange={this.onImageChange} 
          />
          <input 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    )
  }
}

export default Slider;
