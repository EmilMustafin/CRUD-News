import { InputProps } from '../model/types';

export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}: InputProps) => {
  return (
    <div className='input-container'>
      {label && <label className='input-label'>{label}</label>}
      <input
        className='input-field'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};
