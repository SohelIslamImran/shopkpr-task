import { Button, Card, Col, Row } from "react-bootstrap";

const Admin = () => {
    return (
        <section className="admin">
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <nav>Dashboard // Admin</nav>
                    <p>Add, edit or delete users</p>
                </div>
                <div>
                    <Button>
                        <i className="bi bi-grid-1x2-fill" />
                        Dashboard
                    </Button>
                </div>
            </div>
            <div className="mt-4">
                <h4>Summary</h4>

                <Row className="mb-4 pe-0">
                    <Col lg={3} md={6}>
                        <Card>
                            <Card.Body className="px-3 py-4-5">
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <div className="stats-icon purple">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="text-muted">Total Earned</h6>
                                        <h5 className="mb-0 bold">1152.00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6}>
                        <Card>
                            <Card.Body className="px-3 py-4-5">
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <div className="stats-icon blue">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="text-muted">Exams</h6>
                                        <h5 className="mb-0 bold">1843.00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6}>
                        <Card>
                            <Card.Body className="px-3 py-4-5">
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <div className="stats-icon green">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="text-muted">Courses</h6>
                                        <h5 className="mb-0 bold">83430.00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className="pe-0">
                        <Card>
                            <Card.Body className="px-3 py-4-5">
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <div className="stats-icon red">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="text-muted">Books</h6>
                                        <h5 className="mb-0 bold">82930.00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Admin;
