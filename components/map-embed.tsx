"use client"

import { useState } from "react"

export default function MapEmbed() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return null // Return nothing if there's an error
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.987996159598!2d14.4690448!3d50.067961499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b931a9e373421%3A0xc28f5eaec8b230e1!2zTWF5b3XFoQ!5e1!3m2!1sda!2s!4v1744330687433!5m2!1sda!2s"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mayouš Location"
      className="rounded-lg"
      onError={() => setHasError(true)}
    />
  )
}
