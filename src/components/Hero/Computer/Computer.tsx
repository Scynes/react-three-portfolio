import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

import { Canvas, useThree } from '@react-three/fiber';
import useWindowSizeMobile from '@hooks/useWindowSizeMobile';

const Scene = () => {

    const model = useGLTF('./models/desktop_pc/scene.gltf');

    const { viewport } = useThree();

    const { isMobile } = useWindowSizeMobile(380);

    // Calculate the scale factor to fit within the specified range
    const scaleFactor = Math.min(Math.max((viewport.width / 20), 0.45), 1.05);

    return (
        <mesh scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <pointLight intensity={ 1 } />
            <Environment preset={ 'forest' } />
            <primitive object={ model.scene } position={ [ 0, isMobile ? -9.5 : -4.5, -0.8 ] } rotation={ [ 0, -0.8, -0.05 ] }/>
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