"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

interface GitHubRepo {
  name: string;
  html_url: string;
  language: string;
  visibility: string;
  created_at: string;
}

export function MyProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // Função para buscar repositórios
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/pedrogbraz/repos"
        );
        const data: GitHubRepo[] = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
      }
    };
    fetchRepos();
  }, []);

  // Função para formatação de datas
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Calcular o índice dos repositórios da página atual
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  // Usar useMemo para evitar reordenamento repetido dos repositórios
  const sortedRepos = useMemo(() => {
    return [...repos].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [repos]);

  const currentRepos = sortedRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / reposPerPage);

  // Função de navegação
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPaginationItem = (pageNumber: number) => (
    <PaginationItem key={pageNumber}>
      <PaginationLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          paginate(pageNumber);
        }}
        className={`px-3 py-1 text-xs rounded-lg transition-all duration-200 ${
          currentPage === pageNumber
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
        }`}
      >
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      <ul className="grid gap-2 sm:grid-cols-2">
        {currentRepos.map((repo) => (
          <li
            key={repo.html_url}
            className="bg-[#FFFFFF] dark:bg-[#212121] py-2.5 px-4 rounded-lg w-full flex flex-col gap-4 border shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-xs xxs:text-sm font-semibold truncate hover:underline transition-colors duration-200"
              >
                {repo.name}
              </Link>
              <span className="text-xs text-muted-foreground">
                {repo.visibility}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-xs text-muted-foreground">
                {repo.language || "README"}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(repo.created_at)}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination className="mt-4 hidden exp:block">
          <PaginationContent className="flex justify-center items-center gap-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) paginate(currentPage - 1);
                }}
                aria-disabled={currentPage === 1}
                className={`px-3 py-1 text-xs rounded-lg transition-colors duration-200 ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
                }`}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) =>
              renderPaginationItem(index + 1)
            )}

            {totalPages > 5 && (
              <PaginationItem className="">
                <PaginationEllipsis className="text-gray-500 dark:text-gray-400" />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) paginate(currentPage + 1);
                }}
                aria-disabled={currentPage === totalPages}
                className={`px-3 py-1 text-xs rounded-lg transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
