"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    setStatusMessage("");

    const webhookURL =
      "https://discord.com/api/webhooks/1365069185847136316/kS7Y8tXhDM9L6CcAREq4SHRMg6A9nkRMOaJLua-Quh2q2rbwsj5Et-YwgUZyXIY7hPHo";

    const payload = {
      content: `📩 **Novo Contato:**\n**Nome:** ${form.name}\n**Email:** ${form.email}\n**Mensagem:**\n${form.message}`,
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm({ name: "", email: "", message: "" });
      setStatusMessage("Mensagem enviada com sucesso!");
      setTimeout(() => setStatusMessage(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatusMessage("Erro ao enviar mensagem. Tente novamente.");
      setTimeout(() => setStatusMessage(""), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-4 py-[18px] space-y-8">
      <div className="flex flex-col xxs:flex-row gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
          <h1 className="font-medium text-muted-foreground">Fale Comigo</h1>
        </div>
        <Badge className="bg-green-400/25 dark:bg-green-800/25 gap-2 text-green-800 dark:text-green-700 uppercase font-semibold rounded-full">
          <div className="bg-green-700 size-1.5 rounded-full" />
          Disponível para serviços
        </Badge>
      </div>

      <section>
        <h1 className="text-3xl font-medium">Full Stacks</h1>
        <p className="text-muted-foreground mt-1">
          Precisa de um desenvolvedor Full-Stacks?
        </p>
        <div className="mt-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Seu nome completo"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Seu email para contato"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <Textarea
            placeholder="Me conte um pouco sobre o que precisa"
            className="resize-none h-40"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <Button className="w-full" onClick={handleSubmit} disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </Button>
          {statusMessage && (
            <div className="fixed text-xs font-medium bg-green-400/25 dark:bg-green-800/25 text-green-800 dark:text-green-700 bottom-4 right-4 p-4 rounded-lg">
              <p
                className={
                  statusMessage.includes("sucesso")
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {statusMessage}
              </p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
