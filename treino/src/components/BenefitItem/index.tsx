"use client";

import Link, { LinkProps } from "next/link"

interface BenefitItemProps {
    icon: string
    name: string
    url: string
    color: string
}

export default function BenefitItem (props: BenefitItemProps) {
    return (
        <Link style={{backgroundColor: props.color}} className="bg-red-400 p-2 rounded-md " href={props.url}>
            <div className="benefit-item flex flex-col gap-2">
                <span className="icon w-8">
                    <img src={props.icon} />
                </span>
                <h2>{props.name}</h2>
            </div>
        </Link>
    )
}