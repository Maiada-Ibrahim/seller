import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap/";
import Carso from "./carso";
import axios from "axios";
import OneResult from "./oneResult";
import AddCollection from "./AddCollection";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginButton";
import "./CSS/mainPage.css";

export class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      searchResults: [],
      searchInput: "",
      showData: false,
      Alert: "",
      show: false,
      selectedResult: [],
      key: "",
      collectionnamearr: [],
      addnewwcollecction: [],
      showprofile: false,
    };
  }

  componentDidMount = async () => {
    let requestURL = `${process.env.REACT_APP_SERVER1}/getalldata`;
    let retrivedURL = await axios.get(requestURL);
    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
  };

  /////////////////////////////////////////////////////////////////////////////////
  getData = async (e) => {
    e.preventDefault();
    await this.setState({
      searchInput: e.target.search.value,
    });

    let requestURL = `${process.env.REACT_APP_SERVER1}/Seller?title=${this.state.searchInput}`;
    let retrivedURL = await axios.get(requestURL);
    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  showModal = async (title) => {
    // let targetKey = event.target.
    let results = this.state.searchResults.find((result) => {
      if (result.name === title) {
        return result;
      }
    });

    await this.setState({
      selectedResult: results,
      show: true,
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  //------------------------------------------------------------------------------------------------------

  addmodels = async (event) => {
    event.preventDefault();
    const user = this.props.auth0;
    console.log(  event.target.date.value );
    console.log(  event.target.time.value );

    let modelInfo = {
    
      name: this.state.selectedResult.name,
      imageUrl: this.state.selectedResult.imageUrl,
      email: user.user.email,
      prodectName: this.state.selectedResult.prodectName,
      prodectImg: this.state.selectedResult.prodectImg,
      date: event.target.date.value,
      time: event.target.time.value,
      description:this.state.selectedResult.description,
      price:this.state.selectedResult.price,
      location:this.state.selectedResult.location
    };
    let modelData = await axios.post(
      `${process.env.REACT_APP_SERVER1}/adduserdata`,
      modelInfo
    );

    this.setState({
      show: false,
    });
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <div>
        ]
        <div className="cover">
          <Carso />

          <Form className="form0" onSubmit={this.getData}>
            <Form.Control
              size="lg"
              type="text"
              name="search"
              placeholder="Search Seller"
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </div>
        <div className="results">
          {this.state.showData &&
            this.state.searchResults.map((item, i) => {
              return (
                <OneResult
                  key={i}
                  Thumbnail={item.imageUrl}
                  title={item.name}
                  showData={this.showModal}
                />
              );
            })}
        </div>
        <Modal
          dialogClassName="my-modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Title ><span className="titleyee">{this.state.selectedResult.prodectName}</span></Modal.Title>
          <iframe src={this.state.selectedResult.prodectImg} title="lol"></iframe>
          <Modal.Body>
          <p>{this.state.selectedResult.description }</p> 
          <p>{this.state.selectedResult.price}</p>
          <p>{this.state.selectedResult.location}</p>
          </Modal.Body>
          {isAuthenticated ? (
            <AddCollection
              addmodels={this.addmodels}
            />
          ) : (
            <div className="warn">
              <span>
                Login to save and  Buy <LoginButton />
              </span>
            </div>
          )}
         
        </Modal>
      </div>
    );
  }
}

export default withAuth0(mainPage);