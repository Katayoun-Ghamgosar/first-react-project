import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div>
      <h1>MY Todo list</h1>
      <TodoCard title="ویدیو دیدن" state={true} text = 'در روز یک ساعت وقت گذاشته شود' anjam = {true}></TodoCard>
      <TodoCard title="حل تمرین ها" state={true} text = 'در روز دو ساعت وقت گذاشته شود' anjam = {true}></TodoCard>
      <TodoCard title="کتاب خواندن" state={false}text = 'در روز یک ساعت وقت گذاشته شود' anjam = {false}></TodoCard>
      <TodoCard title="ورزش کردن" state={false} text = 'در روز یک ساعت وقت گذاشته شود' anjam = {false}></TodoCard>
      <TodoCard title="برنامه ریزی" state={true} text = 'در روز نیم ساعت وقت گذاشته شود' anjam = {true}></TodoCard>
    </div>
  );
}

export default App;


