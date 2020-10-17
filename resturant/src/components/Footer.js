import React from 'react';

const Footer = () => {

    return (  
        <footer className="footer bg-dark rounded">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
				
					<h5 className="text-warning font-weight-bold">
						About Us
					</h5>
					
						Lorem ipsum dolor sit amet, gwfaalöfa asd dswefk bdfes asfsfas 
					<p></p>

				</div>
				<div className="col-sm-4">
				
					
					<h5 className="text-warning font-weight-bold">
						Contact info
					</h5>
					<ul className="list-unstyled">
						<li>
							<i className="adress"></i> Drottningsgatan 4B 222 22 Malmö
						</li>
						<li>
							<i className="phone"></i> +4600000000
						</li>
						<li>
							<i className="email"></i> <a className="text-warning" href="mailto:admin@epices.com">admin@epices.com</a>
						</li>
					</ul>

				</div>
				<div className="col-sm-4">
				
					
					<h5 className="text-warning font-weight-bold">
						Opening hours
					</h5>
					<div className="open">
						<div className="days">Monday - Thursday</div>
						<div className="openTime">10:00 AM - 11:00 PM</div>
					</div>
					<div className="open2">
						<div className="days2">Friday - Sunday</div>
						<div className="openTime">12:00 AM - 03:00 AM</div>
					</div>

				</div>
			</div> 
			<div className="row">
				<div className="col-12">
				
					
					<div className="copyright">
						© <span id="year">2020</span> <span className="logo text-warning" id="logo">épices</span>. All rights reserved.
					</div>

				</div>
			</div> 
		</div> 
	</footer>
    );
}
 
export default Footer;