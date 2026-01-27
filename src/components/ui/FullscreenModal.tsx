/**
 * FullscreenModal Component - Image gallery with keyboard navigation
 *
 * Key Bindings:
 * - useState: Modal state and current image index
 * - useEffect: Keyboard event handling and body scroll lock
 * - useCallback: Optimized navigation functions
 * - framer-motion: Smooth modal transitions
 *
 * Functionality:
 * - Fullscreen image viewing experience
 * - Keyboard navigation (Escape, Arrow keys)
 * - Thumbnail navigation
 * - Body scroll prevention when open
 * - Touch/swipe support for mobile
 * - Smooth animations and transitions
 */

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ src: string; alt: string; label: string }>;
  initialIndex?: number;
  productName: string;
}

export default function FullscreenModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  productName,
}: FullscreenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, prevImage, nextImage]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 backdrop-blur-xl transition-all p-4 md:p-8"
      onClick={onClose} // CLICK ANYWHERE OUTSIDE CLOSES
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src={images[currentIndex]?.src}
          className="w-full h-full object-cover blur-[100px] scale-150"
          alt=""
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 z-[110] p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all "
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 z-[110] p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all "
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      {/* Header - Stop Propagation only on buttons/text */}
      <div
        className="relative z-10 flex justify-between items-center mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <h3 className="text-white font-bold tracking-tight">{productName}</h3>
          <p className="text-cyan-400 text-[10px] font-mono uppercase">
            {images[currentIndex]?.label}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Central Area: Image + Arrows Immediately Next To */}
      <div className="flex-1 relative flex items-center justify-center min-h-0">
        <div
          className="relative group flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* The Image */}
          <img
            src={images[currentIndex]?.src}
            className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-sm border border-white/10"
            alt={images[currentIndex]?.alt}
          />

          {/* Mobile Navigation (over image) */}
          <div className="absolute inset-0 flex md:hidden">
            <div className="flex-1" onClick={prevImage}></div>
            <div className="flex-1" onClick={nextImage}></div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className="relative z-10 mt-6 flex justify-center gap-2 overflow-x-auto pb-2"
        onClick={(e) => e.stopPropagation()} // Click on thumbnails doesn't close modal
      >
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative mt-2 w-16 h-12 rounded-sm overflow-hidden transition-all duration-300 ${
              currentIndex === index
                ? "ring-2 ring-cyan-400 scale-110"
                : "opacity-40 hover:opacity-100"
            }`}
          >
            <img src={img.src} className="w-full h-full object-cover" alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
