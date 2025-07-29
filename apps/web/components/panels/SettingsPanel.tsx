/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AlignLeft, AlignCenter, AlignRight, Type, Palette, XIcon } from 'lucide-react';
import { supportedFonts } from '@/constants';
import { constainsSubstring } from '@/lib/utils';
import { AssetCategory } from '@repo/db';
import { useModal } from '@/context/ModalContext';
import AssetsCards from '../ui/assetsCards';
import { Separator } from '@workspace/ui/components/ui/separator';
import { Button } from '@workspace/ui/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@workspace/ui/components/ui/dropdown-menu';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@workspace/ui/components/ui/select';
import { Input } from '@workspace/ui/components/ui/input';


interface SettingsPanelProps {
  selectedElement: any;
  onUpdate: (updates: Partial<any>) => void;
  categories: AssetCategory[];
}

export default function SettingsPanel({
  selectedElement,
  onUpdate,
  categories,
}: SettingsPanelProps) {
  const categoriesDropdownOptions = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const { hideModal, showModal } = useModal();

  if (!selectedElement || selectedElement.width === 0 || selectedElement.height === 0) {
    return (
      <div className="z-50 absolute right-2 md:bottom-2 lg:top-[35%] w-[230px] h-[250px] bg-slate-800 backdrop-blur-sm rounded-xl shadow-lg text-white ring-1 ring-white">
        <h6 className="p-3 font-mono text-sm font-bold">Settings</h6>
        <Separator className="bg-white/35" />
        <div className="flex items-center justify-center h-[210px]">
          <p className="text-xs text-gray-400">Select an element to customize</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-2 md:bottom-2 lg:top-[35%] w-[230px] h-[250px] bg-slate-800 backdrop-blur-sm rounded-xl shadow-lg text-white ring-1 ring-white">
      <h6 className="p-3 font-mono text-sm font-bold">Settings</h6>
      <Separator className="bg-white/35" />
      <div className="space-y-2 p-2 h-[210px] overflow-y-auto">
        {selectedElement.type === 'textbox' && (
          <>
            {/* Text Input */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4 text-gray-400" />
                <span className="text-xs font-medium">Text</span>
              </div>
              <Input
                value={selectedElement.text}
                onChange={e => onUpdate({ text: e.target.value })}
                className="h-6 w-24 bg-slate-700 border-slate-600 text-xs"
              />
            </div>

            {/* Font Family */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Font</span>
              </div>
              <Select
                value={supportedFonts.find(ele =>
                  constainsSubstring(ele, selectedElement?.fontFamily)
                )}
                onValueChange={value => onUpdate({ fontFamily: value })}
              >
                <SelectTrigger className="h-6 w-24 bg-slate-700 border-slate-600 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="">
                  {supportedFonts.map(font => (
                    <SelectItem
                      key={font}
                      value={font}
                      className="text-xs"
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Font Size */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Size</span>
              </div>
              <Input
                type="number"
                value={selectedElement.fontSize}
                onChange={e => onUpdate({ fontSize: Number(e.target.value) })}
                className="h-6 w-16 bg-slate-700 border-slate-600 text-xs"
              />
            </div>

            {/* Color */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4 text-gray-400" />
                <span className="text-xs font-medium">Color</span>
              </div>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={selectedElement.fill}
                  onChange={e => onUpdate({ fill: e.target.value })}
                  className="w-6 h-6 p-0.5 bg-slate-700 border-slate-600"
                />
                <Input
                  value={selectedElement.fill}
                  onChange={e => onUpdate({ fill: e.target.value })}
                  className="h-6 w-20 bg-slate-700 border-slate-600 text-xs"
                  placeholder="#000000"
                />
              </div>
            </div>

            {/* Text Alignment */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Align</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => onUpdate({ textAlign: 'left' })}
                  className={`p-1 rounded ${selectedElement.textAlign === 'left' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <AlignLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onUpdate({ textAlign: 'center' })}
                  className={`p-1 rounded ${selectedElement.textAlign === 'center' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <AlignCenter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onUpdate({ textAlign: 'right' })}
                  className={`p-1 rounded ${selectedElement.textAlign === 'right' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <AlignRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}

        {selectedElement.type === 'image' && (
          <>
            {/* Image Source */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[195px] text-gray-900"
                  >
                    Select Image Category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categoriesDropdownOptions.map(category => (
                    <DropdownMenuItem
                      key={category.value}
                      onClick={() => showModal(<AssetsCards categoryId={category.value} />)}
                      className="text-sm"
                    >
                      {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Image Scale */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Scale</span>
              </div>
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  value={selectedElement.width}
                  onChange={e => onUpdate({ width: Number(e.target.value) })}
                  className="h-6 w-12 bg-slate-700 border-slate-600 text-xs p-0 px-1"
                  placeholder="X"
                />
                <span>
                  <XIcon size={15} />
                </span>
                <Input
                  type="number"
                  value={selectedElement.height}
                  onChange={e => onUpdate({ height: Number(e.target.value) })}
                  className="h-6 w-12 bg-slate-700 border-slate-600 text-xs p-0 px-1"
                  placeholder="Y"
                />
              </div>
            </div>

            {/* Image Rotation */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Rotation</span>
              </div>
              <Input
                type="number"
                value={selectedElement.angle}
                onChange={e => onUpdate({ angle: Number(e.target.value) })}
                className="h-6 w-16 bg-slate-700 border-slate-600 text-xs"
              />
            </div>

            {/* Image Opacity */}
            <div className="flex items-center justify-between p-2 hover:bg-gray-100/20 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Opacity</span>
              </div>
              <Input
                type="number"
                value={selectedElement.opacity}
                onChange={e => onUpdate({ opacity: Number(e.target.value) })}
                className="h-6 w-16 bg-slate-700 border-slate-600 text-xs"
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
