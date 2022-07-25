import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
// import {Container, Row, Col} from 'react-bootstrap/esm/index'


// function ArticleTeaser (props){
function ArticleTeaser ({id, title, created_date, clickFunction }){
    return(
        <Container>
            <hr/>
            <Row>
                <Col lg='8'>
                    <h2>
                    <Link to={`/articles/${id+1}`}> {title}</Link>
                    {/* adding one because having a 0 (for first article) is not RESTful format */}
                    </h2>
                </Col>
                <Col lg='4'>
                    <p>{created_date}</p>
                </Col>
            </Row>
        </Container>
    )
}
export default ArticleTeaser;