import { Question } from '../types/Question';
import RandomFromNumber from './RandomFromNumber';

export default function RandomizeQuestions(questions: Question[]) {
  return (RandomFromNumber(questions.length));
}
