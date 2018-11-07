import React, {Component} from 'react'
import { connect } from 'react-redux'

class Door extends Component {
  render(){
    return(
      <div>
        Door
      </div>
    )
  }
}

export default connect(null)(Door)
