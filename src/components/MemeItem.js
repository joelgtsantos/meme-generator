import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component{
  state = {
    hovered: false
  }

  mouseOverMeme = () => {
    this.setState({hovered: true});
  }

  mouseLeveMeme = () => {
    this.setState({hovered: false});
  }

  onClickMeme = () => {
    const { text0, text1 } = this.props;
    const memeObj = {template_id: this.props.meme.id, text0, text1};
    this.props.createMeme(memeObj);
  }

  render(){
    return(
      <div 
        className='meme-item'
        onMouseEnter={this.mouseOverMeme}
        onMouseLeave={this.mouseLeveMeme}
        onClick={() => this.onClickMeme()}
      >
        <img className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'}
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />
        <p className={this.state.hovered ? 'meme-txt' : 'no-txt'}>
          {this.props.meme.name}
        </p>
      </div>
    )
  }
}



export default connect(null, { createMeme })(MemeItem);