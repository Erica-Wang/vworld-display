import React, {Component} from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:5000"

class App extends Component{
  positions = [{position: "absolute", size: "8", left: '829', top: '441'}];

  constructor(props){
    super(props);
    let position = [];
    axios.get(apiUrl+'/locations').then((response)=> {
      for (const person of response.data){
        var car = {id:person.id, x:person.x, y:person.y};
        position.push(car);
        this.positions = position;
      }
    });
  }

  updateLocation(){
    //this.setState({position: this.state.text+1});
    let position = [];
    axios.get(apiUrl+'/locations').then((response)=> {
      for (const person of response.data){
        var car = {id:person.id, x:person.x, y:person.y};
        position.push(car);
        this.positions = position;
      }
    });
    this.render();
  }

  componentDidMount(){
    const interval = setInterval(() => {
      this.updateLocation();
    }, 1000);
  }

  render() {
    
    const items = this.positions.map(function(item){
      return {position: "absolute",size: "8",left: item['x'],top: item['y']}
    });/*
    console.log(items);
      return (
        <div>
          {items.map((item)=><p style={{position: "absolute",size: "8",left: item['x'],top: item['y']}}>aa</p>)}
        </div>
      )
    */
    const str = [{position: "absolute", size: "8", left: 829, top: 441},
    {position: "absolute", size: "8", left: 365, top: 216},
    {position: "absolute", size: "8", left: 216, top: 484},
    {position: "absolute", size: "8", left: 386, top: 64},
    {position: "absolute", size: "8", left: 829, top: 441},
    {position: "absolute", size: "8", left: 365, top: 216},
    {position: "absolute", size: "8", left: 216, top: 484},
    {position: "absolute", size: "8", left: 386, top: 64},
    {position: "absolute", size: "8", left: 829, top: 441}];
    
    return(
      <div>
        <p style={str[0]}>str</p>
        <div>
          {items.map((item)=><p style={{position: "absolute",size: "8",left: item['x'],top: item['y']}}>aa</p>)}
        </div>
        <div>
          {items.map((item)=>console.log(item))}
        </div>
      </div>
    )
  }
}

export default App;
