// Import modules ==============================================================
import React from 'react';
import PropTypes from 'prop-types';

// Import components ===========================================================
import {Highlight} from 'react-instantsearch/dom';
import {Table} from 'semantic-ui-react';
import {connectHits} from 'react-instantsearch/connectors';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({redirect: true, id});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={`/client/${this.state.id}`} />;
    }

    return (
      <Table.Body>
        {this.props.hits.map((hit) => {
          return (
            <Table.Row
              key={hit.id}
              onClick={() => {
                this.handleClick(hit.id);
              }}
            >
              <Table.Cell>{hit.client_id}</Table.Cell>
              <Table.Cell>
                {hit.first_name} {hit.last_name}
              </Table.Cell>
              <Table.Cell>{hit.phone_number}</Table.Cell>
              <Table.Cell collapsing>{hit.email}</Table.Cell>
              <Table.Cell collapsing>
                IMPLEMENT ME
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    );
  }
}

SearchResults.displayName = 'Partial/Search/SearchResults';

export default connectHits(SearchResults);
