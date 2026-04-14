"use client"

interface AmplitudeLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

export function AmplitudeLogo({ className = "h-8", showText = true, textClassName = "text-white" }: AmplitudeLogoProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Amplitude Logo Mark - Stylized A with data visualization */}
      <svg 
        viewBox="0 0 32 32" 
        className={className} 
        fill="none"
        aria-label="Amplitude"
      >
        <path 
          d="M16 3L4 28H10.5L16 17L21.5 28H28L16 3Z" 
          fill="#0052F2"
        />
        <path 
          d="M11 22H21" 
          stroke="#0052F2" 
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span className={`font-semibold text-lg tracking-tight ${textClassName}`}>
          amplitude
        </span>
      )}
    </div>
  )
}
