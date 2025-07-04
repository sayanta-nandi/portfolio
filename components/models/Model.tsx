import { useGLTF } from "@react-three/drei";

export function Model() {
  const { nodes, materials } = useGLTF("models/chibi_astronaut.glb");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.921, 0, 0]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_7.geometry}
              material={materials["Cloth.001"]}
              //@ts-ignore
              skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_8.geometry}
              material={materials["Cloth.002"]}
              //@ts-ignore
              skeleton={nodes.Object_8.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_9.geometry}
              material={materials.Hand}
              //@ts-ignore
              skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_10.geometry}
              material={materials.Metal}
              //@ts-ignore
              skeleton={nodes.Object_10.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_11.geometry}
              material={materials.Head}
              //@ts-ignore
              skeleton={nodes.Object_11.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_12.geometry}
              material={materials["Backpack.001"]}
              //@ts-ignore
              skeleton={nodes.Object_12.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_13.geometry}
              material={materials["Backpack.002"]}
              //@ts-ignore
              skeleton={nodes.Object_13.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_14.geometry}
              material={materials.IDK2}
              //@ts-ignore
              skeleton={nodes.Object_14.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_15.geometry}
              material={materials.Light}
              //@ts-ignore
              skeleton={nodes.Object_15.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_16.geometry}
              material={materials.Outline}
              //@ts-ignore
              skeleton={nodes.Object_16.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_18.geometry}
              material={materials.Head}
              //@ts-ignore
              skeleton={nodes.Object_18.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_19.geometry}
              material={materials.material}
              //@ts-ignore
              skeleton={nodes.Object_19.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_20.geometry}
              material={materials.Class}
              //@ts-ignore
              skeleton={nodes.Object_20.skeleton}
            />
            <skinnedMesh
              //@ts-ignore
              geometry={nodes.Object_21.geometry}
              material={materials.Outline}
              //@ts-ignore
              skeleton={nodes.Object_21.skeleton}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Object_51.geometry}
            material={materials.Planet}
            position={[-2.726, 0.124, 0.003]}
            rotation={[2.652, 1.506, -2.954]}
            scale={0.686}
          />
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Object_53.geometry}
            material={materials.Planet_Ring}
            position={[-2.726, 0.137, -0.001]}
            rotation={[1.948, 1.528, -2.288]}
            scale={[0.981, 0.3, 0.981]}
          />
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Object_55.geometry}
            material={materials.Planet_Ring}
            position={[-2.726, 0.137, -0.001]}
            rotation={[2.484, 1.498, -2.782]}
            scale={[1.409, 0.3, 1.409]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/chibi_astronaut.glb");
