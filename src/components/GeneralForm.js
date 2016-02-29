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
        <form role="form" onSubmit={this.createGeneral.bind(this)}>
          <div className="form-group">
            <label for="name">Name:</label>
              <input type="text" className="form-control" ref="newName" placeholder="your name"/>
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
              <input type="text" className="form-control" ref="newTitle" placeholder="your message"/>
          </div>
          <button type="submit" class="btn btn-default">Send Message</button>
        </form>
      </div>
    );
  }
}

export default GeneralForm;
