import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  onSkipeQuestion,
  answerState,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipeQuestion} />
      <h2>{questionText}</h2>

      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
