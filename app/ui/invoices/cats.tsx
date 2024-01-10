import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CatAnswer({ answer }: { answer: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': answer === 'Yes',
          'bg-green-500 text-white': answer === 'No',
        },
      )}
    >
      {answer === 'Yes' ? (
        <>
          Yes
          <FaceSmileIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {answer === 'No' ? (
        <>
          No
          <FaceFrownIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
    </span>
  );
}
