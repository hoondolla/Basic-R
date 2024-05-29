import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "잠자기",
      completed: true,
    },
    {
      id: 2,
      text: "일찍 일어나기",
      completed: false,
    },
  ]);

  // useState 에 전달된 배열->객체가 초기상태로 설정됨 setTodo 함수를 이용해 상태를 업데이트 할 수 있음

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  // event.target 은 이벤트가 발생한 인풋을 가르킴, value 는 인풋의 현재 값 (내가 입력한 값이 인풋 상태에 저장됨)

  const handleAddTodo = (event) => {
    event.preventDefault(); // 이벤트의 기본 동작(폼 제출 시 페이지 새로고침)을 막음
    if (!input.trim()) return; // 입력된 값(input)이 공백 문자만으로 이루어져 있는지 확인,
    //공백 문자만 있을 경우 함수는 아무 작업도 하지 않고 종료. input.trim()은 문자열의 앞뒤 공백을 제거한 결과를 반환.

    const newTodo = {
      id: Date.now(), //현재 시간을 나타내는 Date.now() 값을 사용하여 고유한 id를 생성
      text: input, // 입력된 값(input)을 할 일의 텍스트로 설정.
      completed: false, //새로운 할 일은 기본적으로 완료되지 않은 상태(false)로 설정.
    };
    setTodo([...todos, newTodo]); //현재의 todos 배열에 newTodo 객체를 추가하여 새로운 배열을 생성, 새로운 할 일이 기존 할 일 목록에 추가됨.
    setInput(""); // 인풋 초기화 빈 문자열 설정.
  };

  const handleDeleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };
  //todos 배열을 순회하면서 각 todo 객체의 id가 삭제하려는 id와 일치하지 않는 객체들만을 포함하는 새로운 배열을 만듬
  //해당 id를 가진 할 일을 제외한 나머지 할 일들로 새로운 배열 만듬

  const handleToggleTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //todos 배열을 순회 ->  현재 순회 중인 todo 객체의 id가 주어진 id와 같다면, 해당 todo 객체의 completed 속성을 반전시킴
  //객체 전개 연산자(...todo)를 사용하여 기존 todo 객체의 모든 속성을 복사한 뒤 completed 속성만 업데이트함

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }} // todo.completed 가 true 일 경우 line-through, false 인 경우 none
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            {/*파라미터가 들어가면 함수를 다시 만들어야 함!!!*/}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
