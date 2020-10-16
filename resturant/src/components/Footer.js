import React from 'react';

const footer = () => {

    return (  
        <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
				
					
					
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi saepe.
					<h5 className="section_footer__heading">
						About Us
					</h5>
					<p></p>

				</div>
				<div className="col-sm-4">
				
					
					<h5 className="section_footer__heading">
						Contact info
					</h5>
					<ul className="section_footer__info">
						<li>
							<i className="fas fa-map-marker-alt"></i> 1234 Altschul, New York, NY 10027-0000
						</li>
						<li>
							<i className="fas fa-phone"></i> +1 987 654 3210
						</li>
						<li>
							<i className="far fa-envelope"></i> <a href="mailto:admin@domain.com">admin@domain.com</a>
						</li>
					</ul>

				</div>
				<div className="col-sm-4">
				
					
					<h5 className="section_footer__heading">
						Opening hours
					</h5>
					<div className="section_footer__open">
						<div className="section_footer__open__days">Monday - Thursday</div>
						<div className="section_footer__open__time">10:00 AM - 11:00 PM</div>
					</div>
					<div className="section_footer__open">
						<div className="section_footer__open__days">Friday - Sunday</div>
						<div className="section_footer__open__time">12:00 AM - 03:00 AM</div>
					</div>

				</div>
			</div> 
			<div className="row">
				<div className="col-12">
				
					
					<div className="section_footer__copyright">
						© <span id="js-current-year">2020</span> Touché. All rights reserved.
					</div>

				</div>
			</div> 
		</div> 
	</footer>
    );
}
 
export default footer;