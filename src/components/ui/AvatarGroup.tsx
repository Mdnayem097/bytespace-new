import Image from "next/image";

type AvatarGroupProps = {
    avatars: string[];
    countLabel?: string;
    size?: number;
};

export default function AvatarGroup({ avatars, countLabel, size = 28 }: AvatarGroupProps) {
    return (
        <div className="flex items-center">
            {avatars.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt=""
                    width={size}
                    height={size}
                    style={{ width: size, height: size }}
                    className={`rounded-full border-2 border-gray-50 object-cover ${index > 0 ? "-ml-2" : ""}`}
                />
            ))}
            {countLabel && (
                <span className="-ml-2 rounded-full bg-lime-400 px-2.5 py-1.5 text-xs font-bold text-gray-950">
                    {countLabel}
                </span>
            )}
        </div>
    );
}