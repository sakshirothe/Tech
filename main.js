<!-- GSAP and ScrollTrigger CDN -->
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
<script>
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1. Slide in the navbar from the top on page load
  gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // 2. Make the CTA button pulse continuously
  gsap.to(".cta-btn", {
    scale: 1.08,
    repeat: -1,
    yoyo: true,
    duration: 0.9,
    ease: "power1.inOut"
  });

  // 3. Fade in hero title, subtitle, and button one after another on scroll
  gsap.set([".title", ".subtitle", ".cta-btn"], { opacity: 0, y: 40 });
  gsap.to(".title", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out"
  });
  gsap.to(".subtitle", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top 75%",
    },
    opacity: 1,
    y: 0,
    duration: 0.9,
    delay: 0.3,
    ease: "power2.out"
  });
  gsap.to(".cta-btn", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top 70%",
    },
    opacity: 1,
    y: 0,
    duration: 0.9,
    delay: 0.6,
    ease: "power2.out"
  });

  // 4. Animate Squid Game/Stranger Things SVG/icon to float/rotate
  gsap.to(".themed-icon", {
    y: 20,
    rotation: 8,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"
  });
</script>
