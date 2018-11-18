import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { render } from "react-dom";
import {
  Container,
  Image,
  Menu,
  Icon,
  Header,
  Sidebar,
  Responsive,
  Dropdown
} from "semantic-ui-react";
import { rightItems } from '../common'
import { mobileRightItems } from '../common'
import { leftItems } from '../common'
import { getCookie } from '../actions/actions'
import { connect } from 'react-redux'


const random = () => {
  return Math.floor(Math.random()*100000)
}


const NavBarMobile = ({children, leftItems, rightItems,logOutUser}) => (

      <Menu inverted pointing>
        <Menu.Item>
          <Image src='https://i.imgur.com/NCpIB3gt.jpg' style={{ width:40}} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown icon='sidebar'>
                <Dropdown.Menu>
                  {leftItems.map((item, i) => <Dropdown.Item key={i} text={item.content} as={Link} to={item.to} />)}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
);

const NavBarDesktop = ({ leftItems, rightItems, loggedIn, logOutUser }) => (
  <Menu inverted pointing >

    <Menu.Item>
      <Image src='https://i.imgur.com/NCpIB3gt.jpg' style={{ width:40}} />
    </Menu.Item>

    {leftItems.map(item => (
      <Menu.Item key={random()} as={Link} to={item.to} content={item.content}  />
    ))}

    <Menu.Menu position="right">
        {rightItems.map(item =>
          <Menu.Item key={random()}  as={Link} to={item.to} content={item.content} />
        )}
        { loggedIn ? <Menu.Item onClick={logOutUser} content="Logout" /> : <div></div> }

    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default class NavBar extends Component {

  render() {
    const { leftItems, rightItems, loggedIn, logOutUser, mobileRightItems} = this.props;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            rightItems={mobileRightItems}
            loggedIn={loggedIn}
            logOutUser={logOutUser}
          >
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} loggedIn={loggedIn} logOutUser={logOutUser} />
        </Responsive>
      </div>
    );
  }
}
