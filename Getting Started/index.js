let count = 0;

ReactDOM.render(<h1>This is a test</h1>, document.getElementById("root"));

function AfterClick() {
  return <p>You clicked the button 5 times</p>;
}

document.getElementById("btn").onclick = function () {
  myFunction();
};

function myFunction() {
  count++;
  if (count >= 5) {
    ReactDOM.render(
      <p>You clicked it 5 times</p>,
      document.getElementById("after")
    );
  }
}
