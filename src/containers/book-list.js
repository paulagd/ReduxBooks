import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //la que envia funcio a tots els reducers

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick = {() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
  //  console.log(this.props.asdf); // -> 123
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookLiST
  return{
    books: state.books //state has 2 properties(books and activebook)
  };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be  passed to all our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch );
}

//promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
