import React from 'react'
import PolicyNotice from './PolicyNotice'
import {useSelector} from 'react-redux'
import PolicyTable from './PolicyTable'

const Home = () => {

  const {privacyAccepted, privacyCancelled} = useSelector(({privacy}) => privacy)
  const renderPrivacyCancelContent = () => {
    return (
      <div data-testid={'pleaseAcceptPrivacyStatement'} className="privacy-cancel-content">
        <h5>Please accept the Privacy Statement.</h5>
        <p>Sorry! content is not available without accepting the privacy policy.
          <br/>Please refresh this page and accept the privacy statement.</p>
      </div>
    )
  }

  return (
    <div className="home-content">
      <div className="bx--grid bx--grid--full-width bx--grid--no-gutter ">
        <div className="bx--row">
          <div className="bx--col">
            {!privacyAccepted && <PolicyNotice/>}
            {privacyAccepted && <PolicyTable/>}
            {privacyCancelled && renderPrivacyCancelContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home