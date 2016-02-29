import React from 'react';

class GeneralForm extends React.Component {
  componentDidMount() {
    this.generals = this.props.model;
  }

  createGeneral(event) {
    event.preventDefault();
    console.log("i live in create todo");
    let newName = this.refs.newName.value;
    let newTitle = this.refs.newTitle.value;
    this.generals.addResource({
      name: newName,
      title: newTitle
    });
    this.refs.newTitle.value = "";
  }

  render(){
    return(
      <div>
        <form onSubmit={this.createGeneral.bind(this)}>
            <p> name
              <input type="text" ref="newName" placeholder="your name"/>
            </p>
            <p> message
              <input type="text" ref="newTitle" placeholder="your message"/>
            </p>
            <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default GeneralForm;
