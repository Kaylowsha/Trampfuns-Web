'use client';

import React from 'react';

export interface KuulaEmbedProps {
  tourUrl: string;
  title?: string;
  className?: string;
}

export const KuulaEmbed: React.FC<KuulaEmbedProps> = ({
  tourUrl,
  title = 'Tour Virtual 360°',
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <iframe
        src={tourUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        scrolling="no"
        title={title}
        className="rounded-xl"
      />
    </div>
  );
};
