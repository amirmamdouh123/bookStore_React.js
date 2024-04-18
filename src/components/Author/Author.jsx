import styles from "./Author.module.css"
const {AuthorContainer,authImage,authName} = styles
function Author({id,name,image}){
    return (
        <div className={AuthorContainer}>

            <div className={authImage}>
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
            </div>
            <p className={authName}>{name}</p>
        </div>
    )

}

export default Author;