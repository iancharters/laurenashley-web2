// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import { SearchBox, Pagination } from 'react-instantsearch/dom';
import SearchResults from './SearchResults';
import { Table } from 'semantic-ui-react';
import { InstantSearch } from 'react-instantsearch/dom';

// Import config ===============================================================
import {
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_KEY,
  CLIENT_INDEX,
} from 'config/algolia.config';

const SiteSearch = () => (
  <div className="container">
    <InstantSearch
      appId={ALGOLIA_APP_ID}
      apiKey={ALGOLIA_SEARCH_KEY}
      indexName={CLIENT_INDEX}
    >
      <SearchBox /> <br />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>Client ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <SearchResults />
      </Table>
      <Pagination />
    </InstantSearch>
  </div>
);

SiteSearch.displayName = 'Partial/Search/SiteSearch';

export default SiteSearch;
