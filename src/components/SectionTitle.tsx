export const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="px-2 mx-2 w-full max-w-5xl flex items-start justify-start">
            <h1 className="text-5xl font-bold my-4 text-center text-pink-300">{title}</h1>
        </div>
    )
}