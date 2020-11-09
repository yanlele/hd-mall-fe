import { createModel } from '@rematch/core';
import { RootModel } from '@src/models/interface';

type QuestionType = 'boolean' | 'multiple' | 'mixed';
type QuestionsState = {
  questions: number[]
  amount: number
  type: QuestionType
}

const questions = createModel<RootModel>()({
  state: {
    questions: [],
    amount: 2,
    type: 'boolean',
  } as QuestionsState,
  reducers: {
    setQuestions(state, payload: Array<number>) {
      return { ...state, questions: payload };
    },
  },
  effects: (dispatch) => ({
    async loadQuestions({ categoryId }: { categoryId: string }) {
      console.log(categoryId);
      dispatch.questions.setQuestions([1, 2]);
    },
    async otherLoadQuestion() {
      dispatch.questions.loadQuestions({ categoryId: '1' });
    },
  }),
});

export default questions;
