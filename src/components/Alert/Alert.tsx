import * as React from 'react';
import { useAlertTheming, Variant } from './helper';



export const Alert: React.FC<React.PropsWithChildren<{
  variant?: Variant,
  header?: string
  content?: string
}>> = (prop) => {

  const theming = useAlertTheming(prop.variant)


    return <div className={`max-w-lg overflow-hidden rounded-lg shadow-md ${theming}`}>
    <div className="flex">
      <div className="space-y-1 p-4">
        <p className="font-bold capitalize">
         {prop.header}
        </p>
        <p className="text-sm">
          {prop.content}
        </p>
      </div>
    </div>
  </div>
}
