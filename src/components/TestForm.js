import { useReducer } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";

export default function RadioButtonsGroup({ part }) {
  // just added some extra questions to this array to check certain functionality. Don't worry about changing yours at all
  const questionPt1 = [
    {
      question: "Whats 1+1?",
      answerOptions: [
        { id: 1, text: "false" },
        { id: 2, text: "true" },
      ],
      answer: 2,
    },
    {
      question: "Whats 1*1?",
      answerOptions: [
        { id: 1, text: "true" },
        { id: 2, text: "false" },
      ],
      answer: 2,
    },
    {
      question: "Whats 1+1?",
      answerOptions: [
        { id: 1, text: "false" },
        { id: 2, text: "true" },
      ],
      answer: 2,
    },
    {
      question: "Whats 1*1?",
      answerOptions: [
        { id: 1, text: "true" },
        { id: 2, text: "false" },
      ],
      answer: 2,
    },
    {
      question: "Whats 1+1?",
      answerOptions: [
        { id: 1, text: "false" },
        { id: 2, text: "true" },
      ],
      answer: 2,
    },
  ];
  const questionPt2 = [
    {
      question: "Whats 1/1?",
      answerOptions: [
        { id: 1, text: "null" },
        { id: 2, text: "1" },
      ],
      answer: 2,
    },
    {
      question: "Whats 1-1?",
      answerOptions: [
        { id: 1, text: "1" },
        { id: 2, text: "0" },
      ],
      answer: 2,
    },
  ];

  // manages the state for users answers to each set
  function reducer(state, action) {
    // this set variable contains an array with the question answer, set and radio group index
    const set = action.type.split("-");
    // these arrays contain copies of  the question set answers
    const arrCopy = [...state.questionPt1];
    const arrCopyTwo = [...state.questionPt2];

    // this switch runs based on the choice selected from the set its on
    switch (set[1]) {
      // for first set
      case "q1":
        // this checks to see if item has already been selected in a group in this question set
        const optionIndex = arrCopy.findIndex(
          (option) => option.group === set[2]
        );
        // if it does then it runs through this if statement
        if (optionIndex >= 0) {
          // slice removes the item found
          arrCopy.splice(optionIndex, 1);

          // this updates the state
          return {
            // this preserves the  choices selected and adds the new option replacing the previous option
            questionPt1: [
              ...arrCopy,
              {
                group: set[2],
                value: set[0],
                answer:
                  set[0] === "true" ? (
                    <p>correct answer</p>
                  ) : set[0] === "false" ? (
                    <p>Incorrect Answer</p>
                  ) : null,
              },
            ],
            // preserves choices from second set so they aren't removed
            questionPt2: [...arrCopyTwo],
          };
        } else {
          return {
            questionPt1: [
              ...arrCopy,
              {
                group: set[2],
                value: set[0],
                answer:
                  set[0] === "true" ? (
                    <p>correct answer</p>
                  ) : set[0] === "false" ? (
                    <p>Incorrect Answer</p>
                  ) : null,
              },
            ],
            questionPt2: [...arrCopyTwo],
          };
        }

      // same as case q2 just had to change names of certain things
      case "q2":
        const optionIndexTwo = arrCopyTwo.findIndex(
          (option) => option.group === set[2]
        );
        if (optionIndexTwo >= 0) {
          arrCopyTwo.splice(optionIndexTwo, 1);
          return {
            questionPt1: [...arrCopy],
            questionPt2: [...arrCopyTwo, { group: set[2], value: set[0] }],
          };
        } else {
          return {
            questionPt1: [...arrCopy],
            questionPt2: [...arrCopyTwo, { group: set[2], value: set[0] }],
          };
        }
      default:
        throw new Error();
    }
  }

  // this is the reducer
  const [value, setValue] = useReducer(reducer, {
    questionPt1: [],
    questionPt2: [],
  });

  // this handles the updating of the choices
  const handleChange = (event, index) => {
    const option = event.target.value + "-" + index;
    setValue({ type: option, payload: event.target.id });
  };
  return (
    <>
      <FormControl component="fieldset">
        {/* need the index  */}
        {questionPt1?.map((q, index) => (
          <>
            <FormLabel component="legend">{q.question}</FormLabel>
            <RadioGroup aria-label="gender" name="q1">
              {q.answerOptions?.map((option, i) => (
                <FormControlLabel
                  value={option.text}
                  control={
                    <Radio
                      id={`${option.id}`}
                      onChange={(event) => handleChange(event, `q1-${index}`)}
                    />
                  }
                  label={option.text}
                />
              ))}
            </RadioGroup>
            {/* this displays if answer is correct or not */}

            {/* what this does is after a user selects an answer, value is updated with the answer and if the choice is correct or not and displays text based on that. And
          the conditional ensures the proper choice text is displayed in the right set  */}
            {part === 1 ? (
              <p>{value?.questionPt1[index]?.answer}</p>
            ) : (
              <p>{value?.questionPt2[index]?.answer}</p>
            )}
          </>
        ))}
      </FormControl>
      {/* this button will no longer be disabled if all choices are correct. And don't worry about the button styles as yours on your end are set up properly. */}
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ display: "block" }}
        disabled={
          part === 1
            ? value?.questionPt1.filter((choices) => choices.value === "true")
                .length !== 5
            : value?.questionPt2.filter((choices) => choices.value === "true")
                .length === 5
        }
      >
        Go to Next Video
      </Button>
    </>
  );
}
