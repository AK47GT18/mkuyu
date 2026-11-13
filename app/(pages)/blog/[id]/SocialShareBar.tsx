'use client'

import { useState, useEffect } from 'react'
import { FiShare2, FiCopy } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

interface SocialShareBarProps {
  title: string
  id: string
}

export default function SocialShareBar({ title, id }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const shareText = encodeURIComponent(`${title} — Mkuyu Field Notes`)
  const shareUrl = encodeURIComponent(currentUrl || `https://mkuyulodge.com/blog/${id}`)

  return (
    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-forest-green/20 shadow-md text-left space-y-4">
      <div className="flex items-center gap-2 text-forest-green">
        <FiShare2 size={16} />
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14240E]">
          Share This Dispatch
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all text-xs font-bold border border-[#25D366]/20"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp size={16} />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all text-xs font-bold border border-[#1877F2]/20"
          aria-label="Share on Facebook"
        >
          <FaFacebook size={16} />
          <span>Facebook</span>
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black/5 hover:bg-black text-black hover:text-white transition-all text-xs font-bold border border-black/15"
          aria-label="Share on X"
        >
          <FaTwitter size={15} />
          <span>X Post</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition-all text-xs font-bold border border-[#0A66C2]/20"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin size={15} />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-forest-light hover:bg-forest-mint text-[#14240E] transition-all text-xs font-bold border border-forest-green/20"
      >
        <FiCopy size={14} className="text-forest-green" />
        <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Article Link'}</span>
      </button>
    </div>
  )
}

