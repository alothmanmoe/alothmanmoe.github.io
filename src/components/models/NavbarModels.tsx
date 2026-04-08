import {JSX, ReactNode} from "react";

export interface FullNavbarBodyProps {
    children: ReactNode
    visible?: boolean
}

export interface FullNavbarItemsProps {
    routes: {
        name: string
        link: string
        icon: JSX.Element
    }[]
    minimized: boolean
    onItemClick?: () => void
}

export interface MobileNavbarBodyProps {
    children: ReactNode
    visible?: boolean
}

export interface MobileNavbarToggleProps {
    isOpen: boolean
    onClick: () => void
}

export interface MobileNavbarMenuProps {
    children: ReactNode
    isOpen: boolean
}
