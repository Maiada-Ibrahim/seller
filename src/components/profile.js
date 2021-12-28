import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./CSS/profile.css";
import { Card, Button, Modal, Form, InputGroup, input, Input } from "react-bootstrap/";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      resultforeverycollectin: [],
      resultforsellercollectin: [],

    };
  }
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    await this.setState({ email: `${user.email}` })
    let data = await axios.get(`http://localhost:3001/getuserdata?email=${this.state.email}`)
    console.log(data.data)
    await this.setState({ resultforeverycollectin: data.data })

    let data2 = await axios.get(`http://localhost:3001/getsellerdata?email=${this.state.email}`)
    console.log(data2.data)
    await this.setState({ resultforsellercollectin: data2.data })
  };
  updatReject = async () => {
   
    let modelInfo = {
      name: this.props.selectedResult.name,
      imageUrl: this.props.selectedResult.imageUrl,
      email:this.props.selectedResult.email,
      prodectName: this.props.selectedResult.prodectName,
      prodectImg: this.props.selectedResult.prodectImg,
      date: this.props.selectedResult.date,
      time: this.props.selectedResult.time,
      description:this.props.selectedResult.description,
      price:this.props.selectedResult.price,
      statusForThis:"reject",
      sellerEmail:this.props.selectedResult.sellerEmail,
      location:this.props.selectedResult.location,
      _id:this.props.selectedResult._id
    };
  
    this.props.stateRejectForProdect(modelInfo)
}
 

  delete = async (id) => {
    let data = await axios.delete(`http://localhost:3001/deletedata/${id}?email=${this.state.email}`)
    console.log(data.data)
    await this.setState({ resultforeverycollectin: data.data })
  }

  ///////////////////////////////////////////////////////////////////////////

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div className="gene">
        {isAuthenticated ? (
          <>
            <div className="info-cont">
              <div className="info">
                <img
                  className="userProfileImg"
                  src={user.picture}
                  alt={user.name}
                />

                <h2>{user.name}</h2>
              </div>
            </div>
            <hr style={{ width: "70%", margin: "2rem auto" }}></hr>
            <div style={{ margin: "2rem auto", width: "fit-content", fontSize: "1.5pc", fontWeight: "bolder" }}>{this.state.nameofselectcoolectin}</div>
            <div className="folder-models">
              <div className="one-model">
                {this.state.resultforeverycollectin.length !== 0  && this.state.resultforsellercollectin.length !== 0 ? (
                  this.state.resultforeverycollectin.map((item) => {
                    return (
                      <Card>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Text style={{ marginTop: "1rem" }}>
                          {item.name}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.date}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.time}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.price}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.location}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.statusForThis}
                        </Card.Text>
                        <img
                          className="circlestuff2"
                          onClick={() => {
                            this.delete(
                              item._id,
                            );
                          }}
                          src="https://img.icons8.com/flat-round/452/delete-sign.png"
                          alt="delete"
                        ></img>
                      </Card>
                    );
                  }
                
                  
                  
                  )
                ) : (
                  <div>
                    <p>this folder is empty</p>
                  </div>
                )
                
                }
                {this.state.resultforsellercollectin.length !== 0  && this.state.resultforeverycollectin.length !== 0 ? (
                  this.state.resultforsellercollectin.map((item) => {
                    return (
                      <Card>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Text style={{ marginTop: "1rem" }}>
                          {item.name}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.date}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.time}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.price}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.location}
                        </Card.Text>
                        <Card.Text style={{ marginTop: ".5rem" }}>
                          {item.statusForThis}
                        </Card.Text>
                  
                        {this.state.email == item.sellerEmail ? (
                          <div >
                            <Form  onSubmit={this.updatReject}>
                              <Button type="submit">reject</Button>
                            </Form>
                            <Form  onSubmit={this.props.stateAcceptForProdect}>
                              <Button type="submit">accept</Button>
                            </Form>
                          </div>) : ("")}

                      </Card>
                    );
                  }
                
                  
                  
                  )
                ) : (
                  <div>
                    <p>this folder is empty</p>
                  </div>
                )
                
                }
              </div>
            </div>
          </>
        ) : (
          <div className="err">
            <img
              src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              alt="img"
            ></img>
            <p>Please log in to show data</p>
          </div>
        )}
      </div>
    );
  }
}
export default withAuth0(Profile);