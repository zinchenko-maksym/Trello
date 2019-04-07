import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendBoardToServer} from '../../action'

class AddList extends Component {
	constructor(props)  {
    	super();
      this.state= {
        nameOfBoard: ""
      };
      this.handleBaordNameChange=this.handleBaordNameChange.bind(this);
  	}


   handleBaordNameChange(e){
     this.setState({nameOfBoard: e.target.value});
  }
  render() {
    return (
	    <div  className="add-list lists-menu__item">
          <p className="add-list__item add-list-title">Create new list...</p>
          <div className="add-list__item">
	    	    <input  type="text" value={this.state.nameOfBoard} onChange={this.handleBaordNameChange}/>
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
     )(AddList);

