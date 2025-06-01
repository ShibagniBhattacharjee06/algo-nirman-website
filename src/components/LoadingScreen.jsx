// src/components/LoadingScreen.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const LoadingScreen = ({ onLoaded }) => {
    const mountRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        let scene, camera, renderer, object;

        const initThree = () => {
            // Scene
            scene = new THREE.Scene();
            scene.background = null; // Transparent background

            // Camera
            camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            camera.position.z = 2; // Closer for a loading screen object

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            // Add a simple 3D object (e.g., a spinning box or your hackathon's stylized logo)
            const geometry = new THREE.BoxGeometry(1, 1, 1); // Simple box for now
            // Or if you have a simple shape you can represent: new THREE.IcosahedronGeometry(1)
            const material = new THREE.MeshPhongMaterial({
                color: 0xFF9933, // Your saffron accent color
                specular: 0x555555,
                shininess: 30,
                flatShading: true
            });
            object = new THREE.Mesh(geometry, material);
            scene.add(object);

            // Add Lights
            const ambientLight = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5).normalize();
            scene.add(directionalLight);

            // Animation Loop
            const animate = () => {
                animationRef.current = requestAnimationFrame(animate);
                if (object) {
                    object.rotation.x += 0.01;
                    object.rotation.y += 0.008;
                }
                renderer.render(scene, camera);
            };
            animate();

            // Handle window resize
            const handleResize = () => {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            // Simulate loading time (e.g., 3 seconds)
            const timer = setTimeout(() => {
                onLoaded(); // Call the prop function to hide the loading screen
            }, 3000); // Display loading screen for 3 seconds

            return () => {
                cancelAnimationFrame(animationRef.current);
                clearTimeout(timer);
                window.removeEventListener('resize', handleResize);
                if (currentMount && renderer.domElement) {
                    currentMount.removeChild(renderer.domElement);
                }
                renderer.dispose();
                geometry.dispose();
                material.dispose();
            };
        };

        initThree();
    }, [onLoaded]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-strategic-dark)', // Your dark background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000, // Very high z-index to be on top
            flexDirection: 'column',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-subheading)',
            fontSize: '1.2rem',
        }}>
            <div ref={mountRef} style={{ width: '200px', height: '200px', marginBottom: '20px' }}></div>
            <p>Loading Mission Brief...</p>
        </div>
    );
};

export default LoadingScreen;