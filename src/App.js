import React from 'react';
import GeneralModel from './models/GeneralModel';
import GeneralForm from './components/GeneralForm';
import GeneralList from './components/GeneralList';


class App extends React.Component {
  constructor() {
    super();

    this.generals = new GeneralModel();
  }

    render() {
        return (
            <div>
            
              <GeneralForm model={this.generals} />
              <GeneralList model={this.generals} />

            </div>
        );
    }
}

export default App;
