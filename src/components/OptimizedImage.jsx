import React, { useState, useEffect } from 'react';


// Hook para verificar suporte a WebP
const useWebPSupport = () => {
    const [supportsWebP, setSupportsWebP] = useState(null);

    useEffect(() => {
        let canceled = false;

        const img = new Image();
        img.onload = img.onerror = () => {
            if (!canceled) {
                setSupportsWebP(img.height === 2);
            }
        };
        img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

        return () => {
            canceled = true;
        };
    }, []);

    return supportsWebP;
};

// Converte extensão para .webp
const getWebPPath = (originalPath) => {
    if (!originalPath) return originalPath;
    return originalPath.replace(/\.(jpg|jpeg|png)$/i, '') + '.webp';
};

// Componente de imagem otimizada
const OptimizedImage = ({
    src,
    alt,
    className = '',
    loading = 'lazy',
    onLoad,
    onError,
    ...props
}) => {
    const supportsWebP = useWebPSupport();
    const [imageError, setImageError] = useState(false);

    const imageSrc =
        imageError || supportsWebP === false
            ? src
            : supportsWebP === true
                ? getWebPPath(src)
                : src;

    const handleError = (e) => {
        if (!imageError && supportsWebP === true) {
            setImageError(true); // fallback para JPG/PNG
        } else {
            onError?.(e);
        }
    };

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            loading={loading}
            onError={handleError}
            onLoad={onLoad}
            {...props}
        />
    );
};

export default OptimizedImage;
