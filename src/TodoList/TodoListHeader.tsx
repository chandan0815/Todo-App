export default function TodoListHeader() {
  return (
    <div className='flex justify-around mt-4'>
      <div className='flex gap-4'>Status</div>
      <div className='flex gap-4'>Task name</div>
      <div className='flex gap-4'>Create Date</div>
      <div className='flex gap-4'>Due Date</div>
    </div>
  );
}
