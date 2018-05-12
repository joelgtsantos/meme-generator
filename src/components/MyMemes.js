import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';

class MyMeme extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        {
           this.props.myMemes.map((meme,index) => {
            return(
              <img  
                className='my-meme-img'
                key={index}
                src={meme.data.url}
              />
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    myMemes: state.myMemes
  }
}

export default connect(mapStateToProps, null)(MyMeme);