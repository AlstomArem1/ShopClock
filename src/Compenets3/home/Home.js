import "./Home.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import es1 from "./clock1.jpg";
import es2 from "./clock2.webp";
import es3 from "./clock3.jpg";
import { IoMdLaptop } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { BsSmartwatch, BsFacebook } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { FaCcAmazonPay } from "react-icons/fa";
import { AiFillCamera, AiTwotoneMail, AiFillYoutube } from "react-icons/ai";
import { FcMultipleSmartphones } from "react-icons/fc";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    const { today, sec, hour, minet, time, addCart } = useContext(AppContext);
    return (
        <div className="Home">
            <div className="Home_web1">
                <div className="WordPress">
                    <h1 className="animate__animated animate__bounceInDown">WordPress Unleashed</h1>
                    <p>Excellent<span></span> 22,491 reviews</p>
                    <p className="animate__animated animate__backInLeft">Ruizu M19 music player watch (16Gb - Bluetooth - Connect App) will bring a long standby time of up to 36 hours / Varies according to each use purpose and possesses a high-quality, attractive magnetic charging design. increase the ability to charge faster</p>
                    <Link to="/products">
                        <button>UnLock Product</button>
                    </Link>
                </div>
                <div className="VideoPress">
                    <Container>
                        <div className="Video">
                            <iframe src="https://www.youtube.com/embed/6cgATxUO7Og?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="Home_web3">
                <div className="sp_icon">
                    <i><IoMdLaptop /></i>
                    <i><FaMobile /></i>
                    <i><BsSmartwatch /></i>
                    <i><BsHeadset /></i>
                    <i><FaCcAmazonPay /></i>
                    <i><AiFillCamera /></i>
                    <i><FcMultipleSmartphones /></i>
                    <i><BsFillEnvelopeAtFill /></i>
                </div>
            </div>
            <div className="Home_web2">
                <div className="imges1">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={es1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={es1}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={es1}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="imges2">
                    <img src={es2} alt="" />
                    <img src={es3} alt="" />
                </div>
            </div>
            <div className="Home_web4">
                <div className="clocked">
                    <h1>{today}</h1>
                    <h1>{hour}</h1>
                    <h1>{minet}</h1>
                    <h1>{time}</h1>
                </div>
            </div>
            <div className="Home_web5">
                <div className="nox">
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="rol">
                        <div className="rol_icon">
                            <i><IoMdLaptop /></i>
                        </div>
                        <div className="blog_rol">
                            <h1>Custimer Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <button>View Shortcodes...</button>
                </div>
            </div>
            <hr></hr>
            <div className="footer">
                <div className="footer_end">
                    <div className="col">
                        <div className="mart">
                            <i><FaShoppingCart /></i><h1>Mart</h1>
                        </div>
                        <div className="blog_mart">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
                            <span><BsFacebook /> <AiTwotoneMail />  <AiFillYoutube /></span>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Footer Links</h1>
                        <p>>> Home</p>
                        <p>>> Privacy & Policy</p>
                        <p>>> Terms & Cordition</p>
                        <p>>> Contact US</p>
                    </div>
                    <div className="col">
                        <h1>Recent Post</h1>
                        <div className="imgesl-icon">
                            <img src={es3} />
                            <span>
                                <p>How to desig effective arts?</p>
                                <small>jan 02-2019</small>
                            </span>
                        </div>
                        <div className="imgesl-icon">
                            <img src={es3} />
                            <span>
                                <p>How to desig effective arts?</p>
                                <small>jan 02-2019</small>
                            </span>
                        </div>
                        <div className="imgesl-icon">
                            <img src={es3} />
                            <span>
                                <p>How to desig effective arts?</p>
                                <small>jan 02-2019</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}