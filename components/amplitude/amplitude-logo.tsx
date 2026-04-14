"use client"

import Image from "next/image"

interface AmplitudeLogoProps {
  className?: string
}

export function AmplitudeLogo({ className = "h-7" }: AmplitudeLogoProps) {
  return (
    <Image
      src="/images/amplitude-logo-white.png"
      alt="Amplitude"
      width={140}
      height={28}
      className={className}
      priority
    />
  )
}
