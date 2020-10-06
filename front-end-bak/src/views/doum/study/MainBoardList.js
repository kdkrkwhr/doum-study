import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">신규 스터디(New)</h3>
          <div id="typography">
            <Row>
              <Col md="12">
                <div>
                  <span className="h5">
                    React.js 모집
                  </span>
                </div>
                <div>
                  <span className="h5">
                    영어 회화 스터디
                  </span>
                </div>
                <div>
                  <span className="h5">
                    알고리즘 대비
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
            <h3 className="title">내 관심 모임(영어)</h3>
            <div id="typography">
              <Row>
               <Col md="12">
                <div>
                  <span className="h5">
                    초보 영어 회화
                  </span>
                </div>
                <div>
                  <span className="h5">
                    영어 회화 스터디
                  </span>
                </div>
                <div>
                  <span className="h5">
                    토익 대비 공부
                  </span>
                </div>
                </Col>
              </Row>
            </div>
          <div className="space-50"></div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
