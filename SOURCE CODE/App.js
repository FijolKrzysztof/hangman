import React, { Component } from 'react';
import './App.css';
import {Container, Col, Row, Button, Navbar} from 'react-bootstrap';
import words from './words';

let answer;
let visible;
let clicked = [];
let mistakes = -1;
let proceed = true;

class App extends Component {
  generateWord = () => {
    let random = Math.floor(Math.random() * 1952);
    answer = (words.wordList[random]).toUpperCase();
    this.checkLetters();
  }

  checkLetters = () => {
    visible = '';
    for(let i = 0; i < answer.length; i ++){
      clicked.includes(answer[i]) === true ? visible += answer[i] : visible += '_';
    }
    if(answer.includes(clicked[clicked.length-1]) === false) mistakes ++;
    visible = visible.split('').join(' ');
    this.setState({visible});
    this.drawHangman();
    if(mistakes === 9 || visible.includes('_') === false){
      this.announceResult()
     } else {
       proceed = true;
     }
  }

  handleClick = (e) => {
    let letter = e.target.innerHTML;
    if(clicked.includes(letter) !== true){
      if(proceed === true){
        proceed = false;
        document.getElementById('b-' + letter).style.opacity = 0;
        clicked.push(letter);
        this.checkLetters();
      }
    }
  }

  announceResult = () => {
    if(mistakes === 9){
      document.getElementById('d').style.display = 'block';
      document.getElementById('d').style.animation = 'appear 1s';
      document.getElementById('word').style.animation = 'fade 1s';
      setTimeout(() => {
        visible = answer.split('').join(' ');
        this.setState({visible});
        document.getElementById('word').style.animation = 'appear 1s';
      }, 900);
      setTimeout(() => {
        document.getElementById('again').style.animation = 'appear 1s';
        document.getElementById('again').style.display = 'block';
      }, 2000);
    } else {
      document.getElementById('w').style.display = 'block';
      document.getElementById('w').style.animation = 'appear 1s';
      setTimeout(() => {
        document.getElementById('again').style.animation = 'appear 1s';
        document.getElementById('again').style.display = 'block';
      }, 1000);
    }
  }

  playAgain = () => {
    document.getElementById('d').style.display = 'none';
    document.getElementById('w').style.display = 'none';
    document.getElementById('again').style.display = 'none';
    for(let i = 0; i < clicked.length; i ++){
      document.getElementById('b-' + clicked[i]).style.opacity = 1;
    }
    clicked = [];
    mistakes = -1;
    this.generateWord();
    proceed = true;
  }

  componentDidMount = () => {
    this.generateWord();
  }

  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <Navbar className="fixed-top bg-dark justify-content-center">
            <h2 id="d" style={{marginTop: 10, display: 'none'}}>HANGED</h2>
            <h2 id="w" style={{marginTop: 10, display: 'none'}}>WIN</h2>
          </Navbar>
          <Container>
            <Col>
              <Row className="justify-content-center">
                <span id="hl"></span>
              </Row>
              <Row className="justify-content-center" style={{marginBottom: 50}}>
                <Col>
                  <Row id="d" className="justify-content-end">
                    <span id="vl"></span>
                  </Row>
                </Col>
                <Col>
                  <Row id="e" className="justify-content-start">
                    <span id="line"></span>
                  </Row>
                  <Row id="c" className="justify-content-start">
                    <span id="head"></span>
                  </Row>
                  <Row>
                    <Row id="a">
                      <span id="lArm"></span>
                    </Row>
                    <Row id="b">
                      <span id="body"></span>
                    </Row>
                    <Row id="z">
                      <span id="rArm"></span>
                    </Row>
                  </Row>
                  <Row id="q" className="justify-content-start">
                    <Row>
                      <span id="lLeg"></span>
                    </Row>
                    <Row>
                      <span id="rLeg"></span>
                    </Row>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center" style={{marginBottom: 50}}>
                <h1 id="word">{visible}</h1>
              </Row>
              <Row className="justify-content-center">
                <Button id="b-A" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>A</Button>
                <Button id="b-B" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>B</Button>
                <Button id="b-C" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>C</Button>
                <Button id="b-D" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>D</Button>
                <Button id="b-E" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>E</Button>
                <Button id="b-F" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>F</Button>
                <Button id="b-G" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>G</Button>
              </Row>
              <Row className="justify-content-center">
                <Button id="b-H" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>H</Button>
                <Button id="b-I" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>I</Button>
                <Button id="b-J" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>J</Button>
                <Button id="b-K" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>K</Button>
                <Button id="b-L" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>L</Button>
                <Button id="b-M" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>M</Button>
              </Row>
              <Row className="justify-content-center">
                <Button id="b-N" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>N</Button>
                <Button id="b-O" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>O</Button>
                <Button id="b-P" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>P</Button>
                <Button id="b-Q" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>Q</Button>
                <Button id="b-R" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>R</Button>
                <Button id="b-S" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>S</Button>
                <Button id="b-T" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>T</Button>
              </Row>
              <Row className="justify-content-center">
                <Button id="b-U" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>U</Button>
                <Button id="b-V" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>V</Button>
                <Button id="b-W" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>W</Button>
                <Button id="b-X" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>X</Button>
                <Button id="b-Y" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>Y</Button>
                <Button id="b-Z" onClick={(e) => this.handleClick(e)} style={{margin: 5}}>Z</Button>
              </Row>
            </Col>
          </Container>
          <Navbar className="fixed-bottom bg-dark justify-content-center">
            <Button onClick={this.playAgain} className="btn btn-lg" id="again" variant="danger" style={{display: 'none'}}>AGAIN</Button>
          </Navbar>
        </header>
      </div>
     );
  }

  drawHangman = () => {
    switch(mistakes){
      case 1:
        document.getElementById('vl').style.opacity = 1;
        break;
      case 2:
        document.getElementById('hl').style.opacity = 1;
        break;
      case 3:
        document.getElementById('line').style.opacity = 1;
        break;
      case 4:
        document.getElementById('head').style.opacity = 1;
        break;
      case 5:
        document.getElementById('body').style.opacity = 1;
        break;
      case 6:
        document.getElementById('lArm').style.opacity = 1;
        break;
      case 7:
        document.getElementById('rArm').style.opacity = 1;
        break;
      case 8:
        document.getElementById('lLeg').style.opacity = 1;
        break;
      case 9:
        document.getElementById('rLeg').style.opacity = 1;
        break;
      default:
        document.getElementById('vl').style.opacity = 0;
        document.getElementById('hl').style.opacity = 0;
        document.getElementById('line').style.opacity = 0;
        document.getElementById('head').style.opacity = 0;
        document.getElementById('body').style.opacity = 0;
        document.getElementById('lArm').style.opacity = 0;
        document.getElementById('rArm').style.opacity = 0;
        document.getElementById('lLeg').style.opacity = 0;
        document.getElementById('rLeg').style.opacity = 0;
        break;
    }
  }
}
 
export default App;
