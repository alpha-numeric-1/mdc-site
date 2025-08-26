import { useGLTF } from "@react-three/drei";

export default function DeskModel() {
  const { scene } = useGLTF("/desk.glb");
  return <primitive object={scene} position={[0, -2.5, -2]} />;
}
