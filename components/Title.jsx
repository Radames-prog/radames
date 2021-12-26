export default function Title(props){
    props.title
    return (
        <div className={`py-20 inset-0 flex items-center justify-center text-6xl font-bold text-gray-700 hover:text-opacity-60`}>
            <h1 className={`text-center`}>{props.title}</h1>
        </div>
    )

}