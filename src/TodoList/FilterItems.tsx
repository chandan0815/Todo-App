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
        className={`btn ${filter === 'all' ? 'btn-active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter(FilterType.Active)}
        className={`btn ${filter === 'active' ? 'btn-active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter(FilterType.Completed)}
        className={`btn ${filter === 'completed' ? 'btn-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
