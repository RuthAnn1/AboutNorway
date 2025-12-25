import React from 'react';

export default function ImageArea({ src = '', alt = 'Insert image', caption = '' }) {
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="28">Insert image here</text></svg>'
  )}`;

  return (
    <div className="image-area" style={{ border: '1px dashed #ccc', padding: '0.25rem', maxWidth: 900, marginTop: '1rem' }}>
      <img src={src || placeholder} alt={alt} style={{ width: '100%', display: 'block' }} />
      {caption ? <small style={{ display: 'block', marginTop: '.5rem', color: '#555' }}>{caption}</small> : null}
    </div>
  );
}
