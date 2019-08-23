import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    studentname: "",
    points: "",
    qrcode: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", qrcode: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    //var json = {
      //studentname : this.state.studentname,
      //points : this.state.points
  //};
  
    //var qr = require('qr-image');
    //var mongoose = require('mongoose');
    //var image = qr.imageSync(JSON.stringify(json), { type: 'png', size : 10 });
  //console.log(image);
  //var Grid = require('gridfs');
  //var gfs = Grid(mongoose.connection.db, mongoose.mongo);
  //var fileId = new mongoose.mongo.ObjectId();
  
  //gfs.writeFile({_id: fileId, content_type : 'image/png'}, image, function (err, file) {
    //console.log(file);
    
  //});

    if (this.state.studentname && this.state.points) {
      API.saveBook({
        studentname: this.state.studentname,
       points: this.state.points,
        qrcode: this.state.image
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Students to Class</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.studentname}
                onChange={this.handleInputChange}
                name="studentname"
                placeholder="Student Name"
              />
              <Input
                value={this.state.points}
                onChange={this.handleInputChange}
                name="points"
                placeholder="Points"
              />
              <FormBtn
                disabled={!(this.state.points && this.state.studentname)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Students in My Class</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.studentname} : {book.points} points
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
