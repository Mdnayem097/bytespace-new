type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 rounded-full bg-gray-100"
        >
            <div
                className="h-full rounded-full bg-lime-400"
                style={{ width: `${value}%` }}
            />
        </div>
    );
}