import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBoard, loadAddPlaces} from '../../action'

class AddBoard extends Component {
	constructor(props)  {
    	super();
      this.state= {
        boardName: ""
      };
      this.handleBaordNameChange=this.handleBaordNameChange.bind(this);
  	}


   handleBaordNameChange(e){
     this.setState({boardName: e.target.value});
     
  }
  render() {
    return (
	    <div  className="add-board boards-menu__item">
          <p>Create new board...</p>
          <div >
	    	    <input type="text" value={this.state.boardName} onChange={this.handleBaordNameChange}/>
            <button onClick={()=>this.props.onAddBoard(this.state.boardName)}>Submit</button>
          </div>
	    </div>
    );
  }
}

export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({

        onAddBoard: (placeNum)=> {
          dispatch(loadAddPlaces());
         dispatch(addBoard(placeNum));
       }
     })
     )(AddBoard);

