import BaseModel from './BaseModel';

class GeneralModel extends BaseModel {
  defaults(){
    return{
      name: "John Doe",
      title: "New message"
    };
  }

  constructor() {
    super('generaljoostjohan');
  }
}

export default GeneralModel;
