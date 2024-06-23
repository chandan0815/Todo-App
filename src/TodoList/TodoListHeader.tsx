export default function TodoListHeader() {
  return (
    <div className='flex bg-gray-200 p-4 rounded-t-lg'>
      <div className='flex-1 text-center'>Status</div>
      <div className='flex-1 text-center'>Task name</div>
      <div className='flex-1 text-center'>Due Date</div>
      <div className='flex-1 text-center'>Create Date</div>
      <div className='w-16 text-center'>Actions</div>
    </div>
  );
}
