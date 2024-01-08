import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Nav from "../common/Navv";
import portDetail from '../data/portDetail.json'; // JSON 파일 import
import { prjDetailState, routeState, slideState } from "../hook/recoilAtoms";

function Detail() {
    const [route,setRoute] = useRecoilState(routeState);
    const [slide,setSlide] = useRecoilState(slideState);
    const [prjDetail,setPrjDetail] = useRecoilState(prjDetailState);
    const navigate = useNavigate();
    const redirect = ()=> {
      navigate(`/`);
    }

    /** useEffect를 선언하지 않으면 매법 선언된것들이 호출된다 **/
    useEffect(() => {
      let resArray = []
      if(route=='bcs'){
        resArray = portDetail.filter((item)=>item.pfId=='bcs');
      }
      else if(route=='itm'){
        resArray = portDetail.filter((item)=>item.pfId=='itm');
      }
      else if(route=='iot'){
        resArray = portDetail.filter((item)=>item.pfId=='iot');
      }
      else if(route=='gis'){
        resArray = portDetail.filter((item)=>item.pfId=='gis');
      }
      else if(route=='sol'){
        resArray = portDetail.filter((item)=>item.pfId=='sol');
      }
      
      if (resArray.length === 0) {
        // resArray가 비어있을 경우의 처리
        redirect(); // 예를 들어, 메인 페이지로 리디렉트
        return; // useEffect 함수를 빠져나감
      }
      const [resData] = resArray;
      const {pfId, pfName, pfDesc, pfDate, pfPeople, pfFeat, pfSlide, pfSkill, pfRole, pfProd, pfHard, pfBenef, pfAcPic} = resData;
      setPrjDetail((prev)=>({
        ...prev,
        pfId,
        pfName,
        pfDesc,
        pfDate,
        pfPeople,
        pfFeat,
        pfSlide,
        pfSkill,
        pfRole,
        pfProd,
        pfHard,
        pfBenef,
        pfAcPic
      }));
    }, [route]);
    return (
      <section className="detail-section" id="about">
      <Nav />
      <div className="row h-25">
          <div className="col-lg-7 h-25">
          <h4 className="mb-4">{prjDetail.pfName}</h4>
          <h3 className="mb-3">{prjDetail.pfDesc}</h3>
          <div className="subheading mb-2">{prjDetail.pfDate}</div>
          <Carousel className="mb-2">
          {prjDetail.pfSlide.map((item, index) => (
              <Carousel.Item>
                  <img
                      className="d-block w-100 h-25"
                      src={item.src} // 첫 번째 이미지 경로
                      alt={`Slide ${index + 1}`}
                  />
                  <Carousel.Caption>                
                      <h5>{item.title}</h5>
                  </Carousel.Caption>
              </Carousel.Item>
            ))}  
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel>
          {prjDetail.pfAcPic.map((item, index) => (
              <Carousel.Item>
                  <img
                      className="d-block w-100 h-25"
                      src={item.src} // 첫 번째 이미지 경로
                      alt={`Slide ${index + 1}`}
                  />
                  <Carousel.Caption>                
                      <h5>{item.title}</h5>
                  </Carousel.Caption>
              </Carousel.Item>
            ))}  
          </Carousel>
          </div>
          <div className="col-lg-5 h-25">
          <div className="resume-section-content">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">사 용 기 술</h4>
                      <p>{prjDetail.pfSkill}</p>
                  </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">참 여 인 원</h4>
                      <p>{prjDetail.pfPeople}</p>
                  </div>              
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">설 명</h4>
                      <p>{prjDetail.pfFeat}</p>
                  </div>              
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">맡 은 역 할</h4>
                      {prjDetail.pfRole.map((item, index) => (
                      <p>{` -  ${item}`}</p>
                      ))}
                  </div>              
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">진 행 과 정</h4>
                      {prjDetail.pfProd.map((item, index) => (
                      <p>{`${index+1} ) ${item}`}</p>
                      ))}
                  </div>              
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">특 이 사 항</h4>
                      {prjDetail.pfHard.map((item, index) => (
                      <p>{`${index+1} ) ${item}`}</p>
                      ))}
                  </div>              
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h4 className="mb-2 text-primary">얻 은 점</h4>
                      {prjDetail.pfBenef.map((item, index) => (
                      <p>{`${index+1} ) ${item}`}</p>
                      ))}
                  </div>              
              </div>
          </div>
            </div>
      </div>
      </section>
    
    );
  }
  
  export default Detail;
  