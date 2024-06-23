import { FilterType } from './FilterType';

function FilterButtons({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}) {
  return (
    <div className='flex justify-around mt-4'>
      <button
        onClick={() => setFilter(FilterType.All)}
        className={`btn ${filter === FilterType.All ? 'btn-active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter(FilterType.Active)}
        className={`btn ${filter === FilterType.Active ? 'btn-active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter(FilterType.Completed)}
        className={`btn ${filter === FilterType.Completed ? 'btn-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
