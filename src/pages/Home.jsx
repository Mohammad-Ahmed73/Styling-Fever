import React from 'react';
import Banner from '../components/Banner';
import ListingSection from '../components/ListingSection';
import ExclusiveDeals from '../components/ExclusiveDeals';
import JoinUs from '../components/JoinUs';
import SearchFrom from '../components/SearchFrom';
import ProductSlider from '../components/ProductSlider';
import CollectionProduct from '../components/CollectionProduct'
import SignUpModal from '../components/SignUpModal';

function Home() {
  return (
    <>
        <Banner />
        <SearchFrom />
        <ListingSection />
        <JoinUs />
        <ExclusiveDeals />
        <ProductSlider />
        <CollectionProduct />
        <SignUpModal />
    </> 
  )
}

export default Home
