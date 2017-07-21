import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }

  render () {
    return (
      <div>

        <div className="navBar">
        <Router>
          <ul className="nav-ul">
            <li className="nav-left-button"><Link to='/myContracts'>My Contracts</Link></li>
            <li className="nav-left-button"><Link to='/newContract'>Create A Contract</Link></li>
            <li className="nav-left-button"><Link to='/userprofile'>Profile</Link></li>
            { this.props.user == null ? (
            <li className="nav-login"><Link to='/'>Login</Link></li>
          ) :
          (
            <li className="welcome-img"><img className="nav-profile-img" src={this.props.user.user_image_url} /></li>
          ) }
          </ul>
          </Router>
        </div>

          <div className="dropdown">
            <div className="dropbtn"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></div>
            <div className="dropdown-content">
              <Router>
                <div className="dropdown-content">
                  <Link to='/myContracts'>My Contracts</Link>
                  <Link to='/newContract'>Create a Contract</Link>
                  <Link to='/userprofile'>Profile</Link>
                  <Link to='/'>Login</Link>
                </div>
              </Router>
            </div>
          </div>
      </div>
    )
  }
}

NavBar.propTypes = {
  user: PropTypes.object,
}


function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavBar)
