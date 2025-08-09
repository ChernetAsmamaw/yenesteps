import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const useIntersectionObserver = <T extends HTMLElement>(
  options = {}
): [React.RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<T>(null) as React.RefObject<T>;

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
const GreenGlobe = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = 500;
    const height = 500;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Load a continent mask (white continents, transparent oceans)
    const textureLoader = new THREE.TextureLoader();
    const continentsMask = textureLoader.load(
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/textures/earth/landmask.png"
    );

    // Globe base geometry
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);

    // Material for green base
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });

    // Material for white continents overlay
    const continentsMaterial = new THREE.MeshPhongMaterial({
      map: continentsMask,
      color: 0xffffff, // white
      transparent: true,
    });

    // Globe base mesh
    const globe = new THREE.Mesh(geometry, baseMaterial);
    scene.add(globe);

    // Continents mesh (slightly larger radius to avoid z-fighting)
    const continents = new THREE.Mesh(
      new THREE.SphereGeometry(1.201, 64, 64),
      continentsMaterial
    );
    scene.add(continents);

    // Wireframe overlay
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(wireframe);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const pointLight = new THREE.PointLight(0x10b981, 1, 100);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x34d399, 0.8, 100);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      globe.rotation.y += 0.003;
      wireframe.rotation.y += 0.003;
      continents.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center"
    />
  );
};

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex items-center pt-24 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-green-100 rounded-full blur-3xl animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-emerald-200 rounded-full blur-2xl animate-float opacity-30"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div
          className={`space-y-10 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 glass-green rounded-full border border-emerald-200">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-emerald-700 font-display font-semibold text-sm tracking-wide">
                AI-Powered Climate Action for Africa
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-hero font-display font-black text-dark leading-tight tracking-tight">
              Track your{" "}
              <span className="text-green-gradient relative">
                carbon footprint
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-gradient opacity-30 rounded-full"></div>
              </span>{" "}
              with AI
            </h1>

            {/* Subheading */}
            <p className="text-xl font-body text-gray-600 leading-relaxed max-w-lg">
              Snap a photo to get{" "}
              <span className="font-semibold text-emerald-600">
                instant impact analysis
              </span>{" "}
              and personalized climate tips designed for African youth.{" "}
              <span className="font-semibold text-emerald-600">
                Join thousands
              </span>{" "}
              making a difference.
            </p>
          </div>

          {/* Stats */}
          {/* <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-emerald-600">
                50K+
              </div>
              <div className="text-sm font-body text-gray-500">
                Active Users
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-emerald-600">
                54
              </div>
              <div className="text-sm font-body text-gray-500">Countries</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-emerald-600">
                4.8★
              </div>
              <div className="text-sm font-body text-gray-500">Rating</div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/coming-soon")}
              className="btn-green px-8 py-4 rounded-2xl text-lg font-display font-semibold shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm6.293-6.707a1 1 0 010-1.414l3-3a1 1 0 111.414 1.414L12.414 9H15a1 1 0 110 2h-2.586l1.293 1.293a1 1 0 11-1.414 1.414l-3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Download Free App</span>
            </button>

            <button className="btn-outline-green px-8 py-4 rounded-2xl text-lg font-display font-semibold flex items-center justify-center space-x-2 group">
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 0V9a2 2 0 012-2h2"
                />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex items-center space-x-6 pt-4">
            <div className="text-sm font-body text-gray-500">Trusted by:</div>
            <div className="flex items-center space-x-4 opacity-60">
              <div className="px-3 py-1 bg-emerald-50 rounded-lg">
                <span className="text-xs font-semibold text-emerald-700">
                  UNESCO
                </span>
              </div>
              <div className="px-3 py-1 bg-emerald-50 rounded-lg">
                <span className="text-xs font-semibold text-emerald-700">
                  UNEP
                </span>
              </div>
              <div className="px-3 py-1 bg-emerald-50 rounded-lg">
                <span className="text-xs font-semibold text-emerald-700">
                  AU
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {/* 3D Globe */}
        <div
          className={`flex justify-center lg:justify-end ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="w-96 h-96 animate-float">
              <GreenGlobe />
            </div>

            {/* Floating Elements around Globe */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-300 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-emerald-500 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
