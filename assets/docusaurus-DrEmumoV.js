const n=`# Docusaurus

Docusaurus은 오픈 소스 문서 정적 웹사이트를 만들기 위한 도구입니다. 이것은 특히 기술 문서, 개발자 문서, 블로그, 제품 문서 등을 작성하고 배포하는 데 유용합니다.

Docusaurus의 주요 특징과 장점은 다음과 같습니다:
- **간단한 구성**: Docusaurus는 몇 가지 설정만으로도 문서 웹사이트를 만들 수 있습니다.
- **Markdown 사용**: Markdown을 사용하여 문서를 작성하고, Docusaurus는 이를 자동으로 HTML로 변환합니다.
- **커스터마이징**: 사용자 정의 가능한 테마와 레이아웃을 통해 외관을 개선할 수 있습니다.
- **검색 기능**: 검색 엔진을 통해 문서 내용을 쉽게 검색할 수 있습니다.
- **버전 관리**: 여러 버전의 문서를 지원하고, 이전 버전과 최신 버전을 비교할 수 있습니다.

Docusaurus은 Facebook에서 개발한 도구로 시작되었으며, 개발자 커뮤니티와 확장 가능한 플러그인 생태계를 갖추고 있습니다. 이를 사용하여 사용자 친화적이고 멋진 문서 웹사이트를 구축할 수 있습니다.

## Project structure

\`\`\`shell
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
\`\`\`

## Project structure rundown

- \`/blog/\`: 블로그 마크다운 파일이 들어 있습니다. 블로그 플러그인을 비활성화한 경우 디렉토리를 삭제할 수 있으며, 경로 옵션을 설정한 후 이름을 변경할 수도 있습니다. 자세한 내용은 블로그 가이드에서 확인할 수 있습니다.
- \`/docs/\`: 문서에 대한 마크다운 파일이 들어 있습니다.sidebars.js에서 문서 사이드바의 순서를 사용자 정의할 수 있습니다. 문서 플러그인을 비활성화한 경우 디렉토리를 삭제할 수 있으며, 경로 옵션을 설정한 후 이름을 변경할 수도 있습니다. 자세한 내용은 문서 가이드에서 확인할 수 있습니다.
- \`/src/\`: 페이지나 사용자 정의 React 컴포넌트와 같은 문서가 아닌 파일이 들어 있습니다. 문서가 아닌 파일을 엄격하게 이 디렉토리에 놓을 필요는 없지만, 중앙 집중식 디렉토리에 놓으면 린팅/처리를 수행해야 하는 경우 쉽게 지정할 수 있습니다.
- \`/src/pages\`: 이 디렉토리 내의 모든 JSX/TSX/MDX 파일은 웹사이트 페이지로 변환됩니다. 자세한 내용은 페이지 가이드에서 확인할 수 있습니다.
- \`/static/\`: 정적 디렉토리입니다. 여기에 있는 모든 내용은 최종 빌드 디렉토리의 루트로 복사됩니다.
- \`/docusaurus.config.js\`: 사이트 구성을 포함하는 구성 파일입니다. 이것은 Docusaurus v1의 siteConfig.js와 동일합니다.
- \`/package.json\`: Docusaurus 웹사이트는 React 앱입니다. 원하는 npm 패키지를 설치하고 사용할 수 있습니다.
- \`/sidebars.js\`: 문서에서 문서 사이드바의 문서 순서를 지정하는 데 사용됩니다.`;export{n as default};
