import { useState } from 'react';
import { Shield } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0A261B] via-[#11181F] to-[#1D1215] text-white/90 p-6 select-none ${className}`}
      >
        <div className="border border-white/15 p-4 flex flex-col items-center gap-3 max-w-xs text-center">
          <Shield className="w-7 h-7 text-[#C8102E]" aria-hidden="true" />
          <span className="font-display text-lg tracking-wide uppercase">
            {fallbackLabel || 'Official Bangladesh Kickboxing Association'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
