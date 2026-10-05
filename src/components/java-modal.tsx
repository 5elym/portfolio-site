"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, AlertCircle } from "lucide-react";
import Script from "next/script";

interface CheerpJWindow extends Window {
  cheerpjInit?: (options: { version: 8 }) => Promise<void>;
  cheerpjCreateDisplay?: (width: number, height: number, element: HTMLDivElement) => void;
  cheerpjRunJar?: (jarPath: string) => Promise<void>;
}

let cheerpjInitPromise: Promise<void> | null = null;

interface JavaModalProps {
  isOpen: boolean;
  onClose: () => void;
  jarUrl: string;
}

export default function JavaModal({ isOpen, onClose, jarUrl }: JavaModalProps) {
  const displayRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    if (!isScriptLoaded) {
      return () => {
        cancelled = true;
      };
    }

    const startJavaApplication = async () => {
      try {
        const cheerpj = window as CheerpJWindow;
        if (!cheerpj.cheerpjInit) {
          throw new Error("The CheerpJ script loaded without exposing its initializer.");
        }

        if (!cheerpjInitPromise) {
          cheerpjInitPromise = cheerpj.cheerpjInit({ version: 8 }).catch((error: unknown) => {
            cheerpjInitPromise = null;
            throw error;
          });
        }
        await cheerpjInitPromise;

        if (cancelled || !displayRef.current) return;
        if (!cheerpj.cheerpjCreateDisplay || !cheerpj.cheerpjRunJar) {
          throw new Error("CheerpJ initialized without exposing its application API.");
        }

        cheerpj.cheerpjCreateDisplay(-1, -1, displayRef.current);
        setIsInitializing(false);

        const virtualPath = jarUrl.startsWith("/app/") ? jarUrl : `/app${jarUrl.startsWith("/") ? "" : "/"}${jarUrl}`;
        await cheerpj.cheerpjRunJar(virtualPath);
      } catch (error) {
        if (cancelled) return;
        console.error("Failed to load Java application:", error);
        setErrorMessage(error instanceof Error ? error.message : String(error));
        setIsInitializing(false);
      }
    };

    void startJavaApplication();
    return () => {
      cancelled = true;
    };
  }, [isOpen, isScriptLoaded, jarUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <Script
            id="cheerpj-runtime"
            src="https://cjrtnc.leaningtech.com/3.1/cj3loader.js"
            strategy="afterInteractive"
            onReady={() => {
              setIsInitializing(true);
              setErrorMessage(null);
              setIsScriptLoaded(true);
            }}
            onError={() => {
              setErrorMessage("Could not download the CheerpJ runtime script.");
              setIsInitializing(false);
            }}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-[0_0_50px_rgba(239,68,68,0.1)] overflow-hidden"
          >
            {/* Fake Desktop Window Header */}
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
                <Terminal size={14} className="text-primary" />
                <span>JVM_RUNTIME_ENV</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Canvas area */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {/* Loading state */}
              {isInitializing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-primary gap-4 z-10 bg-black">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="animate-pulse tracking-widest text-sm">INITIALIZING WEBASSEMBLY JVM...</p>
                </div>
              )}

              {/* Error state */}
              {errorMessage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-red-500 gap-4 z-10 bg-black">
                  <AlertCircle size={32} />
                  <p className="tracking-widest text-sm">FATAL ERROR: FAILED TO START JAVA APPLICATION</p>
                  <p className="max-w-xl px-4 text-center text-xs text-zinc-400">{errorMessage}</p>
                  <p className="px-4 text-center text-xs text-zinc-500">
                    Make sure the JAR is in the public folder and was compiled for Java 8.
                  </p>
                </div>
              )}

              {/* CheerpJ injects the Java Canvas directly into this div */}
              <div ref={displayRef} className="w-full h-full flex items-center justify-center"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
