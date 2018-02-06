import React from 'react';


class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onValueChanged(event.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input className="form-control" onChange={this.handleChange} id={this.props.id} value={this.props.value} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputForm;
