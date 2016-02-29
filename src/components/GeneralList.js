import React from 'react';

class GeneralList extends React.Component {
  constructor() {
    super();

      this.state = {
        generals: []
     };
  }


  componentDidMount() {
    this.generals = this.props.model;
    this.generals.subscribe(this.updateList.bind(this));
  }

  updateList() {
    this.setState({
      generals: this.generals.resources
    });
  }


  render(){
    return(
      <div>
        <ul>
          {this.state.generals.map((general) => {
            return(<li key={general._id}>{general.name} said: {general.title}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default GeneralList;
