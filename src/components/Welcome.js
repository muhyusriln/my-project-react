import React, { Component} from "react";

// stateful class components
class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
  }

}

export default Welcome;