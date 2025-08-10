import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Pagination = ({ page, setPage }) => {
  // Create 3 previous pages
  const prevPages = Array.from({ length: 3 }, (_, i) => page - i - 1)
    .filter((i) => i > 0)
    .reverse();

  // Create 3 next pages
  const nextPages = Array.from({ length: 3 }, (_, i) => i + 1 + page);

  // Merge prev + next pages
  const paginationPages = [...prevPages, page, ...nextPages];

  const totalPages = 20;

  const handlePrevButton = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  };

  const handleNextButton = () => {
    if (page < 20) {
      setPage((prev) => prev + 1);
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  };

  const handleNumberButton = (p) => {
    setPage(p);
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  return (
    <div className="mt-8 py-4 ` flex gap-1 sm:gap-3 lg:gap-8 items-center justify-center">
      {/* Previous Button  */}
      <div
        className={`border-2 px-1 py-1 sm:px-2 sm:py-2 rounded-full cursor-pointer ${
          page > 1 && "hover:bg-[var(--border-color)]"
        } ${page < 2 && "border-[var(--text-muted)]"}`}
        onClick={handlePrevButton}
      >
        <GrFormPrevious
          className={`text-[1.25rem] hover:text-[var(--text-highlight)] font-bold ${
            page < 2 &&
            "text-[var(--text-muted)] hover:text-[var(--text-muted)]"
          } font-medium`}
        />
      </div>

      {/* Number Buttons  */}
      <div
        className={`cursor-pointer text-[0.8rem] xs:text-[1rem] md:text-[1.2rem] flex items-center gap-0.5 xs:gap-1 lg:gap-7 ${
          !page && "text-[var(--text-muted)]"
        }`}
      >
        {paginationPages.map((p) => (
          p < 21 && <div
            className={`${
              p !== page && "text-[var(--text-muted)]"
            } ${p < 10 ? "w-8 h-8 sm:w-12 sm:h-12" : "w-8 h-8 sm:w-12 sm:h-12"} flex items-center justify-center   rounded-full hover:bg-[var(--border-color)] hover:text-[var(--text-highlight)]`}
            onClick={() => handleNumberButton(p)}
          >
            {p}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div
        className={`border-2 px-1 py-1 sm:px-2 sm:py-2 rounded-full cursor-pointer  ${
          page < 20 && "hover:bg-[var(--card-bg)] "
        } ${
          page > totalPages - 1 && "border-[var(--text-muted)]"
        } duration-300 ease-in-out`}
        onClick={handleNextButton}
      >
        <GrFormNext
          className={`text-[1.25rem] hover:text-[var(--text-highlight)] font-bold ${
            page > totalPages - 1 &&
            "text-[var(--text-muted)] hover:text-[var(--text-muted)]"
          }`}
        />
      </div>
    </div>
  );
};

export default Pagination;
