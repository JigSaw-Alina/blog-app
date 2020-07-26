import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAlphabetical} from '../actions/filters';

class BlogListFilters extends React.Component {

    textChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    selectChange = (e) => {
      if (e.target.value === 'date') {
        this.props.sortByDate()
      } else if (e.target.value === 'alphabeticaly') {
        this.props.sortByAlphabetical()
      }
    };
    render() {
       return (
        <div>
          <input 
            type="text" 
            placeholder="search"
            value={this.props.filters.text}
            onChange={this.textChange}
          />
          <select 
            onChange={this.selectChange}
           >
            <option value="date">sort by date</option>
            <option value="alphabeticaly">sort by Alphabeticaly</option>
          </select>
        </div>
       );
    }
};


const mapStateToProps = (state) => ({ filters: state.filters });
const mapDispatchToProps = (dispatch) => ({ 
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAlphabetical: () => dispatch(sortByAlphabetical())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters);