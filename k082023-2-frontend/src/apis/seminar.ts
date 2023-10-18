import appApi from "@/utils/app-api";

const seminarlist = () => {
  return appApi.get('/seminars');
};

const seminardetail = (id: string | number, userAgent: string | number) => {
  return appApi.get('/seminar-detail', {
    params: {
      seminar_id: id,
      user_agent: userAgent
    }
  });
};

const seminarApply = (seminar_id: string | number, member_id: string | number, seminar_application_category: string | number) => {
  const accessToken = localStorage.getItem('accessToken');

  return appApi.post('/seminar-apply', {
    seminar_id: seminar_id,
    member_id: member_id,
    seminar_application_category: seminar_application_category
  }, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
};

export {
  seminarlist,
  seminardetail,
  seminarApply
};