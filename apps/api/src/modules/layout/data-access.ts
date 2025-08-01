import { getDataAccessErrorMessage } from '../../utils/errors';
import { prisma } from '@repo/db';

import type { Layout } from '@repo/db';

export const fetchAllLayouts = async (): Promise<Layout[]> => {
  try {
    const layouts = await prisma.layout.findMany({
      include: { elements: true },
    });
    return layouts;
  } catch (error) {
    console.error(getDataAccessErrorMessage('layouts', 'get'), error);
    throw new Error(getDataAccessErrorMessage('layouts', 'get'));
  }
};
