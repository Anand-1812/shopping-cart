import { useEffect } from "react";


export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);


}
