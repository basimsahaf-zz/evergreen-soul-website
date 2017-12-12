import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar, NavItem, Card} from 'react-materialize';
import Resources from './resources';
import {Jumbotron, Button, Row, Col, Image, Grid} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';



/**
 * Media imports
 */

import Logo from './files/logo/logo_2.png';
import Img from './files/Photos/outsiders-min.jpg';


import Bike from './files/icons/biking.png';
import Camp from './files/icons/camping.png';
import Archery from './files/icons/archery.png';
import Kayak from './files/icons/kayak.png';
import Back from './files/icons/back.png';
import Rock from './files/icons/rock.png';
import Hiking from './files/icons/hiking.png';
import Fishing from './files/icons/fishing.png';
import Navigating from './files/icons/navigating.png';
import Steward from './files/icons/stewardship.png';


import Nevada from './files/Photos/nevada-min.jpg';
import PointReyes from './files/Photos/pointreyes-min.jpg';
import Yosemite from './files/Photos/nevada-min.jpg';
import Alaska from './files/Photos/alaska-min.jpeg';
import ZCanyon from './files/Photos/zCanyon-min.jpg';
import GrandCanyon from './files/Photos/grandcanyon-min.jpg';





var gridOne = [Bike, Camp,Archery, Kayak, Back, Rock, Hiking, Fishing, Navigating, Steward];
var gridTwo = [Nevada, PointReyes, Yosemite, Alaska, ZCanyon, GrandCanyon];

var logoShow = <Image className="logo" src={Logo} responsive/>;


class RenderNavBar extends React.Component {
    render() {
        return (
            <Navbar className="transparent black-text" brand={logoShow} options={{color: "b71c1c"}} right>
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
                <div className="sectionTwoHeader two">{Resources.sec2Header}</div>
                <div className="sectionTwoTagline">{Resources.sec2TagLine}</div>
                <div className="sectionTwoJoinUs">{Resources.sec2JoinUs}</div>
                <center><Row className="gridSectionTwo">
                    {Resources.sec2Grid.map(function(item, index){
                        return <Col lg={4} md={4} s={1} className='gridCol'>
                            <Image src={Img} responsive/>
                            <div className="sectionTwoImageHeadline">{item.header}</div>
                            <div className="sectionTwoImagetagline">{item.tagLine}</div>
                            </Col>
                    })}
                </Row></center>
            </div>
        )
    }
}

class SectionThree extends React.Component {
    render() {
        return (
            <div className="sectionThree">
                <div className="sectionTwoHeader three">{Resources.sec3Header}</div>
                <center>
                <Grid>
            <Row className="gridSectionThree">
                    {Resources.sec3grid.map(function(item, index){
                        return <Col lg={4} md={4} s={1} className='activitiesGrid'>
                            <Card className='activitiesCard' textClassName='white-text'  actions={<div className="activityName">{item.activity}</div>}>
                              <Image className="gridImage1" src={gridOne[index]}/>
                            </Card>
                            </Col>
                    })}

                </Row>
            </Grid>
            </center>
            </div>
        )
    }
}


class SectionFour extends React.Component {
  render() {
    return (
      <div className="sectionFour">
        <div className="sectionTwoHeader four"> {Resources.sec4Header}</div>
        <center>
        <Grid>
          <Row className="gridSectionThree">
            {Resources.sec4Grid.map(function(item, index){
                return <Col lg={4} md={4} s={1} className='activitiesGrid'>
                    <Card className='activitiesCard' textClassName='black-text'
                    actions={
                      <a href="#"><div className="activityName">
                      {Resources.signUp}
                      <FontAwesome
                        className='super-crazy-colors'
                        name='long-arrow-right'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', padding: "2%" }}
                      />
                      </div>
                      </a>}>
                      <Image src={gridTwo[index]} responsive/>
                      <div className="activityName">{item.place}</div>
                      <div className="activityDate">{item.date}</div>
                    </Card>
                    </Col>
            })}

        </Row>
    </Grid>
    </center>
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
                <SectionThree/>
                <SectionFour/>
            </div>
        )
    }
}



ReactDOM.render(<MainRender/>,
    document.getElementById("root"));
