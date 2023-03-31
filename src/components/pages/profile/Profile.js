import FormInput from "./FormInput";
import { useContext } from "react";
import { FormContext } from "../../../App";

function Profile() {
  const {
    firstName,
    lastName,
    startingWeight,
    // currentWeight,
    startingDate,
    meters,
    goalWeight,
    goalDate,
    setFirstName,
    setLastName,
    setStartingWeight,
    // setCurrentWeight,
    setStartingDate,
    setMeters,
    setGoalWeight,
    setGoalDate,
    birthDate,
    setBirthDate,
    // closeFormHandler,
  } = useContext(FormContext);
  return (
    <>
      <header className="form-heading">
        <h2>edit profile</h2>
      </header>
      <section className="input-form">
        <div className="input-form-container">
          <h3>profile details</h3>
          <form
            className="form profile-details"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-container">
              <div className="input-container">
                <FormInput
                  htmlFor={"first-name"}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type={"text"}
                  name={"first-name"}
                  id={"first-name"}
                >
                  first name:
                </FormInput>
                <FormInput
                  htmlFor={"last-name"}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type={"text"}
                  name={"last-name"}
                  id={"last-name"}
                >
                  last name:
                </FormInput>
                <FormInput
                  htmlFor={"birthdate"}
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  type={"date"}
                  name={"birthdate"}
                  id={"birthdate"}
                >
                  date of birth:
                </FormInput>
                <FormInput
                  htmlFor={"meters"}
                  value={meters}
                  onChange={(e) => setMeters(e.target.value)}
                  type={"text"}
                  name={"meters"}
                  id={"meters"}
                >
                  height (centimeters):
                </FormInput>
              </div>
            </div>
          </form>
          <h3>weight objectives</h3>
          <form
            className="form weight-objectives"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-container">
              <div className="input-container">
                <FormInput
                  htmlFor={"starting-weight"}
                  value={startingWeight}
                  onChange={(e) => setStartingWeight(e.target.value)}
                  type={"number"}
                  name={"starting-weight"}
                  id={"starting-weight"}
                >
                  starting weight (kilograms):
                </FormInput>
                <FormInput
                  htmlFor={"start-goal-date"}
                  value={startingDate}
                  onChange={(e) => setStartingDate(e.target.value)}
                  type={"date"}
                  name={"start-goal-date"}
                  id={"start-goal-date"}
                >
                  starting date:
                </FormInput>
                <FormInput
                  htmlFor={"start-goal-weight"}
                  value={goalDate}
                  onChange={(e) => setGoalDate(e.target.value)}
                  type={"date"}
                  name={"start-goal-weight"}
                  id={"start-goal-weight"}
                >
                  goal date:
                </FormInput>
                <FormInput
                  htmlFor={"end-goal-weight"}
                  value={goalWeight}
                  onChange={(e) => setGoalWeight(e.target.value)}
                  type={"number"}
                  name={"end-goal-weight"}
                  id={"end-goal-weight"}
                >
                  goal weight (kilograms):
                </FormInput>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
