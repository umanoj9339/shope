import './index.css'

const ImageItems = props => {
  const {itemsProps, thiImgSelected} = props

  // ,imageUrl category

  const {id, thumbnailUrl} = itemsProps
  const selectThisImg = () => thiImgSelected(id)

  return (
    <li>
      <img
        src={thumbnailUrl}
        alt={id}
        className="img-car-tumbnail"
        onClick={selectThisImg}
        key={thumbnailUrl}
      />
    </li>
  )
}

export default ImageItems
