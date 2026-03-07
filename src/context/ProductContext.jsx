import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext deve ser usado dentro de um ProductProvider');
    }
    return context;
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const SHEET_URL = import.meta.env.VITE_SHEET_URL;

    useEffect(() => {
        if (!SHEET_URL) {
            setLoading(false);
            return;
        }

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(SHEET_URL);
                if (!response.ok) throw new Error('Falha ao carregar os dados da planilha');

                const csvData = await response.text();
                const parsedProducts = parseCSV(csvData);

                setProducts(parsedProducts);
                setError(null);
            } catch (err) {
                console.error('Erro ao buscar produtos:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [SHEET_URL]);

    const parseCSV = (csv) => {
        const lines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
        if (lines.length < 2) return [];

        const firstLine = lines[0];
        const separator = firstLine.includes(';') ? ';' : ',';
        const regex = new RegExp(`(?:^|${separator})(?:"([^"]*)"|([^${separator}]*))`, 'g');

        const getRowValues = (line) => {
            const values = [];
            let match;
            while ((match = regex.exec(line)) !== null) {
                values.push((match[1] || match[2] || '').trim());
            }
            return values;
        };

        const headers = getRowValues(lines[0]).map(h => h.toLowerCase());

        return lines.slice(1).map(line => {
            const values = getRowValues(line);
            const product = {};

            headers.forEach((header, index) => {
                const value = values[index];
                const key = mapHeaderToKey(header);

                if (key === 'id') {
                    product.id = parseInt(value) || index;
                } else if (key === 'priceNumber') {
                    product.priceNumber = parseFloat(value.replace(',', '.')) || 0;
                } else {
                    product[key] = value;
                }
            });

            if (!product.priceNumber && product.price) {
                const cleanPrice = product.price.replace(/[^\d,.-]/g, '').replace(',', '.');
                product.priceNumber = parseFloat(cleanPrice) || 0;
            }

            return product;
        });
    };

    const mapHeaderToKey = (header) => {
        const h = header.toLowerCase();
        if (h === 'nome' || h === 'name' || h === 'produto') return 'name';
        if (h === 'preço' || h === 'preco' || h === 'price') return 'price';
        if (h === 'categoria' || h === 'category') return 'category';
        if (h === 'tag' || h === 'rótulo' || h === 'rotulo') return 'tag';
        if (h === 'imagemurl' || h === 'image' || h === 'imagem' || h === 'img') return 'image';
        if (h === 'descrição' || h === 'descricao' || h === 'description') return 'description';
        if (h === 'id') return 'id';
        if (h === 'preçonumber' || h === 'preconumber') return 'priceNumber';
        return h;
    };

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};
