import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas as FiberCanvas } from '@react-three/fiber';

interface Properties {
    icon: string
}

const Ball = ( { icon }: Properties ) => {

    const [ decal ] = useTexture([ `/icons/technology/${ icon }.png` ]);

    return (
        <Float speed={ 3 } rotationIntensity={ 1.5 } floatIntensity={ 3 }>
            <ambientLight intensity={ .25 } />
            <directionalLight position={ [ 0, 0, 0.2 ] } />
            <mesh castShadow receiveShadow scale={ 2.75 }>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={'#804dee'} />
                <Decal rotation={ [ 2 * Math.PI, 0, 6.25 ] } position={ [ 0, 0, 1 ] } map={ decal } />
            </mesh>
        </Float>
    );
}

const Canvas = ( { icon }: Properties ) => {

    return (
        <FiberCanvas frameloop={ 'always' } gl={ { preserveDrawingBuffer: true } }>
            <OrbitControls enableZoom={ false } enablePan={false}/>
            <Ball icon={ icon } />
            <Preload all />
        </FiberCanvas>
    );
}

export default Canvas;