// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//     return (
//         <footer style={{ backgroundColor: '#ffd4d1' }} className="py-12">
//             <div className="container mx-auto px-4 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     <div className="mb-6">
//                         <Link to="/" className="flex items-center">
//                             <img
//                                 src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                                 className="h-16"
//                                 alt="Logo"
//                             />
//                         </Link>
//                     </div>
//                     <div className="text-gray-900">
//                         <h2 className="text-lg font-semibold mb-4">Resources</h2>
//                         <ul>
//                             <li className="mb-2">
//                                 <Link to="/" className="hover:text-gray-700">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/about" className="hover:text-gray-700">
//                                     About
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="text-gray-900">
//                         <h2 className="text-lg font-semibold mb-4">Follow us</h2>
//                         <ul>
//                             <li className="mb-2">
//                                 <a
//                                     href="https://github.com/hiteshchoudhary"
//                                     className="hover:text-gray-700"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                 >
//                                     Github
//                                 </a>
//                             </li>
//                             <li>
//                                 <Link to="/" className="hover:text-gray-700">
//                                     Discord
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="text-gray-900">
//                         <h2 className="text-lg font-semibold mb-4">Legal</h2>
//                         <ul>
//                             <li className="mb-2">
//                                 <Link to="#" className="hover:text-gray-700">
//                                     Privacy Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="#" className="hover:text-gray-700">
//                                     Terms &amp; Conditions
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <hr className="my-8 border-gray-300" />
//                 <div className="text-center text-gray-900">
//                     <p className="mb-4">
//                         © 2023{' '}
//                         <a href="https://hiteshchoudhary.com/" className="hover:text-gray-700">
//                             hiteshchoudhary
//                         </a>
//                         . All Rights Reserved.
//                     </p>
//                     <div className="flex justify-center space-x-5">
//                         <Link to="#" className="text-gray-900 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                 {/* Add Facebook icon SVG */}
//                             </svg>
//                         </Link>
//                         <Link to="#" className="text-gray-900 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                 {/* Add Discord icon SVG */}
//                             </svg>
//                         </Link>
//                         <Link to="#" className="text-gray-900 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                 {/* Add Twitter icon SVG */}
//                             </svg>
//                         </Link>
//                         <Link to="#" className="text-gray-900 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                 {/* Add GitHub icon SVG */}
//                             </svg>
//                         </Link>
//                         <Link to="#" className="text-gray-900 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                                 {/* Add Dribbble icon SVG */}
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We are a company dedicated to providing the best services in the industry. Our commitment is to ensure customer satisfaction at all times.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Information</h5>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 7890</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h5>Newsletter</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p>
                            <a href="/about" className="text-light">About</a> | <a href="/contact" className="text-light">Contact</a> | <a href="/privacy" className="text-light">Privacy Policy</a> | <a href="/terms" className="text-light">Terms of Service</a>
                        </p>
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
