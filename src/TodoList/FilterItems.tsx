import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterType } from './FilterType';

export default function FilterButtons({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}) {
  return (
    <div className='flex items-center space-x-4 mt-4'>
      <FontAwesomeIcon icon={faFilter} className='text-grey' />
      <button
        onClick={() => setFilter(FilterType.All)}
        className={`px-4 py-2 rounded ${
          filter === FilterType.All
            ? 'bg-blue-500 text-white'
            : 'bg-gray-500 text-gray-300'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter(FilterType.Active)}
        className={`px-4 py-2 rounded ${
          filter === FilterType.Active
            ? 'bg-blue-500 text-white'
            : 'bg-gray-500 text-gray-300'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter(FilterType.Completed)}
        className={`px-4 py-2 rounded ${
          filter === FilterType.Completed
            ? 'bg-blue-500 text-white'
            : 'bg-gray-500 text-gray-300'
        }`}
      >
        Completed
      </button>
    </div>
  );
}
