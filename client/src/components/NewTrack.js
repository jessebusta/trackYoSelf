import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import API from './../utils/API';

class NewTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entry: "",
      date: "",
      score: {},
      account: "",
      errorMessage: null,
      // tags: ["Personal", "Work", "Fitness"]
    };
  }

  newTrack = () => {
    const trackData = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date,
      score: this.state.score,
      account: this.state.account
    };

    API.saveTrack(trackData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBtnClick = event => {
    event.preventDefault();
    this.newTrack();
  };

  render() {
    return <form action="#">
      <Col s={12} m={10} className="push-m1">
        <Row>
          
          <Input s={12} m={8} label="Title" value={this.state.title} name="title" onChange={this.handleInputChange} />
          <Input s={12} m={4} name="date" type="date" label="Date" onChange={this.handleInputChange} value={this.state.date} />
        </Row>

        <Row>
          <Input s={12} label="How are you feeling today?" type="textarea" value={this.state.entry} name="entry" onChange={this.handleInputChange} />
        </Row>

        <Row>
          <Input name='tag' type='checkbox' value='work' label='Work' id="1"/>
          <Input name='tag' type='checkbox' value='family' label='Family' />
          <Input name='tag' type='checkbox' value='school' label='School' />
          <Input name='tag' type='checkbox' value='fitness' label='Fitness' />
        </Row>

        <Row>
          <Button onClick={this.handleBtnClick}>
            Save Track
          </Button>
        </Row>
      </Col>
      </form>;
  }
}

export default NewTrack;