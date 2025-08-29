import { useEffect, useRef } from 'react';

const SpaceParticles = () => {
  const particlesRef = useRef();

  useEffect(() => {
    // Load particles.js script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#ffffff", "#87ceeb", "#dda0dd", "#ffd700", "#ff69b4"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.08,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.2
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      }
    };
    
    if (!document.querySelector('script[src*="particles"]')) {
      document.head.appendChild(script);
    } else if (window.particlesJS) {
      script.onload();
    }

    return () => {
      // Cleanup particles if needed
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0033 25%, #000820 50%, #001122 75%, #000000 100%)'
      }}
    />
  );
};

export default SpaceParticles;