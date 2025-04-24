"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface AnimationLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export function AnimationLink({ ...props }: AnimationLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link className={props.className} href={props.href}>
        {props.children}
      </Link>
    </motion.div>
  );
}
