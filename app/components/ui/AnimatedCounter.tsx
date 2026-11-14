'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number | string
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export default function AnimatedCounter({
  value,
  duration = 1600,
  suffix = '',
  prefix = '',
  className = '',
  decimals,
}: AnimatedCounterProps) {
  const numericValue = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.]/g, ''))
  const isDecimal = value.toString().includes('.')
  const decimalPlaces = decimals !== undefined ? decimals : (isDecimal ? (value.toString().split('.')[1]?.length || 2) : 0)

  const [displayValue, setDisplayValue] = useState<number>(0)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-out cubic function for smooth deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)
            const current = easeOutProgress * numericValue

            setDisplayValue(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(numericValue)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated, numericValue, duration])

  // Formatter for final display
  const formatted = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
