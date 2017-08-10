import React,{ Component } from "react";
import ReactDOM from "react-dom";


class Tag extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <a className="tag">{this.props.data}</a>
    )
  }
}
class Answers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result:""
    }
  }
  componentWillMount(){
    $.get("/answers",(result) => {
      this.setState({
        result:result
      })
      console.log("sssss",result);
    })
  }
  render(){
    console.log("mmmm",this.state.result);
    return (
      <div>
        {this.state.result.tags.map(function(data){
          <Tag data={data} />
        })}
      </div>
    )
  }
}

ReactDOM.render(<Answers />,document.querySelector("#tag"));
