import { Dayjs } from 'dayjs';

export type TInitialValueSeminarInformation = {
  event_startdate: Dayjs | null;
  event_enddate: Dayjs | null;
  seminar_title: string;
  is_online_seminar: boolean;
  is_hall_seminar: boolean;
  publication_start_date_time: Dayjs | null;
  publication_end_date_time: Dayjs | null;
  seminar_maximum_participant: number;
  seminar_attribute: TSeminarAttributeItem[];
};

export type TSeminarAttributeItem = {
  icon_id: number;
};

export type TInitialValueQuestions = {
  seminar_questions: Question[];
};

type Question = {
  is_required_answer?: boolean;
  questionnaire_cd_format: string;
  questionnaire_question: string;
  answer: string;
};