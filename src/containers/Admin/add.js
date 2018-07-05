import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {addBook, clearNewBook} from '../../actions'

class AddBook extends Component {

  state = {
    formdata: {
      name: '',
      author: '',
      review: '',
      pages: '',
      price: ''
    }
  }
  handleInput = (event,name) =>{
    const newFormData = {
      ...this.state.formdata
    }
    newFormData[name] = event.target.value
    this.setState({
      formdata: newFormData
    })
  }

  showNewBook = (book) => (
    book.post?
    <div className="conf_link">
      Cool <Link to={`/books/${book.bookId}`}>
        Click the link to show post
      </Link>
    </div> : null 
  )
  submitForm = (e) =>{
    e.preventDefault();
    this.props.dispatch(addBook({
      ...this.state.formdata,
      ownerId: this.props.user.login.id
    }))
  }

  componentWillUnmount() {
    this.props.dispatch(clearNewBook())
  }
  
  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
        <h2>Add a review</h2>
        <div className="form_element">
          <input 
          type="text"
          placeholder="Enter name"
          value={this.state.formdata.name}
          onChange={(event)=>this.handleInput(event,'name')}
          />
        </div>
        <div className="form_element">
          <input 
          type="text"
          placeholder="Enter author"
          value={this.state.formdata.author}
          onChange={(event)=>this.handleInput(event,'author')}

          />
        </div>
        <div className="form_element">
          <input 
          type="number"
          placeholder="Enter pages"
          value={this.state.formdata.pages}
          onChange={(event)=>this.handleInput(event,'pages')}

          />
        </div>

        <textarea 
          value={this.state.formdata.review}
          onChange={(event)=>this.handleInput(event,'review')}

        >
        </textarea>
        <div className="form_element">
          <select
          value={this.state.formdata.rating}
          onChange={(event)=>this.handleInput(event,'rating')}

          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </select>
        </div>
        <div className="form_element">
          <input 
          type="number"
          placeholder="Enter price"
          value={this.state.formdata.price}
          onChange={(event)=>this.handleInput(event,'price')}
          />
        </div>
        <button type="submit">Add review</button>
        {
          this.props.books.newbook ?
          this.showNewBook(this.props.books.newbook)
          : null
        }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AddBook)