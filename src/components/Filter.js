import React from 'react';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClause: ""
    };
  }

  render() {
    return (
      <form>
        <input className="form-control" placeholder="Search"
          onChange={event => {
            var filterText = event.target.value;
            this.setState({
              filterClause: filterText
            });
            this.props.handleFilter(filterText);
          }}
        />
      </form>
    );
  }
}

export default Filter;
