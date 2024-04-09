import styles from "./Author.module.css"
const {AuthorContainer,authImage,authName} = styles
function Author({id,name,image}){

    return (
        <div className={AuthorContainer}>

            <div className={authImage}>
                <img src="src/assets/imgs/authors/nizar.jpg" alt="" />
            </div>
            <p className={authName}>{name}</p>
        </div>
    )

}

export default Author;