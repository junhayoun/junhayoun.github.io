import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Nav from "../common/Navv";
import About from "../components/About";
import Awards from "../components/Awards";
import CompletEdu from "../components/CompletEdu";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import introData from '../data/intro.json'; // JSON 파일 import
import { introState } from "../hook/recoilAtoms";
function Main() {
  const [intro,setIntro] = useRecoilState(introState);
  useEffect(() => {
    let resArray = []
    const {yName, yPhone, yEmail, yWorkList, yEduList, yCoEduList, ySkillList, yCerfList} = introData;
    console.log(yCoEduList)
    setIntro((prev)=>({
      ...prev,
      yName,
      yPhone,
      yEmail,
      yWorkList,
      yEduList,
      yCoEduList,
      ySkillList,
      yCerfList
    }));


  }, []);  
  return (
    <>
      <Nav />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Education yEduList={intro.yEduList}/>
        <hr className="m-0" />
        <CompletEdu yCoEduList={intro.yCoEduList}/>
        <hr className="m-0" />
        <Experience yWorkList={intro.yWorkList} />
        <hr className="m-0" />
        <Skills ySkillList={intro.ySkillList}/>
        <hr className="m-0" />
        <Awards yCerfList={intro.yCerfList}/>
        <Interests />
        <hr className="m-0" />
      </div>
    </>
  );
}

export default Main;
