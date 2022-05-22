import { DUMMY_MEALS } from "./DummyMeals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const AvailableMeals = () => {
  const meallist = DUMMY_MEALS.map((meal, index) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{meallist}</ul>
        </Card>
      </section>
    </>
  );
};
export default AvailableMeals;
