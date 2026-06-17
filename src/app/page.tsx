"use client";

import { useEffect } from "react";
import gsap from "gsap";

const aboutHighlights = [
  "Master's Degree in Biomedical Engineering",
  "Nursing Student",
  "Medical Device Connectivity (Stryker & QIAGEN)",
  "Machine Learning & Medical AI",
];

export default function Home() {
  useEffect(() => {
  gsap.from(".hero-title", {
    opacity: 0,
    y: -80,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: -40,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero-buttons", {
    opacity: 0,
    y: 40,
    duration: 1.5,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".fade-section", {
    opacity: 0,
    y: 48,
    duration: 1.2,
    delay: 0.8,
    stagger: 0.12,
    ease: "power3.out",
  });
}, []);
  return (
    
    <main className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-65 rotate-90 scale-70"
>
  <source src="/videos/324831.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/60" />

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
       <div className="absolute w-[500px] h-[500px] bg-violet-500/15 blur-3xl rounded-full top-[-100px] right-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-emerald-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-30">

        <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-cyan-400 mb-6">
          Neurotechnology • Artificial Intelligence
        </p>

        <h1 className="hero-title text-7xl md:text-8xl font-bold tracking-wide">
          NEUROAXIS AI
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Building futuristic machine learning systems, medical AI tools,
          predictive analytics and next-generation neurotech experiences.
        </p>

        <div className="hero-buttons mt-12 flex flex-wrap gap-4 justify-center">

          <a
  href="#projects"
  className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  View Projects
</a>

          <a
  href="#contact"
  className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white hover:text-black transition duration-300"
>
  Contact
</a>

        </div>
<section
  id="about"
  className="fade-section scroll-mt-32 mt-28 max-w-6xl mx-auto px-6 text-left"
>
  <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-emerald-500/20 p-6 backdrop-blur-sm sm:p-8">
      <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative flex aspect-[4/5] min-h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-black/35 p-8 sm:min-h-[360px]">
        <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-14 rounded-full border border-violet-300/20" />
        <div className="relative text-center">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.22)]">
            <span className="text-5xl font-bold text-cyan-200">AI</span>
          </div>
          <p className="uppercase tracking-[0.28em] text-xs text-cyan-200">
            Medical Intelligence
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Biomedical engineering, clinical education and machine learning
            connected for practical healthcare innovation.
          </p>
        </div>
      </div>
    </div>

    <div>
      <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-cyan-400 mb-6">
        About Me
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Bridging Healthcare and AI
      </h2>

      <div className="space-y-5 text-lg leading-relaxed text-gray-300">
        <p>
          I hold a Master&apos;s degree in Biomedical Engineering and I am
          currently pursuing a Bachelor&apos;s degree in Nursing. My
          interdisciplinary background combines engineering, medicine, and
          artificial intelligence to develop innovative healthcare solutions.
        </p>

        <p>
          I have professional experience working with Stryker and QIAGEN,
          specializing in medical device connectivity, software integration,
          and healthcare IT solutions.
        </p>

        <p>
          My current focus is Machine Learning, Computer Vision, and Medical
          AI. I develop AI applications for medical image analysis, diagnostic
          support, and intelligent healthcare systems.
        </p>

        <p>
          I am passionate about translating cutting-edge AI research into
          practical clinical solutions that improve patient outcomes and
          support healthcare professionals.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {aboutHighlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-gray-100 backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-cyan-300/30 hover:bg-cyan-300/10"
          >
            {highlight}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section
  id="projects"
  className="scroll-mt-32 mt-20 max-w-6xl mx-auto px-6"
>
  <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
    Featured Projects
  </h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* NOWY KAFELEK */}

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-10 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

    <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-purple-300 mb-4">
      MRI Segmentation
    </p>

    <h3 className="text-4xl font-bold mb-4">
      Brain Tumor Segmentation
    </h3>

    <p className="text-gray-200 text-lg leading-relaxed">
      U-Net deep learning model for brain tumor segmentation on MRI slices.
      Built with PyTorch and deployed with Gradio.
    </p>
    <a
  href="https://huggingface.co/spaces/barabarafigofago/brain-tumor-segmentation"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Open App
</a>


  </div>
  
{/* NOWY KAFELEK */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-10 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

  <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-cyan-300 mb-4">
    Alzheimer Detection
  </p>

  <h3 className="text-4xl font-bold mb-4">
    Brain MRI Alzheimer Detection
  </h3>

  <p className="text-gray-200 text-lg leading-relaxed">
    EfficientNet-B0 deep learning system for Alzheimer stage classification
    using brain MRI scans and PyTorch workflows.
  </p>
  <a
  href="https://huggingface.co/spaces/barabarafigofago/brain-mri-alzheimer-detection"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Open App
</a>

</div>
{/* NOWY KAFELEK */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-10 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

  <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-emerald-300 mb-4">
    MRI Segmentation
  </p>

  <h3 className="text-4xl font-bold mb-4">
    MS Lesion Segmentation
  </h3>

  <p className="text-gray-200 text-lg leading-relaxed">
    Deep learning segmentation system for multiple sclerosis lesion
    detection using MRI FLAIR imaging and U-Net architectures.
  </p>
  <a
  href="https://huggingface.co/spaces/barabarafigofago/SM_SEGMENTATION"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Open App
</a>

</div>
{/* NOWY KAFELEK */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 p-10 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

  <p className="hero-subtitle uppercase trackin-[0.3em] text-sm text-fuchsia-300 mb-4">
    Chest X-ray AI
  </p>

  <h3 className="text-4xl font-bold mb-4">
    Pneumonia Detection
  </h3>

  <p className="text-gray-200 text-lg leading-relaxed">
    Deep learning chest X-ray classification system for pneumonia detection
    using convolutional neural networks and medical imaging workflows.
  </p>
  <a
  href="https://huggingface.co/spaces/barabarafigofago/chest-xray-classifier"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Open App
</a>

</div>
{/* NOWY KAFELEK */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-10 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

  <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-orange-300 mb-4">
    Dermatology AI
  </p>

  <h3 className="text-4xl font-bold mb-4">
    ISIC Skin Lesion Classifier
  </h3>

  <p className="text-gray-200 text-lg leading-relaxed">
    EfficientNet-B3 deep learning model trained for multi-class skin lesion
    classification using dermatological imaging datasets.
  </p>
  <a
  href="https://huggingface.co/spaces/barabarafigofago/Skin-lesion-classifier"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Open App
</a>

</div>
</div>
</section>
<section
  id="contact"
  className="scroll-mt-32 mt-32 max-w-4xl mx-auto px-6 pb-32 text-center"
>
  <p className="hero-subtitle uppercase tracking-[0.3em] text-sm text-cyan-400 mb-6">
    Contact
  </p>

  <h2 className="text-5xl md:text-6xl font-bold mb-8">
    Let&apos;s Work Together
  </h2>

  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
    Interested in medical AI, neurotechnology, machine learning systems
    or futuristic digital health projects? Let&apos;s connect.
  </p>

  <div className="flex flex-wrap gap-4 justify-center">
    <a
  href="tel:+48796041297"
  className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white hover:text-black transition duration-300"
>
  Call Me
</a>

    <a
      href="mailto:julia.mus1611@gmail.com"
      className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white hover:text-black transition duration-300"
    >
      Email Me
    </a>

    <a
      href="https://huggingface.co/barabarafigofago"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white hover:text-black transition duration-300"
    >
      Hugging Face
    </a>
  </div>
</section>

      </div>
      
    </main>
  );
}
