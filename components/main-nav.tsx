'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

export default function MainNav({
    className,...props}:React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    // console.log('pathname: ',pathname)
    const params = useParams();
    // console.log('params: ',params)
    const routes = [
        {
            href:`/${params.storeId}`,
            label:'總覽',
            active : pathname === `/${params.storeId}`,
        },
        {
          href:`/${params.storeId}/billboards`,
          label:'公布欄',
          active : pathname === `/${params.storeId}/billboards`,
        },
        {
          href:`/${params.storeId}/categories`,
          label:'類別',
          active : pathname === `/${params.storeId}/categories`,
        },
        {
          href:`/${params.storeId}/products`,
          label:'產品',
          active : pathname === `/${params.storeId}/products`,
        },
        {
          href:`/${params.storeId}/sizes`,
          label:'尺寸',
          active : pathname === `/${params.storeId}/sizes`,
        },
        {
          href:`/${params.storeId}/colors`,
          label:'顏色',
          active : pathname === `/${params.storeId}/colors`,
        },
        {
          href:`/${params.storeId}/orders`,
          label:'訂單',
          active : pathname === `/${params.storeId}/orders`,
        },
        {
            href:`/${params.storeId}/settings`,
            label:'設置',
            active : pathname === `/${params.storeId}/settings`,
        },

    ]
    

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6',className)}>
        {routes.map((route)=>(
            <Link
            key ={route.href} 
            href ={route.href}
            className={cn("text-sm font-medium transtion-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground")
            }>
              {route.label}  
            </Link>
        ))}
    </nav>
  )
}

