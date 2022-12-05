## 개발 목표

- React를 사용해 컴포넌트 단위로 쪼개 개발한다.
- JSON 서버를 활용하여 API 통신을 통해, To Do List를 가져오고, 수정한다.
- React-Query를 통해 전역 관리 및 컴포넌트를 동적으로 업데이트 시킨다.
- State가 변경됨에 따라  UI를  변경한다.
- CSS / SCSS를 사용하지 않고, Styled Components를 활용한다.

## 사용한 라이브러리

- React
- React-query
- Styled Components
- axios
- bootstrap

---

## 레이아웃

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/971b0731-0200-4991-a1d3-774560dfb342/Untitled.png)

- Header , Add to do Input, List 세가지 영역으로 나뉜다.
- Header에 Project 제목 입력 가운데 정렬
- Add To do Input 영역에 텍스트를 입력할 수 있는 Input과 Add 버튼
- List 영역은 동적으로 Item을 생성한다.
- Item의 왼쪽에는 완료 여부를 체크할 수 있는 체크 박스와 To Do 내용이 보여진다.
- 모든 레이아웃 스타일은 styled components를 통해 구현한다.

---

## 세부 기능

### Add to do Input

- Input 영역에 입력한 텍스트를 관찰한다.
- Add 버튼 클릭 시, Input 영역에 입력된 텍스트를 JSON 서버에 POST하여 데이터를 추가한다.
- Add 버튼 클릭 시, Input 영역의 값을 초기화한다.
- Add 버튼 클릭 시, Input 영역에 아무 값도 없다면, 아무 동작을 하지 않는다.
- Add 버튼 클릭 시, JSON 서버에 POST한 데이터를 포함한 데이터를 토대로 List 영역에 Item이 동적으로 업데이트한다.

### List - Item

- List의 아이템은 JSON 서버의 데이터를 토대로 동적으로 생성된다.
- Item영역의 체크 박스 클릭 시, 체크 박스가 활성화되고 텍스트에는 취소 선이 그어져 완료한 항목임을 나타낸다.
- Item영역의 체크 박스 클릭 시, 완료된 사항임을 서버에 전송하여 재잰더링 시에도 UI가 변하지 않도록 한다.
- 텍스트 영역 클릭 시. Input 영역으로 전환하고, 수정 버튼의 아이콘을 체크 표시로 전환한다.
- Input 영역으로 전환 했을 때, 수정 버튼를 클릭하면, 서버에 변경한 텍스트를 전송한다.
- Input 영역으로 전환 했을 때, 수정 버튼를 클릭하면, 다시 텍스트 영역으로 전환되고 변경된 텍스트로 업데이트한다.
- Input 영역으로 전환 했을 때, 수정 버튼를 클릭했을 때, 수정된 텍스트가 없거나 기존 텍스트와 같다면 텍스트 영역으로 전환되고 기존 텍스트를 보여준다. 이때, 서버와 통신을 하지 않는다.
- 수정 버튼 클릭 시, 텍스트 영역을 클릭 했을 때와 같은 동작을 하도록 한다.
- 삭제 버튼 클릭 시, 해당 Item에 해당하는 데이터를 서버에서 삭제한다.
- 삭제버튼 클릭 시, 해당 Item을 UI에서 보이지 않도록 한다.

---

## 개발 과정

### 디렉토리 구조 설정

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10818523-6f7c-400e-a75c-0634850e0a0d/Untitled.png)

- api 폴더에는 api 통신 기능을 하는 함수를 담은 api.js  파일을 생성하여 분류하였다.
- components 폴더에는 AddTodo Input 영억 컴포넌트와 TodoList와 TodoItem 컴포넌트 파일을 분류하였다.
- icon 폴더는 svg를 사용하다 보니 컴포넌트에 svg 코드를 넣으면 코드가 지저분해져 컴포넌트로 만들어 사용하였다. 일반 컴포넌트와 혼돈되지 않도록 icon 폴더에 따로 분류하였다.
- styledComponents 폴더에는 styeld components를  각 영역의 컨테이너들 스타일을 담은 ContainerStyle 파일과 각 영역 별로 요소들을 디자인한 파일들을 생성하여 분류하였다.

### 레이아웃 잡기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3878f16-d8b6-44c3-be67-9b35d9a042fa/Untitled.png)

- Header / TodoInput / TodoList 총 3개의 영역으로 나누어 개발했다.
- Header는 스타일 컴포넌트로 구현하였고 나머지는 일반 컴포넌트로 구현하였다

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7433a013-6101-4f08-a97e-6a8840ef7b98/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7aa0b144-7d0b-4bd6-a212-0c33c42f90c4/Untitled.png)

- 각 영역의 컨테이너들을 스타일 컴포넌트로 작성하여 전체적인 레이아웃을 잡아주었다.
- 각 영역의 세부 요소들의 디자인과 레이아웃을 잡아 주었다.

### API 세팅

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b88386be-c376-4b86-854a-b2eec20bb5f1/Untitled.png)

- axios를 통해 API 통신을 구현하였다.
- get은 then을 통해 data를 return 해주었다.
- post는 add 버튼 클릭 시, 데이터를 받아 서버에 전송하도록 data를 파라미터 값을 설정했다.
- put은 텍스트 변경 시, 서버에 전송할 데이터를 파라미터로 받고, 받은 파라미터에서 id 값을 통해 해당 데이터 접근할 수 있도록 하였다.
- delete는 id를 파라미터로 받아 해당하는 데이터에 접근해 삭제할 수 있도록 하였다.

### Add To Do 기능 개발

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4d83ed3-230e-4b3e-99ae-34f6f5dfe984/Untitled.png)

- 서버에 보낼 데이터를 보관할 state를 만들고, input에서 onChange를 통해 State 값을 업데이트 해준다.
- useQueryClinet 객체를 생성하고 서버에 데이터를 전송하면 List를 업데이트 할 수 있도록 useMutation객체에 서버와 통신 성공 시 invalidateQueries가 작동하도록 설정한다.
- Add 버튼 클릭 시, 서버에서 다루는 데이터 형태로 가공한다.
- 가공된 데이터를 useMutation 객체의 메서드 mutate의 파라미터로 주어 데이터를 서버에 전송한다.
- Input의 값을 다시 공백으로 만든다.

### TodoList 영역 기능 개발

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bfe62b1-9d0d-4b4c-939a-d99880031da8/Untitled.png)

- useQurey를 통해 key명과, 기존에 만든 api호출하는 함수를 파라미터로 넘겨 result 변수에 api에서 받은 데이터를 보관한다.
- result 변수를 토대로 컴포넌트를 동적으로 생성한다.
- result에 담긴 데이터 요소를 각 자식 컴포넌트에 props로 전달한다.

### TodoItem 영역 기능 개발

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da1d54ae-fe68-4402-8ad9-ff995c93a69f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db473f79-8794-4132-acf7-9b61ad104cef/Untitled.png)

- props로 받은 데이터를 디스럭처링으로 받아주었다.
- queryClient 객체를 생성하고, 데이터 변경과 삭제 역할을 하는 함수로 하여 useMutation 객체를 생성한다. useMutaion 객체에는 invalidateQueries 메서드를 통해 데이터 변경이 일어나면 컴포넌트가 업데이트 되도록 설정한다.
- 수정 모드 여부, 수정할 텍스트, 완료 여부 상태를 담은 state를 3개 생성한다. 다른 컴포넌트에서 사용될 여지가 없다 판단하여 전역 상태로 관리하지는 않았다.
- 수정할 텍스트를 onChange를 통해 업데이트 한다.
- 수정 모드가 아닐 때 텍스트나 수정 버튼 클릭 시, 수정 할 수 있는 input를 노출 시키고, 수정 버튼은 수정 완료 버튼 UI로 변경하도록 하였다.
- 수정 모드에서  수정 완료 버튼 클릭 시, 기존과 텍스트가 같거나 입력한 내용이 없다면 수정 없이 수정 모드를 종료하도록 설정하였다.
- 그 외 정상적인 수정 요청 상황에서는, 서버에 넣을 데이터 형태로 포맷 한 뒤, mutate 메서드의 파라미터로 넘겨 서버에서 데이터를 수정하도록 하고, 수정 모드를 종료시킨다.
- 삭제 버튼 클릭 시, 해당 데이터의 id를 mutate 메서드의 파라미터로 받아 서버에서 데이터를 삭제한다.
- 완료 체크 박스 클릭 시, 서버에 전송할 데이터 형태로 포맷하여 mutate의 파라미터로 넘겨 서버에서 완료 여부를 업데이트한다.
- 완료한 항목에 대해서는 체크 표시를 유지하고, 텍스트에는 취소선이 그어지도록한다.
