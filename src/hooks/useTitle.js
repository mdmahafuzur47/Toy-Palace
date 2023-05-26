import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `ToyPalace | ${title}`
    },[title])
};
export default useTitle;