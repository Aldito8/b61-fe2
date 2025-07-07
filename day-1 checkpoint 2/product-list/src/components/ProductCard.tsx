import { useState } from 'react';
import { Button } from './Button';

interface ProductCardProps {
    name: string
    price: number
    image: string
    onToggle: (isAdded: boolean) => void
}

export function ProductCard({ name, price, image, onToggle }: ProductCardProps) {
    const [added, setAdded] = useState(false)

    function handleToggle() {
        setAdded(!added)
        onToggle(!added)
    };

    return (
        <div style={{ padding: 10, margin: 10 }}>
            <img src={image} width={200} />
            <h2>{name}</h2>
            <p>Price: Rp.{price}</p>
            <Button
                text={added ? 'Added' : 'Add to Cart'}
                eventOnClick={handleToggle}
                style={{
                    backgroundColor: added ? 'red' : 'green',
                    color: 'white',
                    padding: '5px 10px'
                }}
            />
        </div>
    )
}

