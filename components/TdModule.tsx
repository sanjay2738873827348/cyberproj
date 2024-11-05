"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";


function TdModule() {
  const canvasRef = useRef(null);
  gsap.registerPlugin()

  useEffect(() => {

    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );3
    camera.position.set(0, 2, 10);
    camera.rotation.y = -Math.PI / 4;


    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    loader.load(
      '/assets/cyberpunk_city_-_1/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, -2, 0);
        model.scale.set(3,3,3);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
    var tl = gsap.timeline({
       repeat: 10000,
       yoyo: true,
    });
    tl.to(camera.position, {
        x: 5,
        z: 5,
        ease: "none",
        duration: 100, 
        scrollTrigger: {
          trigger: canvas,
          start: 'top top',
          end: '+=1500',
          scrub: true,
        },
      });

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default TdModule;
