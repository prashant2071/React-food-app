import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); 
    const enteredValue = amountInputRef.current.value; //this amountInputRef.curent will always point input element which is string and .value is value propeprty
    const enteredAmountNumber = +enteredValue;  //enter Value is always be string which need to be converted;
    console.log('the value is ',enteredValue)
    console.log('the value is ',enteredAmountNumber);

    if (
      enteredAmountNumber.length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          label="Amount"
          ref={amountInputRef}
          input={{
            id: "Amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>
        {!AmountIsValid && <span>Please enter valid amount (1 - 5)</span>}
      </form>
    </>
  );
};
export default MealItemForm;
