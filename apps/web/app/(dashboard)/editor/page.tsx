import React from 'react';
import { getAllBackgrounds, getAllLayouts, getCategories } from '@/services';
import TemplateEditor from '@/components/TemplateEditor';
import Image from 'next/image';
import abstractArt from 'public/illustrations/abstract-art-6.svg';

async function Page() {
  const backgroundData = await getAllBackgrounds();
  const layoutData = await getAllLayouts();
  const categoryData = await getCategories();

  return (
    <div className="relative min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-2 sm:p-4">
      <div className="w-full flex flex-col items-center justify-center content-center lg:hidden h-screen text-center px-4">
        <div className="mb-6">
          <Image
            src={abstractArt}
            alt="Mobile Editor Coming Soon"
            width={150}
            height={150}
            className="sm:w-[200px] sm:h-[200px]"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Mobile Editor Coming Soon</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6">
          We're working on a mobile-friendly editor experience. For now, please use a desktop or tablet device for the best editing experience.
        </p>
        <div className="space-y-3 w-full max-w-sm">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-sm mb-2">What you can do:</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Browse templates on desktop</li>
              <li>• Create thumbnails with full features</li>
              <li>• Export in HD quality</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative z-0">
        <TemplateEditor
          backgroundData={backgroundData.backgrounds}
          layoutData={layoutData.layouts}
          categoriesData={categoryData.assetCategories}
        />
      </div>
    </div>
  );
}

export default Page;
