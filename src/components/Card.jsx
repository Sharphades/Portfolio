
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

export default function Card() {
    return(
        <div className="col-12">
            <ScrollAnimation animateIn="slideInLeft">
                    <div className="card">
                        <img
                            src="https://via.placeholder.com/800x400"
                            className="card-img-top"
                            alt="Card image"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Full Width Card</h5>
                            <p className="card-text">
                                This card takes up the full width of the container on all screen sizes.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
    );
}