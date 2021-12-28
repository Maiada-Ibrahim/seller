import React, { Component } from "react";
import { Form, Button, Accordion, InputGroup ,input,Input } from "react-bootstrap/";
export class AddCollection extends Component {

  render() {
    return (
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header  onClick={this.props.addCollections}>
             <span className="omg" style={{fontSize: "1.5pc", }}> Add</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="acoElm">
                <Form className="form1" onSubmit={this.props.addmodels}>
                <Form.Control
                    type="date"
                    name="date"
                    placeholder="choose the day"
                    required 
                  />
                     <Form.Control
                    type="time"
                    name="time"
                    placeholder="choose your time"
                    required
                  />
                  <Button type="submit">Add</Button>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default AddCollection;