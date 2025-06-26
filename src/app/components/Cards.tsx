interface cardProps {
    title: string,
    description: string,
    icon: string
}

export function Cards({ title, description, icon }: cardProps) {
    return (

        <div className="
        bg-violet-200 
        p-6 rounded-xl 
        hover:shadow-md transition duration-300"
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="
            text-xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600">{description}</p>

        </div>
    )
}