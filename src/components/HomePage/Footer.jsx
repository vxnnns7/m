function Footer() {
    return (
        <>
            <footer className="text-center text-white">
                <div className="container-fluid">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="./Footer Links/about-us.html">About Us</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!">Help</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="./Footer Links/contact-Us.html">Contact Us</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="my-5" />
                    <section className="mb-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    The PROGPUZZLE (Programming Language Quiz website) is a useful resource for programming
                                    learners.
                                    Recommended for anyone who wants to test their knowledge, learn a new language or
                                    strengthen their existing knowledge! 🌟
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center" id="icon">
                        <a className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer