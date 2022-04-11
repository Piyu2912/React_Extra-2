import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      salary: '',
      age: '',
      detail: [],
      added: true,
    }
  }


  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const tmpObj ={
      name: this.state.name,
      salary:this.state.salary,
      age:this.state.age,
    };
    const tmpArr = this.state.detail;
    tmpArr.push(tmpObj);
    this.setState({ detail:tmpArr });
  }

  render() {
    return (
      <div>
        <h1>Enter the Details:</h1>

        <div>
          <form>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChanges} />
            <br />
            <br />

            <label for="salary">Salary: </label>
            <input type="number" id="salary" name="salary" value={this.state.salary} onChange={this.handleChanges} />
            <br />
            <br />

            <label for="age">Age: </label>
            <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChanges} />
            <br />
            <br />

            <button type='submit' onClick={this.handleSubmit}>Click Here</button>
          </form>
        </div>

        <div>
          {this.state.detail.map((value,index)=> {
            return(
              <div>
                <p>Name: {value.name}</p>
                <p>Salary : {value.salary}</p>
                <p>Age : {value.age}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Form