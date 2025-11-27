"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function CoursePagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  // Calculate page numbers to show
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of middle pages
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        end = 4
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("ellipsis1")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("ellipsis2")
      }

      // Always include last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <nav className="flex items-center space-x-1">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-gray-300 hover:bg-gray-800 hover:text-primary"
          } transition-colors`}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {pageNumbers.map((page, index) => {
          if (page === "ellipsis1" || page === "ellipsis2") {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                ...
              </span>
            )
          }

          return (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                currentPage === page
                  ? "bg-primary text-black font-medium"
                  : "text-gray-300 hover:bg-gray-800 hover:text-primary"
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )
        })}

        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "text-gray-500 cursor-not-allowed"
              : "text-gray-300 hover:bg-gray-800 hover:text-primary"
          } transition-colors`}
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </nav>
    </div>
  )
}
