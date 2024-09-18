export default function HeaderMenu({title}){
    return(
        <div>
            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-color-primary">{title}</h3>
            </div>
        </div>
    )
}