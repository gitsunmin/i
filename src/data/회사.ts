import { 프로젝트, 프로젝트들 } from './프로젝트';

import marketboro_logo from '@/assets/logos/marketboro_logo.webp';
import korens_logo from '@/assets/logos/korens_logo.webp';

export const 회사_key_목록 = [
  'marketboro',
  'korens',
] as const;

export type 회사_key = typeof 회사_key_목록[number];

type 회사 = {
  id: 회사_key;
  이름: string;
  로고: string;
  소개: string;
  주의?: string;
  직책: string;
  기간: string;
  프로젝트들: 프로젝트[];
  링크들: {
    label: string;
    url: string;
  }[];
};

export const 경력: 회사[] = [
  {
    id: 'marketboro',
    이름: '(주) 마켓보로',
    로고: marketboro_logo,
    소개: `(주) 마켓보로는 B2B 식자재 유통 시장에서 불필요한 중간 과정을
          최소화하여 비용을 절감하고 효율을 증대시키는 엔터프라이즈 푸드테크
          플랫폼을 제공합니다. 또한 사업자 대상의 오픈 마켓인 식봄을
          운영하고 있습니다.
          제 역할은 프론트엔드 개발자로서, 주로 React.js와 Nuxt.js를
          사용하여 웹과 모바일 어플리케이션의 사용자 인터페이스를 개발하는
          것입니다. 이를 통해 사용자 경험을 향상시키고, 다양한
          디바이스에서의 접근성을 보장합니다. 최근에는 PHP로 개발되어진
          식봄을 Next.js로 전환하는 업무를 하고 있습니다.`,
    기간: '2020.10 ~ ',
    직책: '프론트엔드 개발자',
    프로젝트들: 프로젝트들.filter((프로젝트) => 프로젝트.회사key === 'marketboro'),
    링크들: [
      {
        label: '마켓보로 웹사이트',
        url: 'https://www.marketboro.com',
      },
      {
        label: '식봄',
        url: 'https://www.foodspring.co.kr',
      },
      {
        label: '마켓봄 프로',
        url: 'https://pro.marketbom.com',
      }
    ],
  },
  {
    id: 'korens',
    이름: '(주) 코렌스',
    로고: korens_logo,
    소개: `(주) 코렌스는 자동차 부품 제조사로, 주로 자동차 엔진 부품을 생산하는 재조업 업체입니다. 하지만, 소프트웨어에도 관심을 가지고 소프트웨어 사업부를 개설하여 운영하였습니다. 이 
          부서가 제가 처음으로 프론트엔드 개발자로서 일을 시작한 곳입니다.
          새로 시작한 사업이었기 때문에 기존의 개발환경이나 프로세스가 없어
          처음부터 새로 만들어야 했고, 덕분에 
          프론트엔드 개발(Vue.js) 역량 뿐만 아니라
          백엔드 개발, AWS Amplify 등 다양한 경험을 쌓을 수
          있었습니다.`,
    직책: '프론트엔드 개발자',
    기간: '2019.07 ~ 2020.10',
    프로젝트들: 프로젝트들.filter((프로젝트) => 프로젝트.회사key === 'korens'),
    링크들: [{
      label: '코렌스 웹사이트',
      url: 'http://www.korens.com',
    }],
  }
];
