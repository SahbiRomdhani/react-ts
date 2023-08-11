import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "kairouan", "Sousse", "Yard"];
  const handleSelectItem = (item: string) => {
    console.log("app ts " + item);
  };
  const [isCliked, setIsClicked] = useState(false);

  const handleClickedButton = () => {
    setIsClicked(!isCliked);
  };

  // ALert Component Variable
  const text = "New Alert Message";
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {isCliked && (
        <Alert isClicked={isCliked}>
          Hello <span>Sahbi </span>
        </Alert>
      )}
      <Button color="secondary" onClick={handleClickedButton}>
        My Button
      </Button>
    </div>
  );
}

export default App;
