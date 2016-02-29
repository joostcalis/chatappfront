import React from 'react';
import GeneralModel from './models/GeneralModel';
import GeneralForm from './components/GeneralForm';
import GeneralList from './components/GeneralList';
import './stylesheets/_bootstrap.scss';


class App extends React.Component {
  constructor() {
    super();

    this.generals = new GeneralModel();
  }

    render() {
        return (
            <div className= "container">
                <div className= "col-md-4">
                </div>
                <div className= "col-md-4 bottom">
                  <GeneralList model={this.generals} />
                  <GeneralForm model={this.generals} />
                </div>
                <div className= "col-md-4">
                </div>
            </div>
        );
    }
}

export default App;
