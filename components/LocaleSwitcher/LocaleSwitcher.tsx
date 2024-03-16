'use client'

import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect(){
    
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const localActive = useLocale();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        
        startTransition(() => {
          router.replace(`/${nextLocale}`)
        });
      }

      return (
        <div className="absolute top-8 left-8 z-10 rounded-md p-2">
            <select
                className=""
                defaultValue={localActive}
                onChange={onSelectChange}
            >
                <option value='en'>EN</option>
                <option value='pt'>PT</option>
            </select>
        </div>
      )
}