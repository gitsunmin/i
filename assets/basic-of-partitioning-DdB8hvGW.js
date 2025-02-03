const n=`# Basic Of Partitioning

서비스의 규모가 커지게 되면, 테이블의 수, 데이터의 수가 증가하게 되고, 이로 인하여 Database의 성능이 저하되게 됩니다. 또, 한 테이블이 가용할 수 없는 상태가 되어버린다면, 전체 데이터에 문제가 발생하여 서비스에 큰 영향을 미칠 수 있습니다. 이러한 경우에는 Database의 파티셔닝(Partitioning)을 사용하여 성능과 가용성을 지킬 수 있습니다. 그렇다면, 이 파티셔닝이 무엇일까요?

## 파티셔닝 (Partitioning)
파티셔닝은 논리적인 데이터를 다 수의 entity로 분할하는 행위를 말하며, 행으로 파티션을 나누는 \`수평 파티셔닝\`, 컬럼별로 파티션을 나누는 \`수직 파티션\`이 있습니다. 일반적으로는 수평 파티셔닝을 사용합니다.

- 장점
    - query, update 등 데이터를 다룰 경우에 성능이 좋아진다.
    - 파티션 별로 백업 및 복구가 가능하기 때문에, 가용성에 이점이 있다.
- 단점
    - 테이블간의 join 비용이 추가된다.
    - 데이터를 추가할 경우에 어떤 파티션에 추가할 것인지에 대한 연상 작업이 존재한다.

예시
- 파티션의 개념을 요약하자면 데이터를 나누는 것입니다. 그렇기 때문에, 여러가지 방법으로 데이터를 나눌 수 있고, 그에 따라서 이름이 존재합니다. 그 중에서 벙위에 따라서 파티션을 생성하는 범위 파티셔닝의 예시를 아래 적어 보았습니다.

\`\`\`sql
CREATE TABLE t1 (
    id INT,
    year_col INT
)
PARTITION BY RANGE (year_col) (
    PARTITION p0 VALUES LESS THAN (1991),
    PARTITION p1 VALUES LESS THAN (1995),
    PARTITION p2 VALUES LESS THAN (1999)
);
\`\`\`



`;export{n as default};
