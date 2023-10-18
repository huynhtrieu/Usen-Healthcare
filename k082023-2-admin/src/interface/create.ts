interface createProps {
    //form nhap thong tin
    publication_start_date_time: Date,
    publication_end_date_time: Date,
    event_startdate: Date
    event_enddate: Date
    seminar_title: string
    is_hall_seminar: boolean,
    is_online_seminar: boolean,
    seminar_maximum_participant: string,
    seminar_attribute: { icon_id: string }[];

    //fome day 5 anh
    seminar_images: { file_name: string; file_path: string }[];
    seminar_details: {
        headline: string;
        contents: string;
    };
    seminar_emails: {
        optional_message_hall: string;
        optional_message_online: string;
    };
    seminar_questions: {
        is_required_answer: boolean;
        questionnaire_cd_format: string;
        questionnaire_question: string;
        answer: string;
    }[];

    
    onCreateSuccess?: () => void
  }
  export type { 
    createProps
  };