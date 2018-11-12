import React, {Component} from 'react'
import Door from './Door'

class ShowsPage extends Component {

  render(){
      return(
        <div>
          <Door history={this.props.history} />
        </div>
      )
    }
}

export default ShowsPage
