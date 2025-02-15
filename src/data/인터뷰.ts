type 링크 = {
    __t: 'Link';
    라벨: string;
    경로: string;
}

export type 채팅 = {
    이름: 'James' | 'Sunmin';
    컨텐츠: string;
    확장?: 링크;
}

export const 인터뷰: 채팅[] = [
    {
        이름: 'James',
        컨텐츠: '안녕하세요! 개발자 김선민님의 페이지에 오신 것을 환영합니다.',
    },
    {
        이름: 'James',
        컨텐츠: '이 페이지를 통해서 선민님에 대해 더 자세한 정보를 얻을 수 있도록 도와드리겠습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '가장 먼저, 간단한 인터뷰를 준비했습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '안녕하세요. 선민님! ',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '넵, 안녕하세요!',
    },
    {
        이름: 'James',
        컨텐츠: '선민님은 어떤 개발자인가요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '저는 프론트엔드 개발자로, 최근에는 React를 주로 사용하고 있습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '최근에는? 그렇다면, 다른 것을 사용한 경험이 있나요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '아 넵, 저는 Vue.js로 처음 프론트엔드 개발자의 길을 걸었고, Svelte, Flutter를 사용하여 간단한 작업을 한 적이 있습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '그렇군요. 선민님은 혹시 전공자이신가요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '아 아뇨. 저는 물리학을 전공했습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '오 혹시 어쩌다가 개발자가 되셨나요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '네, 물리학을 전공하면서 전산을 위해서 Python을 사용하는 수업을 듣다가 프로그래밍에 관심을 가지게 되었고, 혼자 공부도 하고, 학원도 다니면서 개발자를 준비했습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '어떤점에 매력을 느끼게 되었나요?'
    },
    {
        이름: 'Sunmin',
        컨텐츠: '무엇인가 만들고, 바로 확인할 수 있다는 점에 매력을 느낀 것 같습니다.'
    },
    {
        이름: 'James',
        컨텐츠: '그렇군요. 새로운 도전을 하는 것이 쉽지 않았을 것 같은데, 두렵지는 않으셨나요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '많이 고민했지만, 결국 내가 가장 흥미를 느끼는 일에 시간을 투자하는 것이 맞다고 생각했습니다.',
    },
    {
        이름: 'James',
        컨텐츠: '큰 결심을 하셨군요. 그렇다면, 선민님은 앞으로 어떤 개발자가 되고 싶으신가요?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '흠...',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '저는 프론트엔드 개발자로서는 당연히 더 많이 알고, UI/UX에 대한 고민도 많이 하는 개발자가 되고 싶어요.',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '하지만, 소프트웨어를 개발하는 사람으로서 더 많은 것을 알고 싶어요. 가깝게는 백엔드나 데이터베이스부터 사업이나 디자인에 대해서도 배우고 싶어요.',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '물론, 그것들을 모두 알기는 어렵겠지만, 협업을 하면서, 다양한 분야의 사람들과 소통하면서, 더 많은 것을 배우고 싶어요.',
    },
    {
        이름: 'James',
        컨텐츠: '아하, 기본적으로 프론트엔드 개발 지식 뿐만 아니라, 협업을 통해서 소프트웨어 개발이라는 것에 대해서 더 깊이 이해하고 활용할 줄 아는 개발자가 되고 싶으신 거군요.',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '헐 네 맞아요. 정리를 잘 하시네요.',
    },
    {
        이름: 'James',
        컨텐츠: '정리가 잘 되었나요? 감사합니다.',
    },
    {
        이름: 'James',
        컨텐츠: '지금까지 선민님의 개발자를 시작하게 된 이유와 앞으로의 목표에 대해서 이야기를 나누어 봤습니다. 감사합니다.',
    },
    {
        이름: 'James',
        컨텐츠: '더 자세한 내용들은 다른 메뉴에서 확인할 수 있는거겠죠?',
    },
    {
        이름: 'Sunmin',
        컨텐츠: '네 맞아요. 아래 링크를 눌러보세요.',
        확장: { __t: 'Link', 경로: '/', 라벨: '링크' },
    },
];