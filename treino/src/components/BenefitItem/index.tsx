"use client";

interface BenefitItemProps {
    icon: string;
    name: string;
    color: string;
    onClick?: () => void;
}

export default function BenefitItem(props: BenefitItemProps) {
    return (
        <div
            style={{ backgroundColor: props.color }}
            className="p-2 rounded-md cursor-pointer"
            onClick={props.onClick} 
        >
            <div className="benefit-item flex flex-col gap-2">
                <span className="icon w-8">
                    <img src={props.icon} alt={`${props.name} Icon`} />
                </span>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}
