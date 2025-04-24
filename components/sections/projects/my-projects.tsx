"use client";

import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  html_url: string;
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

  return (
    <div>
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li key={repo.html_url}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
