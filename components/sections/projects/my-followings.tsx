"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

interface GitHubFollowings {
  login: string;
  avatar_url: string;
  html_url: string;
}

export function MyFollowings() {
  const [followings, setFollowings] = useState<GitHubFollowings[]>([]);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const res = await fetch(
          "https://api.github.com/users/pedrogbraz/following"
        );
        const data = await res.json();
        setFollowings(data);
      } catch (error) {
        console.error("Erro ao buscar seguidores do GitHub:", error);
      }
    }

    fetchFollowers();
  }, []);

  return (
    <ScrollArea className="h-[70vh] w-full rounded-md pr-4">
      {followings.map((following) => (
        <Link
          key={following.login}
          href={following.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex my-1.5 items-center gap-2 rounded-xl shadow py-2 px-4 border"
        >
          <div className="relative size-16">
            <Image
              src={following.avatar_url}
              alt={following.login}
              className="rounded-full object-cover"
              fill
            />
          </div>
          <span className="text-sm font-medium">{following.login}</span>
        </Link>
      ))}
    </ScrollArea>
  );
}
