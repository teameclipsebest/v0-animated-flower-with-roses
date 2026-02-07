'use client';

import { useState } from 'react';

export default function ShareButton() {
  const [showOptions, setShowOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleScreenshot = async () => {
    try {
      const canvas = await (window as any).html2canvas(document.body, {
        backgroundColor: '#0f0f0f',
        scale: 2,
        allowTaint: true,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `Pooja-RoseDay-${new Date().toISOString().split('T')[0]}.png`;
      link.click();
      setShowOptions(false);
    } catch (error) {
      console.log('[v0] Screenshot failed, using alternative method');
      alert('Please save the page manually or use your browser screenshot feature');
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowOptions(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Happy Rose Day - Pooja',
          text: 'Check out this special Rose Day message for me!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('[v0] Share failed');
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 z-40"
      >
        <span className="text-xl">📸</span>
      </button>

      {showOptions && (
        <div className="fixed bottom-24 right-6 bg-card border border-border/50 rounded-lg shadow-lg backdrop-blur-md p-2 z-40 animate-in fade-in slide-in-from-bottom duration-300">
          <button
            onClick={handleScreenshot}
            className="w-full px-4 py-2 text-left text-sm hover:bg-primary/10 rounded transition-colors duration-200 text-foreground"
          >
            Save Screenshot
          </button>
          <button
            onClick={handleShare}
            className="w-full px-4 py-2 text-left text-sm hover:bg-primary/10 rounded transition-colors duration-200 text-foreground"
          >
            {copied ? 'Link Copied!' : 'Share Link'}
          </button>
        </div>
      )}
    </div>
  );
}
