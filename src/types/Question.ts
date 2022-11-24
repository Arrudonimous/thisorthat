export interface Question{
  id: number;
  user_id: number;
  question: string;
  first_option: string;
  second_option: string;
  first_option_chosen_count: number;
  second_option_chosen_count: number;
  is_validated: boolean;
  user:{
    name: string;
  }
}
