"use client";

import { MyProjects } from "@/components/sections/projects/my-projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MyFollowers } from "@/components/sections/projects/my-followers";
import { MyFollowings } from "@/components/sections/projects/my-followings";

interface GitHubProfile {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function MyProfile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("https://api.github.com/users/pedrogbraz");
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
      }
    }

    fetchProfile();
  }, []);

  return (
    <section className="px-4 py-[18px] space-y-6">
      <div className="flex flex-col xxs:flex-row gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
          <h1 className="font-medium text-muted-foreground">Meu Perfil</h1>
        </div>
      </div>

      {profile && (
        <div className="flex flex-col xxs:flex-row items-center gap-4">
          <div className="rounded-3xl border p-1.5">
            <div className="relative size-28">
              <Image
                src={profile.avatar_url}
                alt={`${profile.name}'s avatar`}
                className="rounded-2xl border border-zinc-300 dark:border-zinc-600"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col items-center xxs:items-start justify-center gap-4">
            <div className="flex flex-col items-center xxs:items-start">
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-sm text-muted-foreground">@{profile.login}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Dialog>
                <DialogTrigger className="hover:cursor-pointer">
                  <h1 className="text-muted-foreground">
                    <b className="text-black dark:text-white">
                      {profile.followers}
                    </b>{" "}
                    seguidores
                  </h1>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Meus Seguidores</DialogTitle>
                    <DialogDescription>
                      Veja todos meus seguidores
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <MyFollowers />
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="hover:cursor-pointer">
                  <h1 className="text-muted-foreground">
                    <b className="text-black dark:text-white">
                      {profile.following}
                    </b>{" "}
                    seguindo
                  </h1>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quem eu sigo</DialogTitle>
                    <DialogDescription>
                      Veja todas as pessoas que eu sigo
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <MyFollowings />
                  </div>
                </DialogContent>
              </Dialog>
              <h1 className="text-muted-foreground">
                <b className="text-black dark:text-white">
                  {profile.public_repos}
                </b>{" "}
                repositórios
              </h1>
            </div>
          </div>
        </div>
      )}
      <section className="dark:bg-[#2C2C2C] rounded-md px-4 py-[18px] space-y-5">
        {/* Projects section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
            <h1 className="font-medium text-muted-foreground">
              Meus Repositórios Públicos
            </h1>
          </div>
        </div>
        <MyProjects />
      </section>
    </section>
  );
}
