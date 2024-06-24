interface CustomDateInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomDateInput({
  value,
  onChange,
}: CustomDateInputProps) {
  return (
    <div className='relative'>
      <input
        className='border p-2 rounded'
        type='text'
        placeholder='Due date'
        value={value}
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
