import BaseModel from './BaseModel';

class TodoModel extends BaseModel {
  defaults(){
    return{
      title: "New Todo",
      completed: false
    };
  }

  constructor() {
    super('todo');
  }
}

export default TodoModel;
