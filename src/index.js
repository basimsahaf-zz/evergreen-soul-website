import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem} from 'react-materialize';
import './index.css';
import Resources from './resources';
import {Jumbotron, Button, Row, Col} from 'react-bootstrap';


/**
 * Media imports
 */

import Logo from './files/logo/logo_2.png'


class RenderNavBar extends React.Component {
    render() {
        return (
            <Navbar className="transparent black-text"  brand="Evergreen Soul" options={{color: "b71c1c"}} right>
            {Resources.menuItems.map(function(item, index){
            return <NavItem className="menu" key={index}>{item}</NavItem>
        })}
            </Navbar>
        )
    }
}

    

class SectionOne extends React.Component {
    render() {
        return (
            <div className="sectionOne">
                <RenderNavBar/>
                <div className="sectionOneText">
                    <Jumbotron>
                        <h1>{Resources.tagLine}</h1>
                        <div className="sectionOnetagLine">{Resources.subTagLine}</div>
                        <Button className="buttons red darken-4" bsStyle="primary" bsSize="lg" active>{Resources.signUp}</Button>
                        <Button className="buttons red darken-4" bsStyle="primary" bsSize="lg" active>{Resources.learnMore}</Button>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}


class SectionTwo extends React.Component {
    render() {
        return (
            <div className="sectionTwo">
                <div className="sectionTwoHeader">{Resources.sec2Header}</div>
                <div className="sectionTwoTagline">{Resources.sec2TagLine}</div>
                <center><Row className="gridSectionTwo">
                    {Resources.sec2Grid.map(function(item, index){
                        return <Col lg={4} md={4} s={1} className='gridCol'>{item.header}</Col>
                    })}
                </Row></center>
            </div>
        )
    }
}


class MainRender extends React.Component {
    render() {
        return (
            <div className="mainrender">
                <SectionOne/>
                <SectionTwo/>
            </div>
        )
    }
}



ReactDOM.render(<MainRender/>, 
    document.getElementById("root"));