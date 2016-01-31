import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss';

let cx = classNames.bind(styles);

export default class Input extends React.Component {

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  constructor (props) {
    super(props);

    this.state = {
      value: this.props.value || '',
      isFocused: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value}); // update state when props change
  }

  handleChange (e) {
    this.setState({value: e.target.value});
    this.props.onChange(e.target.value);
  }

  onFocus () {
    this.setState({isFocused: true});
  }

  onBlur () {
    this.setState({isFocused: false});
  }

  render () {
    let label = cx({
      labelActive: this.state.isFocused || this.state.value,
      label: !this.labelActive,
    });

    return (
      <div className={styles.root}>
        <input
          className={styles.input}
          type={this.props.type}
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()} />
        <label className={label}>{this.props.label}</label>
      </div>
    );
  }
};
