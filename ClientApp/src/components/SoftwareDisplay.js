import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { filterSoftwareList } from './SoftwareFilter';
import { SoftwareList } from './SoftwareList';
import Container from 'reactstrap/lib/Container';

export class SoftwareDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.state = { searchQuery: '', softwareList: [], loading: true };
  }

  componentDidMount() {
    this.getSoftwareList();
  }

  filterList(query) {
    this.setState(state => ({
      searchQuery: query,
    }))
  }

  renderSoftwareList() {
    return (
      <Container>
          <Input 
          placeholder="Version" 
          value={this.state.searchQuery}
          onChange={e => this.filterList(e.target.value)}>
          </Input>
        <SoftwareList softwareList={filterSoftwareList(this.state.softwareList, this.state.searchQuery)}></SoftwareList>
      </Container>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderSoftwareList();

    return (
      <div>
        <h1 >Software Version</h1>
        <p>Check for the latest versions of our software</p>
        {contents}
      </div>
    );
  }

  async getSoftwareList() {
    const response = await fetch('software');
    const data = await response.json();
    console.log(data);
    this.setState({ softwareList: data, loading: false });
  }
}
