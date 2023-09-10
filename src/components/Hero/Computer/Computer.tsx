import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

import { Canvas, useThree } from '@react-three/fiber';

const Scene = () => {

    const [ position, setPosition ] = useState([ 0, window.innerWidth <= 380 ? -9.5 : -4.5, -0.8 ]);

    const model = useGLTF('./models/desktop_pc/scene.gltf');

    const { viewport } = useThree();

    // Define minimum and maximum scale values
    const minScale = 0.45;
    const maxScale = 1.05;

    // Calculate the initial scale based on the viewport width
    const initialScale = viewport.width / 20;

    // Calculate the scale factor to fit within the specified range
    const scaleFactor = Math.min(Math.max(initialScale, minScale), maxScale);

    // Update the position when the screen width changes
    const handleResize = () => {
        setPosition([ 0, window.innerWidth <= 380 ? -9.5 : -4.5, -0.8]);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <mesh scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <pointLight intensity={ 1 } />
            <Environment preset={ 'forest' } />
            <primitive object={ model.scene } position={ position } rotation={ [ 0, -0.8, -0.05 ] }/>
        </mesh>
    );
}

const Computer = () => {
    return (
        <Canvas frameloop={ 'demand' } shadows camera={ { position: [ 30, 10, 5 ], fov: 25 } } gl={ { preserveDrawingBuffer: true } }>
            <Suspense fallback={ undefined }>
                <OrbitControls enableZoom={ false } maxPolarAngle={ Math.PI / 2 } minPolarAngle={ Math.PI / 2 } />
                <Scene />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default Computer;