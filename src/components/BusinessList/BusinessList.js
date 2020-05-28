import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{this.props.businesses.map((business) => {
					return <Business key={business.id} business={business} />;
				})}
				<h3 id="title">SEARCH FOR BUSINESSES IN THE CITY OF YOUR CHOICE</h3>
			</div>
		);
	}
}

export default BusinessList;
