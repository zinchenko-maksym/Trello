import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendListToServer} from '../../action'

class DeleteList extends Component {
	constructor(props)  {
    	super();
      this.state= {
        nameOfList: ""
      };
      this.handleListNameChange=this.handleListNameChange.bind(this);
  	}


   handleListNameChange(e){
     this.setState({nameOfList: e.target.value});
  }
  render() {
    return (
	    <div  className="add-list lists-menu__item">
          <p className="add-list__item add-list-title">Create new list...</p>
          <div className="add-list__item">
	    	    <input  type="text" value={this.state.nameOfList} onChange={this.handleListNameChange}/>
            <button onClick={()=>this.props.onAddList(this.state.nameOfList)}>Submit</button>
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

        onAddList: (ln)=> {
          dispatch(sendListToServer({listName : ln}));
       }
     })
     )(DeleteList);

