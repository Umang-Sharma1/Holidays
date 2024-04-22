export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center my-4">
      <ul className="flex border border-gray-300 rounded-md">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-3 py-2 ${
              page === number ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <button
              onClick={() => onPageChange(number)}
              className="focus:outline-none"
              aria-label={`Go to page ${number}`}
              role="button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
