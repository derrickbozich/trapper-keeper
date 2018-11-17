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

const random = () => {
  return Math.floor(Math.random()*100000)
}

const mobileDropdownItems = () => {
  return mobileRightItems.map((item, i) => <Dropdown.Item key={i} text={item.content} as={Link} to={item.to} />)

}

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
  logOutUser
}) => (

      <Menu inverted pointing    >

        <Menu.Item>
          <Image src='https://i.imgur.com/NCpIB3gt.jpg' style={{ width:40}} />
        </Menu.Item>




        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="sidebar" />
            <Dropdown>
                <Dropdown.Menu>
                  {mobileDropdownItems()}
                  <Dropdown.Item><Link className="item" to="/finances" >Finances</Link></Dropdown.Item>
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
      <Menu.Item key={random()}   as={Link} to={item.to} content={item.content}  />
    ))}
    <Menu.Menu position="right">


        {rightItems.map(item => <Menu.Item key={random()}  as={Link} to={item.to} content={item.content}  />
        )}
        <Menu.Item onClick={logOutUser} content="Logout" />

    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {

    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => {
    debugger
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { children, leftItems, rightItems, loggedIn, logOutUser, mobileRightItems} = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={mobileRightItems}
            visible={visible}
            loggedIn={loggedIn}
            logOutUser={logOutUser}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} loggedIn={loggedIn} logOutUser={logOutUser} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
