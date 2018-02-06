import React from 'react';


class ActionButton extends React.Component {
  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick();
    }
    if (this.props.redirectTo) {
      this.props.history.push(this.props.redirectTo);
    }
    event.preventDefault();
  }

  render() {
    return (
      <button type="button" className={this.props.className} onClick={this.handleClick.bind(this)}>
        {this.props.title}
      </button>
    );
  }
}

export default ActionButton;
