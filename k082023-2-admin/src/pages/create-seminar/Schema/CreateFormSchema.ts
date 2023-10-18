import dayjs from 'dayjs';
import * as yup from 'yup';

export const seminarInfoSchema = yup.object({
  event_startdate: yup
    .date()
    .nonNullable()
    .required('Event start date is required')
    .test(
      'is-after-now',
      'Start time must be after current time',
      function (value) {
        if (!value) {
          return false;
        }

        return dayjs(value).isAfter(dayjs());
      }
    ),
  event_enddate: yup
    .date()
    .nonNullable()
    .required('Event end date is required')
    .when('event_startdate', (startDate, schema) => {
      return schema.test(
        'is-greater',
        'Event end date must be greater than start date',
        (endDate) => {
          return !startDate || !endDate || endDate > startDate[0];
        }
      );
    })
    .test(
      'is-after-now',
      'End time must be after current time',
      function (value) {
        if (!value) {
          return false;
        }
        return dayjs(value).isAfter(dayjs());
      }
    ),
  seminar_title: yup
    .string()
    .required('seminar title must required')
    .max(100, 'seminar title must less than 100 characters'),
  is_online_seminar: yup
    .boolean()
    .test('at-least-one-seminar-type', '*', function (value) {
      const { is_hall_seminar } = this.parent;

      return value || is_hall_seminar;
    }),
  is_hall_seminar: yup
    .boolean()
    .test('at-least-one-seminar-type', '*', function (value) {
      const { is_online_seminar } = this.parent;
      return is_online_seminar || value;
    }),
  publication_start_date_time: yup
    .date()
    .nonNullable()
    .required('publication start date is required')
    .test(
      'is-after-now',
      'Start time must be after current time',
      function (value) {
        if (!value) {
          return false;
        }

        return dayjs(value).isAfter(dayjs());
      }
    ),
  publication_end_date_time: yup
    .date()
    .nonNullable()
    .when('publication_start_date_time', (startDate, schema) => {
      return schema.test(
        'is-greater',
        'publication end date must be greater than start date',
        (endDate) => {
          return !startDate || !endDate || endDate > startDate[0];
        }
      );
    })
    .required('Event end date is required')
    .test(
      'is-after-now',
      'End time must be after current time',
      function (value) {
        if (!value) {
          return false;
        }

        return dayjs(value).isAfter(dayjs());
      }
    ),
  seminar_maximum_participant: yup
    .number()
    .min(1, 'seminar_maximum_participant must required')
    .max(999999999, 'seminar_maximum_participant must less than 999999999')
    .required(),
  // seminar_attribute: yup.array().min(1, 'Seminar attribute pick one'),
  seminar_attribute: yup.array().min(1, '*'),
});

export const applicationEmailSchema = yup.object({
  seminar_emails: yup.object({
    optional_message_hall: yup
      .string()
      .required('optional_message_hall must be required')
      .max(500, 'optional_message_hall must less than 500 characters'),
    optional_message_online: yup
      .string()
      .required('optional_message_online must be required')
      .max(500, 'optional_message_online must less than 500 characters'),
  }),
});

export const questionnaireSchema = yup.object({
  seminar_questions: yup
    .array()
    .of(
      yup.object().shape({
        answer: yup
          .string()
          .required('answer must be required')
          .max(500, 'answer must less than 500 characters'),
        is_required_answer: yup
          .boolean()
          // .required('is_required_answer must be required'),
          .required('*'),

        questionnaire_cd_format: yup
          .string()
          // .required('pick one must be required')
          .required('*')

          .max(500, 'questionnaire_cd_format must less than 500 characters'),
        questionnaire_question: yup
          .string()
          .required('questionnaire_question must be required')
          .max(500, 'questionnaire_question must less than 500 characters'),
      })
    )
    .min(1, 'seminar_emails must have at least 1 question'),
});

export const listDisplaySchema = yup.object({
  seminar_details: yup.object({
    headline: yup
      .string()
      .required()
      .max(500, 'questionnaire_question must less than 500 characters'),
    content: yup
      .string()
      .required()
      .max(500, 'questionnaire_question must less than 500 characters'),
  }),
});
