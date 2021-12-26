export default function SubTitle(props){
    props.subTitle
    return (
        <div className={`py-8 px-40 inset-0 flex items-center justify-center text-3xl font-bold text-gray-600 hover:text-opacity-60`}>
            <h1 className={`text-center`}>{props.subTitle}</h1>
        </div>
    )

}