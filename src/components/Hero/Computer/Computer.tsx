import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

const Computer = () => {

    const model = useGLTF('./models/desktop_pc/scene.gltf');

    return (
        <Canvas frameloop={ 'demand' } shadows camera={ { position: [ 30, 10, 5 ], fov: 25 } } gl={ { preserveDrawingBuffer: true } }>
            <Suspense fallback={ undefined }>
                <OrbitControls enableZoom={ false } maxPolarAngle={ Math.PI / 2 } minPolarAngle={ Math.PI / 2 } />
                <mesh>
                    <pointLight intensity={ 1 } />
                    <Environment preset='forest' />
                    <primitive scale={1} object={ model.scene } position={ [ 0, -4.5, -1 ] } rotation={ [ 0, -0.8, -0.05 ] }/>
                </mesh>
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default Computer;