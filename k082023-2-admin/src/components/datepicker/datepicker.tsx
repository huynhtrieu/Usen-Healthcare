import { DatePicker as BaseDatePicker, DatePickerProps } from 'antd';
import './style.css';
import { InfoCircleOutlined } from '@ant-design/icons';

type IDatePicker = DatePickerProps & {
  label: string;
  error?: boolean;
};

const DatePicker = ({ label, error, ...rest }: IDatePicker) => {
  return (
    <div className='datepicker_custom'>
      {label && <div className='datepicker_custom__label'>{label}:</div>}
      <div className='datepicker_custom--container'>
        {error && (
          <div>
            <InfoCircleOutlined style={{ color: 'red' }} />
          </div>
        )}
        <BaseDatePicker {...rest} />
      </div>
    </div>
  );
};

export default DatePicker;