import Image from "next/image";

type AvatarGroupProps = {
    avatars: string[];
    countLabel?: string;
};

export default function AvatarGroup({ avatars, countLabel }: AvatarGroupProps) {
    return (
        <div className="flex items-center">
            {avatars.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    className={`h-7 w-7 rounded-full border-2 border-gray-50 object-cover ${index > 0 ? "-ml-2" : ""}`}
                />
            ))}
            {countLabel && (
                <span className="-ml-2 rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold text-gray-950">
                    {countLabel}
                </span>
            )}
        </div>
    );
}