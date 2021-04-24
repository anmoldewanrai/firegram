import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
  const {images} = useFirestore('firegram');

  return ( 
    <div className="img-grid">
      {images && images.map( image =>{
        return <motion.div className="img-wrap"
        layout 
        whileHover={{opacity: 1}}
        onClick={() => setSelectedImg(image.url)}
        key={image.id}>
          <motion.img src={image.url}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1}}
         alt="uploaded pic"/>
        </motion.div>
      })}
    </div>
   );
}
 
export default ImageGrid;