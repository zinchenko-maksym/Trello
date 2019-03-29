import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendBoardToServer} from '../../action'

class AddBoard extends Component {
	constructor(props)  {
    	super();
      this.state= {
        nameOfBoard: ""
      };
      this.handleBaordNameChange=this.handleBaordNameChange.bind(this);
  	}


   handleBaordNameChange(e){
     this.setState({nameOfBoard: e.target.value});
     console.log(this.props.myStore.boards)
  }
  render() {
    return (
	    <div  className="add-board boards-menu__item">
          <p>Create new board...</p>
          <div >
	    	    <input type="text" value={this.state.nameOfBoard} onChange={this.handleBaordNameChange}/>
            <button onClick={()=>this.props.onAddBoard(this.state.nameOfBoard)}>Submit</button>
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

        onAddBoard: (bn)=> {
          dispatch(sendBoardToServer({boardName : bn}));
       }
     })
     )(AddBoard);

