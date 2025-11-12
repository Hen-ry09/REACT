import React from 'react'

class Description extends React.Component {
  render() {
    return <p className="text-gray-600 mt-2">{this.props.text}</p>
  }
}

export default Description;