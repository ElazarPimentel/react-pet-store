// filename: src/components/ItemDetailContainer/ItemDetailContainer.jsx


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../../services/apiService';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('loading');
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAPI({ productId: itemId });
        if (!result || result.fail) {
          setStatus('fail');
        } else {
          setProduct(result);
          setStatus('success');
        }
      } catch (error) {
        setStatus('network-error');
      }
    };

    fetchData();
  }, [itemId]);

  return status === 'loading' ? (
    <p>Cargando...</p>
  ) : status === 'fail' ? (
    <ErrorMessage message="No se pudo cargar el detalle del producto." />
  ) : status === 'network-error' ? (
    <ErrorMessage message="Problema de red, por favor inténtalo más tarde." />
  ) : (
    <div className="ui-container">
      <ItemDetail {...product} />
    </div>
  );
}
