import React from 'react';

import Form from 'react-bootstrap/Form';
class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHorn: this.props.searchHorn,
    }
  }


  render() {
    return (
      <div >
        <Form>


          <Form.Label>Filter By Horns</Form.Label>
          <Form.Control onChange={this.props.handleHorns } as="select">
            {console.log(this.props.handleHorns)}
            <option value="0">0</option>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Control>
        </Form>

      </div>
    )
  }
}

export default SelectedBeast;