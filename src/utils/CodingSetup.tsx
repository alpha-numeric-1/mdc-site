import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export default function CodingSetup() {
  const { scene } = useGLTF("/desk.glb") as { scene: Group };
  return <primitive object={scene} position={[0, -2.5, -2]} scale={0.5} />;
}
