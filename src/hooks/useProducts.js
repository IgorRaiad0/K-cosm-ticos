import { useProductContext } from '../context/ProductContext';

/**
 * Hook para acessar os produtos globais buscados do Google Sheets
 */
export const useProducts = () => {
    return useProductContext();
};
