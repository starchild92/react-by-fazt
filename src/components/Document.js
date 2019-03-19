import React, { Component } from 'react';

class Jumbotron extends Component {

	// For some reason I ahve to call super when I use the constructor
	constructor ()
	{
		super();
		console.log('You just call Jumbotron Constructor')
	}
	
  render() {
    return (
      <div className='jumbotron'>
			<h1>{ this.props.title }</h1>
        <p>This is the document componeny, i just declare to work with <br></br> and then there were none <br></br> this is not html is jsx </p>
      </div>
    );
  }
}

export default Jumbotron;