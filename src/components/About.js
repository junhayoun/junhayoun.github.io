import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { routeState } from "../hook/recoilAtoms";

function About() {
    const [route,setRoute] = useRecoilState(routeState);
    const navigate = useNavigate();

    const handleClick = (e)=>{
        let portId = e.target.id;
        setRoute(portId);
        console.log(portId);
        console.log(route);
        navigate(`/detail`);
        window.scrollTo(0, 0);
    }

    return (
    <section className="resume-section" id="about">
        <div className="resume-section-content">
            <h1 class="mb-0">
            <span class="text-primary">P O R T F O L I O 2</span>
            </h1>
            <br />
            <h3 class="mb-0">
            <span class="text-primary">윤 준 하</span>
            </h3>
            <br />
            <div class="subheading mb-5">
            인천광역시 부평구 열우물로 90 부평더샵센트럴시티 111동 3602호
            <br />
            010.9364.8735
            <br />
            <a href="mailto:name@email.com">jh0362@naver.com</a>
            </div>
            <p className="lead mb-5">아래의 프로젝트 명을 클릭하시면 상세페이지로 이동합니다.</p>
            <div className="social-icons">
                <Button id="sol" className="subheading mb-2" variant="secondary" onClick={handleClick}>마이데이터 서비스 기반 SOL 머니버스</Button><br/>
                <Button id="iot" className="subheading mb-2" variant="secondary" onClick={handleClick}>IOT 기반사업장 센서 대시보드</Button><br/>
                <Button id="gis" className="subheading mb-2" variant="secondary" onClick={handleClick}>GIS 기반 통합 관제 플랫폼</Button><br/>
                <Button id="itm" className="subheading mb-2" variant="secondary" onClick={handleClick}>Tomcat과 Spring을 이용한 IT프로젝트 커뮤니티</Button><br/>
                <Button id="bcs" className="subheading mb-2" variant="secondary" onClick={handleClick}>안드로이드를 이용한 병원진료 예약 APP</Button><br/>
            </div>
        </div>
    </section>
    );
}

export default About;