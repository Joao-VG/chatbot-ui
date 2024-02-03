"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="www.equitys.com.br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <h1 className="text-4xl font-bold tracking-wide">Equitys Tecnologia</h1>
      </div>

      <div className="text-4xl font-bold tracking-wide">Ai</div>
    </Link>
  )
}
