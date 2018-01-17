import React from 'react';

import {
  Page
} from 'react-onsenui';


import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';
import Form from '../containers/ProductListing';
import Navigation from '../components/Navigation'

const MainPage = ({ navigator }) => (
  // <Page renderToolbar={() => <NavBar title='Onsen Weather' navigator={navigator} />}>
  <Navigation >
    <Form />
  </Navigation>
  // </Page>
);

export default MainPage;
