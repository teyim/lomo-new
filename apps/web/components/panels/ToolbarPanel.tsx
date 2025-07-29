/* eslint-disable no-unused-vars */
import { Download, ZoomIn, ZoomOut, FileImage, LayoutGrid, Shovel } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Background } from '@repo/db';
import BackgroundCards from '../sections/modulesCards';
import { LayoutWithElements } from '@/types';
import ModulesCards from '../sections/modulesCards';
import { Button } from '@workspace/ui/components/ui/button';

interface ToolbarPanelProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onExport: () => void;
  zoomLevel: number;
  backgroundData: Background[];
  layoutData: LayoutWithElements[];
}

export default function ToolbarPanel({
  onZoomIn,
  onZoomOut,
  onExport,
  zoomLevel,
  backgroundData,
  layoutData,
}: ToolbarPanelProps) {
  const { hideModal, showModal } = useModal();

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-800 backdrop-blur-sm rounded-xl shadow-lg text-white ring-1 ring-white p-2">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8"
          onClick={() => showModal(<ModulesCards backgrounds={backgroundData} />)}
        >
          <FileImage className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => showModal(<ModulesCards layouts={layoutData} />)}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomOut}
          className="h-8 w-8"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-xs w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomIn}
          className="h-8 w-8"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-px h-6 bg-white/35" />
      <Button
        variant="ghost"
        size="icon"
        onClick={onExport}
        className="h-8 w-8"
      >
        <Download className="h-4 w-4" />
      </Button>
    </div>
  );
}
