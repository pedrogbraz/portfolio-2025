"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

interface GitHubFollower {
  login: string;
  avatar_url: string;
  html_url: string;
}

export function MyFollowers() {
  const [followers, setFollowers] = useState<GitHubFollower[]>([]);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const res = await fetch(
          "https://api.github.com/users/pedrogbraz/followers"
        );
        const data = await res.json();
        setFollowers(data);
      } catch (error) {
        console.error("Erro ao buscar seguidores do GitHub:", error);
      }
    }

    fetchFollowers();
  }, []);

  return (
    <ScrollArea className="h-[70vh] w-full rounded-md pr-4 space-y-4">
      {followers.map((follower) => (
        <Link
          key={follower.login}
          href={follower.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex my-1.5 items-center gap-2 rounded-xl shadow py-2 px-4 border"
        >
          <div className="relative size-16">
            <Image
              src={follower.avatar_url}
              alt={follower.login}
              className="rounded-full object-cover"
              fill
            />
          </div>
          <span className="text-sm font-medium">{follower.login}</span>
        </Link>
      ))}
    </ScrollArea>
  );
}
