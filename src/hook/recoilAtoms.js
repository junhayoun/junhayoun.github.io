import { atom } from 'recoil';

//**전역번수로 쓰실 거면 이렇게 선언하여 리턴해주세요**/

export const slideState = atom({
  key: 'slideState',
  default: [],
});

export const routeState = atom({
  key: 'routeState',
  default: '',
});

export const prjDetailState = atom({
  key: 'prjDetailState',
  default: {
    "pfId": '',
    "pfName": '',
    "pfDesc": '',
    "pfDate": '',
    "pfPeople": '',
    "pfFeat": '',
    "pfSlide": [],
    "pfAcPic": [],
    "pfSkill": '',
    "pfRole": [],
    "pfProd": [],
    "pfHard": [],
    "pfBenef": []
  },
});

export const introState = atom({
  key: 'introState',
  default: {
    "yName": '',
    "yPhone": '',
    "yEmail": '',
    "yWorkList": [],
    "yEduList": [],
    "yCoEduList": [],
    "ySkillList": [],
    "yCerfList": []
  },
});
