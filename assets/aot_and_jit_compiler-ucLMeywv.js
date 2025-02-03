const n=`# AOT And Jit Compiler
프로그램을 실행하여 사용자가 사용하는 시간을 Runtime이라 하는데, 개발자가 작성한 코드는 이 Runtime에 컴퓨터가 해석 가능한 기계어로 변환이 되어 실행됩니다.
아래의 설명에서는 이러한 변환이 어느 시점에 일어나는지에 대해 설명합니다.

## JIT 컴파일러

JIT는 Just In Time의 약자로, 프로그램이 실행되는 시점에 컴파일을 하는 방식입니다.

전통적인 입장에서 컴퓨터 프로그램을 만드는 방법은 두 가지가 있는데, 인터프리트 방식과 정적 컴파일 방식으로 나눌 수 있다. 이 중 인터프리트 방식은 실행 중 프로그래밍 언어를 읽어가면서 해당 기능에 대응하는 기계어 코드를 실행하며, 반면 정적 컴파일은 실행하기 전에 프로그램 코드를 기계어로 번역한다.

JIT 컴파일러는 두 가지의 방식을 혼합한 방식으로 생각할 수 있는데, 실행 시점에서 인터프리트 방식으로 기계어 코드를 생성하면서 그 코드를 캐싱하여, 같은 함수가 여러 번 불릴 때 매번 기계어 코드를 생성하는 것을 방지한다.

최근의 자바 가상 머신과 .NET, V8(node.js)에서는 JIT 컴파일을 지원한다. 즉, 자바 컴파일러가 자바 프로그램 코드를 바이트코드로 변환한 다음, 실제 바이트코드를 실행하는 시점에서 자바 가상 머신이 바이트코드를 JIT 컴파일을 통해 기계어로 변환한다.
>  바이트코드는 기계어는 아니지만 가상 머신에 의해 기계어로 손쉽게 변환할 수 있는 코드이다. 


## AOT Compiler

AOT 컴파일(ahead-of-time compile)은 목표 시스템의 기계어와 무관하게 중간 언어 형태로 배포된 후 목표 시스템에서 인터프리터나 JIT 컴파일 등 기계어 번역을 통해 실행되는 중간 언어를 미리 목표 시스템에 맞는 기계어로 번역하는 방식을 지칭한다. 이런 중간 언어로는 자바 바이트코드, 공통 중간 언어(Common Intermediate Language), IBM System/38 혹은 IBM System i의 기술 독립적 머신 인터페이스(Technology Independent Machine Interface)가 있으며 학계에서도 마이클 프란즈(Michael Franz)가 제안해 오베론 시스템의 일부 구현에서 사용된 슬림 바이너리(Slim Binaries)와 같은 제안이 있었다.

일반적으로 중간 언어를 사용하는 시스템은 실행 시간에 JIT 컴파일과 같은 기법을 통해 실행 시에만 얻을 수 있는 프로그램 분석 정보를 사용하여 높은 성능을 달성할 수 있다. 특히 객체 지향 언어나 스크립트 언어 같이 동적인 언어인 경우 효과적이다. 하지만 실행 시 프로그램 분석과 컴파일을 함께 수행하는데 추가 메모리 및 CPU 사이클이 필요한 단점이 있다. 따라서 AOT 컴파일은 이에 대한 보완책으로 사용되고 있다.`;export{n as default};
