import "./App.css";

function App() {
  const onClickHandler = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = "grey";
      },
    });
  };

  return (
    <>
      <button onClick={onClickHandler}>dark Background</button>
    </>
  );
}

export default App;
