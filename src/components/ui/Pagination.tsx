"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  totalPages: number;
};

const boxStyle = "flex h-9 w-9 items-center justify-center rounded-lg text-sm transition";
const arrowStyle = `${boxStyle} border-2 border-gray-100 text-gray-950 hover:border-blue-800 disabled:opacity-40 disabled:hover:border-gray-100`;

export default function Pagination({ totalPages }: PaginationProps) {
  const [page, setPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3">
      <button
        onClick={() => setPage((current) => Math.max(1, current - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className={arrowStyle}
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((number) => (
        <button
          key={number}
          onClick={() => setPage(number)}
          aria-current={page === number ? "page" : undefined}
          className={`${boxStyle} ${
            page === number
              ? "bg-gray-100 font-semibold text-gray-950"
              : "text-gray-950 hover:bg-gray-100"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        className={arrowStyle}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}