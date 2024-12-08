"use client";

import Link, { LinkProps } from "next/link"

interface BenefitItemProps {
    icon: string
    name: string
    url: string
}

export default function BenefitItem (props: BenefitItemProps) {
    return (
        <Link href={props.url}>
            <div className="benefit-item flex flex-col gap-2">
                <span className="icon">
                    <img src={props.icon} />
                </span>
                <h2>{props.name}</h2>
            </div>
        </Link>
    )
}