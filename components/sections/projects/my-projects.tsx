"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  html_url: string;
  language: string;
  visibility: string;
  created_at: string;
}

export function MyProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/pedrogbraz/repos"
        );
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
      }
    }

    fetchRepos();
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div>
      <ul className="space-y-2 grid sm:grid-cols-2 gap-2">
        {repos.map((repo) => (
          <li
            key={repo.html_url}
            className="bg-[#FFFFFF] dark:bg-[#212121] py-2.5 px-4 rounded-lg w-full flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-nowrap text-ellipsis overflow-x-hidden max-w-[70%]"
              >
                {repo.name}
              </Link>
              <span className="text-xs text-muted-foreground">
                {repo.visibility}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-xs">{repo.language}</h2>
              <h2 className="text-xs text-muted-foreground">
                {formatDate(repo.created_at)}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
