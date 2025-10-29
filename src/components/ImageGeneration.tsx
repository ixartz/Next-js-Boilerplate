'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ImageGenerationProps = {
  className?: string;
};

type CreditsData = {
  creditsBalance: number;
  totalEarned: number;
  totalSpent: number;
};

type GenerationResult = {
  success: boolean;
  imageUrl?: string;
  creditsUsed?: number;
  remainingCredits?: number;
  error?: string;
};

export default function ImageGeneration({ className = '' }: ImageGenerationProps) {
  const { user, isLoaded } = useUser();
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [style, setStyle] = useState('Cinematic');
  const [poses, setPoses] = useState('Default');
  const [filter, setFilter] = useState('Default');
  const [emotion, setEmotion] = useState('Default');
  const [quality, setQuality] = useState('Ultra');
  const [imageSize, setImageSize] = useState('512x512');
  const [restoreFaces, setRestoreFaces] = useState(false);
  const [creativity, setCreativity] = useState(50);
  const [detail, setDetail] = useState(0);
  const [seed, setSeed] = useState(-1);
  const [ageSlider, setAgeSlider] = useState(21);
  const [weightSlider, setWeightSlider] = useState(0);
  const [breastSlider, setBreastSlider] = useState(0);
  const [assSlider, setAssSlider] = useState(0);
  const [attributesEnabled, setAttributesEnabled] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [aiCharacter] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [credits, setCredits] = useState<CreditsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [creditsUsed, setCreditsUsed] = useState<number>(0);

  // Collapsible sections state
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    style: true,
    advanced: false,
    attributes: false,
    aiCharacter: false,
  });

  // Toggle section - ensure only one is open at a time
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => {
      // If clicking the same section, close it
      if (prev[section]) {
        return { ...prev, [section]: false };
      }
      // Otherwise, close all and open the clicked section
      return Object.keys(prev).reduce((acc, key) => {
        acc[key as keyof typeof prev] = key === section;
        return acc;
      }, {} as typeof prev);
    });
  };

  // Style modal state
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [styleSearchTerm, setStyleSearchTerm] = useState('');
  const [selectedStyleCategory, setSelectedStyleCategory] = useState('All Styles');
  const [selectedModelFamily, setSelectedModelFamily] = useState('All Models');

  const [showPoseModal, setShowPoseModal] = useState(false);
  const [poseSearchTerm, setPoseSearchTerm] = useState('');
  const [selectedPoseCategory, setSelectedPoseCategory] = useState('All Categories');

  const fetchCredits = async () => {
    try {
      const response = await fetch('/api/credits');
      if (response.ok) {
        const data = await response.json();
        setCredits(data);
      }
    } catch (error) {
      console.error('Error fetching credits:', error);
    }
  };

  // Fetch user credits on component mount
  useEffect(() => {
    if (isLoaded && user) {
      fetchCredits();
    }
  }, [isLoaded, user]);

  const calculateCreditsNeeded = () => {
    let creditsNeeded = 1;
    if (quality === 'Extreme') {
      creditsNeeded = 2;
    }
    if (quality === 'Max') {
      creditsNeeded = 3;
    }
    if (restoreFaces) {
      creditsNeeded += 1;
    }
    return creditsNeeded;
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    if (!credits || credits.creditsBalance < calculateCreditsNeeded()) {
      setError('Insufficient credits');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const requestBody: any = {
        prompt: prompt.trim(),
        style,
        quality,
        restore_faces: restoreFaces,
        creativity: Number(creativity),
        detail: Number(detail),
        image_size: imageSize,
        seed: Number(seed),
        negative_prompt: negativePrompt.trim() || undefined,
        age_slider: Number(ageSlider),
        weight_slider: Number(weightSlider),
        breast_slider: Number(breastSlider),
        ass_slider: Number(assSlider),
      };

      // Add poses if not default
      if (poses !== 'Default') {
        requestBody.poses = poses;
      }

      // Add filter if not default
      if (filter !== 'Default') {
        requestBody.filter = filter;
      }

      // Add emotion if not default
      if (emotion !== 'Default') {
        requestBody.emotion = emotion;
      }

      const response = await fetch('/api/generate/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result: GenerationResult = await response.json();

      if (result.success) {
        setGeneratedImage(result.imageUrl || null);
        setCreditsUsed(result.creditsUsed || 0);
        setCredits(prev => prev
          ? {
              ...prev,
              creditsBalance: result.remainingCredits || prev.creditsBalance,
              totalSpent: prev.totalSpent + (result.creditsUsed || 0),
            }
          : null);
      } else {
        setError(result.error || 'Failed to generate image');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Style data with images and categories
  const styleData = [
    {
      name: 'Cinematic',
      modelFamily: 'SD',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/real.webp',
      value: 'Cinematic',
    },
    {
      name: 'Anime',
      modelFamily: 'SD',
      styleCategory: 'Anime',
      imageUrl: 'https://promptchan.com/assets/models/anime.webp',
      value: 'Anime',
    },
    {
      name: 'Photo XL+',
      modelFamily: 'XL+',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/photoXL2.webp',
      value: 'Photo XL+',
    },
    {
      name: 'Hyperreal XL+',
      modelFamily: 'XL+',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/ponyxl2.webp',
      value: 'Hyperreal XL+',
    },
    {
      name: 'Illustration XL+',
      modelFamily: 'XL+',
      styleCategory: 'Artistic',
      imageUrl: 'https://promptchan.com/assets/models/illustrationXL.webp',
      value: 'Illustration XL+',
    },
    {
      name: 'Anime XL+',
      modelFamily: 'XL+',
      styleCategory: 'Anime',
      imageUrl: 'https://promptchan.com/assets/models/ponyanimexl.webp',
      value: 'Anime XL+',
    },
    {
      name: 'Cinematic HT',
      modelFamily: 'HT',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/cinematicflame.webp',
      value: 'Cinematic HT',
    },
    {
      name: 'Render XL+',
      modelFamily: 'XL+',
      styleCategory: 'Artistic',
      imageUrl: 'https://promptchan.com/assets/models/renderXL.webp',
      value: 'Render XL+',
    },
    {
      name: 'Cinematic XL',
      modelFamily: 'XL',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/cinematicXL.webp',
      value: 'Cinematic XL',
    },
    {
      name: 'Hardcore XL',
      modelFamily: 'XL',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/hardcoreXl.webp',
      value: 'Hardcore XL',
    },
    {
      name: 'Anime XL',
      modelFamily: 'XL',
      styleCategory: 'Legacy',
      imageUrl: 'https://promptchan.com/assets/models/animexl.webp',
      value: 'Anime XL',
    },
    {
      name: 'Art (Hyperreal)',
      modelFamily: 'SD',
      styleCategory: 'Artistic',
      imageUrl: 'https://promptchan.com/assets/models/hyperreal.webp',
      value: 'Hyperreal',
    },
    {
      name: 'Hyperanime',
      modelFamily: 'SD',
      styleCategory: 'Anime',
      imageUrl: 'https://promptchan.com/assets/models/hyperanime.webp',
      value: 'Hyperanime',
    },
    {
      name: 'Furtoon',
      modelFamily: 'SD',
      styleCategory: 'Artistic',
      imageUrl: 'https://promptchan.com/assets/models/furtoon.webp',
      value: 'Furtoon',
    },
    {
      name: 'Fur',
      modelFamily: 'SD',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/fur.webp',
      value: 'Fur',
    },
    {
      name: 'K-Pop',
      modelFamily: 'SD',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/kpop.webp',
      value: 'K-Pop',
    },
    {
      name: 'Hyperreal XL+ v2',
      modelFamily: 'XL+',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/ponyxl2.webp',
      value: 'Hyperreal XL+ v2',
    },
    {
      name: 'Photo XL+ v2',
      modelFamily: 'XL+',
      styleCategory: 'Photographic',
      imageUrl: 'https://promptchan.com/assets/models/photoXL2.webp',
      value: 'Photo XL+ v2',
    },
  ];

  // Get unique style categories and model families for filters
  const styleCategories = ['All Styles', ...new Set(styleData.map(style => style.styleCategory))];
  const modelFamilies = ['All Models', ...new Set(styleData.map(style => style.modelFamily))];

  // Pose data extracted from the HTML - comprehensive list
  const poseData = [
    {
      name: 'Default',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Default.webp',
      value: 'Default',
    },
    {
      name: 'After Sex',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/After Sex.webp',
      value: 'After Sex',
    },
    {
      name: 'After Sex Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/After Sex Gay.webp',
      value: 'After Sex Gay',
    },
    {
      name: 'After Sex Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/After Sex Lesbian.webp',
      value: 'After Sex Lesbian',
    },
    {
      name: 'Anime Boob Bounce',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Anime Boob Bounce.webp',
      value: 'Anime Boob Bounce',
    },
    {
      name: 'Ass On Glass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Ass On Glass.webp',
      value: 'Ass On Glass',
    },
    {
      name: 'Ass On Glass Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Ass On Glass Gay.webp',
      value: 'Ass On Glass Gay',
    },
    {
      name: 'BDSM Ballgag',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/BDSM Ballgag.webp',
      value: 'BDSM Ballgag',
    },
    {
      name: 'BDSM Ballgag Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/BDSM Ballgag Gay.webp',
      value: 'BDSM Ballgag Gay',
    },
    {
      name: 'BDSM Leash',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/BDSM Leash.webp',
      value: 'BDSM Leash',
    },
    {
      name: 'BDSM Leash Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/BDSM Leash Gay.webp',
      value: 'BDSM Leash Gay',
    },
    {
      name: 'BDSM Suspension',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/BDSM Suspension.webp',
      value: 'BDSM Suspension',
    },
    {
      name: 'BDSM Suspension Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/BDSM Suspension Gay.webp',
      value: 'BDSM Suspension Gay',
    },
    {
      name: 'BDSM Tape',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/BDSM Tape.webp',
      value: 'BDSM Tape',
    },
    {
      name: 'BDSM Tape Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/BDSM Tape Gay.webp',
      value: 'BDSM Tape Gay',
    },
    {
      name: 'BDSM Tied Up',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/BDSM Tied Up.webp',
      value: 'BDSM Tied Up',
    },
    {
      name: 'BDSM Tied Up Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/BDSM Tied Up Gay.webp',
      value: 'BDSM Tied Up Gay',
    },
    {
      name: 'Blowjob Under Desk',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Blowjob Under Desk.webp',
      value: 'Blowjob Under Desk',
    },
    {
      name: 'Blowjob Under Desk Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Blowjob Under Desk Gay.webp',
      value: 'Blowjob Under Desk Gay',
    },
    {
      name: 'Breast Squeeze',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Breast Squeeze.webp',
      value: 'Breast Squeeze',
    },
    {
      name: 'Breasts Pressed Against Glass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Breasts Pressed Against Glass.webp',
      value: 'Breasts Pressed Against Glass',
    },
    {
      name: 'Bubble Bath',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Bubble Bath.webp',
      value: 'Bubble Bath',
    },
    {
      name: 'Bubble Bath Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Bubble Bath Gay.webp',
      value: 'Bubble Bath Gay',
    },
    {
      name: 'Bukkake',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Bukkake.webp',
      value: 'Bukkake',
    },
    {
      name: 'Bukkake Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Bukkake Gay.webp',
      value: 'Bukkake Gay',
    },
    {
      name: 'ButtGrab Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/ButtGrab Lesbian.webp',
      value: 'ButtGrab Lesbian',
    },
    {
      name: 'ButtJob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/ButtJob.webp',
      value: 'ButtJob',
    },
    {
      name: 'ButtJob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/ButtJob Gay.webp',
      value: 'ButtJob Gay',
    },
    {
      name: 'Caught Naked Embarrassed',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Caught Naked Embarrassed.webp',
      value: 'Caught Naked Embarrassed',
    },
    {
      name: 'Caught Naked Embarrassed Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Caught Naked Embarrassed Gay.webp',
      value: 'Caught Naked Embarrassed Gay',
    },
    {
      name: 'Cum Bath',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cum Bath.webp',
      value: 'Cum Bath',
    },
    {
      name: 'Cum Bath Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Cum Bath Gay.webp',
      value: 'Cum Bath Gay',
    },
    {
      name: 'Cum in Mouth',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cum in Mouth.webp',
      value: 'Cum in Mouth',
    },
    {
      name: 'Cum in Mouth Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Cum in Mouth Gay.webp',
      value: 'Cum in Mouth Gay',
    },
    {
      name: 'Cum on Ass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cum on Ass.webp',
      value: 'Cum on Ass',
    },
    {
      name: 'Cum on Ass Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Cum on Ass Gay.webp',
      value: 'Cum on Ass Gay',
    },
    {
      name: 'Cumshot',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cumshot.webp',
      value: 'Cumshot',
    },
    {
      name: 'Cumshot Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Cumshot Gay.webp',
      value: 'Cumshot Gay',
    },
    {
      name: 'Cuddling',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cuddling.webp',
      value: 'Cuddling',
    },
    {
      name: 'Gay Cuddling',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Gay Cuddling.webp',
      value: 'Gay Cuddling',
    },
    {
      name: 'Lesbian Cuddling',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Lesbian Cuddling.webp',
      value: 'Lesbian Cuddling',
    },
    {
      name: 'Carrying Sex',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Carrying Sex.webp',
      value: 'Carrying Sex',
    },
    {
      name: 'Carrying Sex Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Carrying Sex Gay.webp',
      value: 'Carrying Sex Gay',
    },
    {
      name: 'Carrying Sex Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Carrying Sex Lesbian.webp',
      value: 'Carrying Sex Lesbian',
    },
    {
      name: 'Flashing Boobs',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Flashing Boobs.webp',
      value: 'Flashing Boobs',
    },
    {
      name: 'Flashing Boobs Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Flashing Boobs Gay.webp',
      value: 'Flashing Boobs Gay',
    },
    {
      name: 'Flashing In Public',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Flashing In Public.webp',
      value: 'Flashing In Public',
    },
    {
      name: 'Front View Cowgirl',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Front View Cowgirl.webp',
      value: 'Front View Cowgirl',
    },
    {
      name: 'Front View Cowgirl Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Front View Cowgirl Gay.webp',
      value: 'Front View Cowgirl Gay',
    },
    {
      name: 'Front View Cowgirl Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Front View Cowgirl Lesbian.webp',
      value: 'Front View Cowgirl Lesbian',
    },
    {
      name: 'Grab Ass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Grab Ass.webp',
      value: 'Grab Ass',
    },
    {
      name: 'Handjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Handjob.webp',
      value: 'Handjob',
    },
    {
      name: 'Handjob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Handjob Gay.webp',
      value: 'Handjob Gay',
    },
    {
      name: 'Imminent Sex',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Imminent Sex.webp',
      value: 'Imminent Sex',
    },
    {
      name: 'Imminent Sex Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Imminent Sex Gay.webp',
      value: 'Imminent Sex Gay',
    },
    {
      name: 'Jacko Pose',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Jacko Pose.webp',
      value: 'Jacko Pose',
    },
    {
      name: 'Jacko Pose Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Jacko Pose Gay.webp',
      value: 'Jacko Pose Gay',
    },
    {
      name: 'Just Before Sex',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Just Before Sex.webp',
      value: 'Just Before Sex',
    },
    {
      name: 'Just Before Sex Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Just Before Sex Gay.webp',
      value: 'Just Before Sex Gay',
    },
    {
      name: 'Mating Press',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Mating Press.webp',
      value: 'Mating Press',
    },
    {
      name: 'Mooning',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Mooning.webp',
      value: 'Mooning',
    },
    {
      name: 'Mooning Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Mooning Gay.webp',
      value: 'Mooning Gay',
    },
    {
      name: 'Multiple Mooning',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Multiple Mooning.webp',
      value: 'Multiple Mooning',
    },
    {
      name: 'Multiple Mooning Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Multiple Mooning Gay.webp',
      value: 'Multiple Mooning Gay',
    },
    {
      name: 'On/Off Clothing',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/On/Off Clothing.webp',
      value: 'On/Off Clothing',
    },
    {
      name: 'On Off',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/On Off.webp',
      value: 'On Off',
    },
    {
      name: 'Orgy',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Orgy.webp',
      value: 'Orgy',
    },
    {
      name: 'Orgy Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Orgy Gay.webp',
      value: 'Orgy Gay',
    },
    {
      name: 'Orgy Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Orgy Lesbian.webp',
      value: 'Orgy Lesbian',
    },
    {
      name: 'Penis',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Penis.webp',
      value: 'Penis',
    },
    {
      name: 'Piledrive',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Piledrive.webp',
      value: 'Piledrive',
    },
    {
      name: 'POV Anal',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Anal.webp',
      value: 'POV Anal',
    },
    {
      name: 'POV Anal Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Anal Gay.webp',
      value: 'POV Anal Gay',
    },
    {
      name: 'POV Blowjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Blowjob.webp',
      value: 'POV Blowjob',
    },
    {
      name: 'POV Blowjob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Blowjob Gay.webp',
      value: 'POV Blowjob Gay',
    },
    {
      name: 'POV Blowjob Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/POV Blowjob Lesbian.webp',
      value: 'POV Blowjob Lesbian',
    },
    {
      name: 'POV Breast Grab',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Breast Grab.webp',
      value: 'POV Breast Grab',
    },
    {
      name: 'POV Breast Grab Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/POV Breast Grab Lesbian.webp',
      value: 'POV Breast Grab Lesbian',
    },
    {
      name: 'POV Cowgirl',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Cowgirl.webp',
      value: 'POV Cowgirl',
    },
    {
      name: 'POV Deepthroat',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Deepthroat.webp',
      value: 'POV Deepthroat',
    },
    {
      name: 'POV Doggystyle',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Doggystyle.webp',
      value: 'POV Doggystyle',
    },
    {
      name: 'POV Doggystyle Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Doggystyle Gay.webp',
      value: 'POV Doggystyle Gay',
    },
    {
      name: 'POV Doggystyle Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/POV Doggystyle Lesbian.webp',
      value: 'POV Doggystyle Lesbian',
    },
    {
      name: 'POV Missionary',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Missionary.webp',
      value: 'POV Missionary',
    },
    {
      name: 'POV Missionary Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Missionary Gay.webp',
      value: 'POV Missionary Gay',
    },
    {
      name: 'POV Missionary Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/POV Missionary Lesbian.webp',
      value: 'POV Missionary Lesbian',
    },
    {
      name: 'POV Reverse Cowgirl',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Reverse Cowgirl.webp',
      value: 'POV Reverse Cowgirl',
    },
    {
      name: 'POV Spitroast',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Spitroast.webp',
      value: 'POV Spitroast',
    },
    {
      name: 'POV Strangling',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Strangling.webp',
      value: 'POV Strangling',
    },
    {
      name: 'POV Strangling Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Strangling Gay.webp',
      value: 'POV Strangling Gay',
    },
    {
      name: 'POV Threesome BlowJob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Threesome BlowJob.webp',
      value: 'POV Threesome BlowJob',
    },
    {
      name: 'POV Threesome BlowJob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/POV Threesome BlowJob Gay.webp',
      value: 'POV Threesome BlowJob Gay',
    },
    {
      name: 'POV Threesome Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/POV Threesome Lesbian.webp',
      value: 'POV Threesome Lesbian',
    },
    {
      name: 'Reverse Blowjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Reverse Blowjob.webp',
      value: 'Reverse Blowjob',
    },
    {
      name: 'Reverse Deepthroat',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Reverse Deepthroat.webp',
      value: 'Reverse Deepthroat',
    },
    {
      name: 'Side Blowjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Side Blowjob.webp',
      value: 'Side Blowjob',
    },
    {
      name: 'Side Blowjob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Side Blowjob Gay.webp',
      value: 'Side Blowjob Gay',
    },
    {
      name: 'Side Blowjob Real',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Side Blowjob Real.webp',
      value: 'Side Blowjob Real',
    },
    {
      name: 'Side View Blowjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Side View Blowjob.webp',
      value: 'Side View Blowjob',
    },
    {
      name: 'Sideway Ass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Sideway Ass.webp',
      value: 'Sideway Ass',
    },
    {
      name: 'Sideway Ass Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Sideway Ass Gay.webp',
      value: 'Sideway Ass Gay',
    },
    {
      name: 'Sitting',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Sitting.webp',
      value: 'Sitting',
    },
    {
      name: 'Solo Breast Grab',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Solo Breast Grab.webp',
      value: 'Solo Breast Grab',
    },
    {
      name: 'Spooning',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Spooning.webp',
      value: 'Spooning',
    },
    {
      name: 'Spooning Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Spooning Gay.webp',
      value: 'Spooning Gay',
    },
    {
      name: 'Spread Ass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Spread Ass.webp',
      value: 'Spread Ass',
    },
    {
      name: 'Surrounded by Penises',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Surrounded by Penises.webp',
      value: 'Surrounded by Penises',
    },
    {
      name: 'Surrounded by Penises Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Surrounded by Penises Gay.webp',
      value: 'Surrounded by Penises Gay',
    },
    {
      name: 'Thigh Sex',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Thigh Sex.webp',
      value: 'Thigh Sex',
    },
    {
      name: 'Titjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Titjob.webp',
      value: 'Titjob',
    },
    {
      name: 'Titjob Real',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Titjob Real.webp',
      value: 'Titjob Real',
    },
    {
      name: 'Titjob Anime',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Titjob Anime.webp',
      value: 'Titjob Anime',
    },
    {
      name: 'Undressing',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Undressing.webp',
      value: 'Undressing',
    },
    {
      name: 'Undressing Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Undressing Gay.webp',
      value: 'Undressing Gay',
    },
    {
      name: 'Vagina',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Vagina.webp',
      value: 'Vagina',
    },
    {
      name: 'Vagina Spread',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Vagina Spread.webp',
      value: 'Vagina Spread',
    },
    {
      name: 'Vagina Spread Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Vagina Spread Gay.webp',
      value: 'Vagina Spread Gay',
    },
    {
      name: 'Wet Tshirt',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Wet Tshirt.webp',
      value: 'Wet Tshirt',
    },
    {
      name: 'Wet Tshirt Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Wet Tshirt Gay.webp',
      value: 'Wet Tshirt Gay',
    },
    {
      name: 'Wind Lift',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Wind Lift.webp',
      value: 'Wind Lift',
    },
    {
      name: 'Wind Lift/ Nip Slip',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Wind Lift/ Nip Slip.webp',
      value: 'Wind Lift/ Nip Slip',
    },
    {
      name: 'Female Masturbation',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Female Masturbation.webp',
      value: 'Female Masturbation',
    },
    {
      name: 'Female Masturbation Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Female Masturbation Gay.webp',
      value: 'Female Masturbation Gay',
    },
    {
      name: 'From Below',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/From Below.webp',
      value: 'From Below',
    },
    {
      name: 'From Below Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/From Below Gay.webp',
      value: 'From Below Gay',
    },
    {
      name: 'Resting On Stomach',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Resting On Stomach.webp',
      value: 'Resting On Stomach',
    },
    {
      name: 'Resting On Stomach Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Resting On Stomach Gay.webp',
      value: 'Resting On Stomach Gay',
    },
    {
      name: 'Multiple Hands',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Multiple Hands.webp',
      value: 'Multiple Hands',
    },
    {
      name: 'Multiple Hands Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Multiple Hands Gay.webp',
      value: 'Multiple Hands Gay',
    },
    {
      name: 'Facesitting',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Facesitting.webp',
      value: 'Facesitting',
    },
    {
      name: 'Facesitting Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Facesitting Gay.webp',
      value: 'Facesitting Gay',
    },
    {
      name: 'Facesitting Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Facesitting Lesbian.webp',
      value: 'Facesitting Lesbian',
    },
    {
      name: 'Kneeling',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Kneeling.webp',
      value: 'Kneeling',
    },
    {
      name: 'Lesbian Oral',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Lesbian Oral.webp',
      value: 'Lesbian Oral',
    },
    {
      name: 'Lesbian Fingering',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Lesbian Fingering.webp',
      value: 'Lesbian Fingering',
    },
    {
      name: 'Lesbian Scissoring',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Lesbian Scissoring.webp',
      value: 'Lesbian Scissoring',
    },
    {
      name: 'Gay Cowboy Anime',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Gay Cowboy Anime.webp',
      value: 'Gay Cowboy Anime',
    },
    {
      name: 'Gay Cowboy Real',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Gay Cowboy Real.webp',
      value: 'Gay Cowboy Real',
    },
    {
      name: 'Gay Grabbing',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Gay Grabbing.webp',
      value: 'Gay Grabbing',
    },
    {
      name: 'Downblouse',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Downblouse.webp',
      value: 'Downblouse',
    },
    {
      name: 'Showering',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Showering.webp',
      value: 'Showering',
    },
    {
      name: 'Showering Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Showering Gay.webp',
      value: 'Showering Gay',
    },
    {
      name: 'Feet',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Feet.webp',
      value: 'Feet',
    },
    {
      name: 'Feet Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Feet Gay.webp',
      value: 'Feet Gay',
    },
    {
      name: 'Giant',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Giant.webp',
      value: 'Giant',
    },
    {
      name: 'Sucking Nipple',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Sucking Nipple.webp',
      value: 'Sucking Nipple',
    },
    {
      name: 'Finger Sucking',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Finger Sucking.webp',
      value: 'Finger Sucking',
    },
    {
      name: 'Finger Sucking Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Finger Sucking Gay.webp',
      value: 'Finger Sucking Gay',
    },
    {
      name: 'Showing off Ass',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Showing off Ass.webp',
      value: 'Showing off Ass',
    },
    {
      name: 'Showing off Ass Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Showing off Ass Gay.webp',
      value: 'Showing off Ass Gay',
    },
    {
      name: 'Lying Down Feet',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Lying Down Feet.webp',
      value: 'Lying Down Feet',
    },
    {
      name: 'Footjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Footjob.webp',
      value: 'Footjob',
    },
    {
      name: 'Footjob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Footjob Gay.webp',
      value: 'Footjob Gay',
    },
    {
      name: 'Dildo',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Dildo.webp',
      value: 'Dildo',
    },
    {
      name: 'Dildo Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Dildo Gay.webp',
      value: 'Dildo Gay',
    },
    {
      name: 'Handbra/Holding Boobs',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Handbra/Holding Boobs.webp',
      value: 'Handbra/Holding Boobs',
    },
    {
      name: 'Milking Machine',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Milking Machine.webp',
      value: 'Milking Machine',
    },
    {
      name: 'Panties Off',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Panties Off.webp',
      value: 'Panties Off',
    },
    {
      name: 'Double Handjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Double Handjob.webp',
      value: 'Double Handjob',
    },
    {
      name: 'Double Handjob Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Double Handjob Gay.webp',
      value: 'Double Handjob Gay',
    },
    {
      name: 'Gloryhole',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Gloryhole.webp',
      value: 'Gloryhole',
    },
    {
      name: 'Gloryhole Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Gloryhole Gay.webp',
      value: 'Gloryhole Gay',
    },
    {
      name: 'Xray Glasses',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Xray Glasses.webp',
      value: 'Xray Glasses',
    },
    {
      name: 'Man Grabbing Boobs',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Man Grabbing Boobs.webp',
      value: 'Man Grabbing Boobs',
    },
    {
      name: 'Glory Wall',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Glory Wall.webp',
      value: 'Glory Wall',
    },
    {
      name: 'Glory Wall Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Glory Wall Gay.webp',
      value: 'Glory Wall Gay',
    },
    {
      name: 'Licking Dick',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Licking Dick.webp',
      value: 'Licking Dick',
    },
    {
      name: 'Licking Dick Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Licking Dick Gay.webp',
      value: 'Licking Dick Gay',
    },
    {
      name: 'Reverse Sitting',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Reverse Sitting.webp',
      value: 'Reverse Sitting',
    },
    {
      name: 'Reverse Sitting Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Reverse Sitting Gay.webp',
      value: 'Reverse Sitting Gay',
    },
    {
      name: 'Girl Riding Guy',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Girl Riding Guy.webp',
      value: 'Girl Riding Guy',
    },
    {
      name: 'Girl Riding Guy Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Girl Riding Guy Gay.webp',
      value: 'Girl Riding Guy Gay',
    },
    {
      name: 'Selfie',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Selfie.webp',
      value: 'Selfie',
    },
    {
      name: 'Selfie Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Selfie Gay.webp',
      value: 'Selfie Gay',
    },
    {
      name: 'Creampie',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Creampie.webp',
      value: 'Creampie',
    },
    {
      name: 'Creampie Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Creampie Gay.webp',
      value: 'Creampie Gay',
    },
    {
      name: 'Food Tease',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Food Tease.webp',
      value: 'Food Tease',
    },
    {
      name: 'POV Man Masturbating',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/POV Man Masturbating.webp',
      value: 'POV Man Masturbating',
    },
    {
      name: 'Girl POV',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Girl POV.webp',
      value: 'Girl POV',
    },
    {
      name: 'See Through Clothing',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/See Through Clothing.webp',
      value: 'See Through Clothing',
    },
    {
      name: 'See Through Clothing Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/See Through Clothing Gay.webp',
      value: 'See Through Clothing Gay',
    },
    {
      name: 'Legs Behind Head',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Legs Behind Head.webp',
      value: 'Legs Behind Head',
    },
    {
      name: 'Doggystyle Front Angle',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Doggystyle Front Angle.webp',
      value: 'Doggystyle Front Angle',
    },
    {
      name: 'Doggystyle Front Angle Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Doggystyle Front Angle Gay.webp',
      value: 'Doggystyle Front Angle Gay',
    },
    {
      name: 'Showing Feet',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Showing Feet.webp',
      value: 'Showing Feet',
    },
    {
      name: 'Showing Feet Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Showing Feet Gay.webp',
      value: 'Showing Feet Gay',
    },
    {
      name: 'Peace Sign',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Peace Sign.webp',
      value: 'Peace Sign',
    },
    {
      name: 'Peace Sign Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Peace Sign Gay.webp',
      value: 'Peace Sign Gay',
    },
    {
      name: 'Tentacle',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Tentacle.webp',
      value: 'Tentacle',
    },
    {
      name: 'Tentacle Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Tentacle Gay.webp',
      value: 'Tentacle Gay',
    },
    {
      name: 'Full Nelson',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Full Nelson.webp',
      value: 'Full Nelson',
    },
    {
      name: 'Full Nelson Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Full Nelson Gay.webp',
      value: 'Full Nelson Gay',
    },
    {
      name: 'Prone Bone Lesbian',
      category: 'Lesbian',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeLesbian/Prone Bone Lesbian.webp',
      value: 'Prone Bone Lesbian',
    },
    {
      name: 'Prone Bone Gay',
      category: 'Gay',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnimeGay/Prone Bone Gay.webp',
      value: 'Prone Bone Gay',
    },
    {
      name: 'Prone Bone',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Prone Bone.webp',
      value: 'Prone Bone',
    },
    {
      name: 'Amazon Position',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Amazon Position.webp',
      value: 'Amazon Position',
    },
    {
      name: 'Shirt Pull',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Shirt Pull.webp',
      value: 'Shirt Pull',
    },
    {
      name: 'Cheek Bulge Blowjob',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Cheek Bulge Blowjob.webp',
      value: 'Cheek Bulge Blowjob',
    },
    {
      name: 'Angry',
      category: 'Straight',
      imageUrl: 'https://promptchan.com/assets/loras/ponyAnime/Angry.webp',
      value: 'Angry',
    },
  ];

  // Get unique pose categories for filters
  const poseCategories = ['All Categories', ...new Set(poseData.map(pose => pose.category))];

  // Filter styles based on search, style category, and model family
  const filteredStyles = styleData.filter((style) => {
    const matchesSearch = style.name.toLowerCase().includes(styleSearchTerm.toLowerCase())
      || style.styleCategory.toLowerCase().includes(styleSearchTerm.toLowerCase());
    const matchesStyleCategory = selectedStyleCategory === 'All Styles' || style.styleCategory === selectedStyleCategory;
    const matchesModelFamily = selectedModelFamily === 'All Models' || style.modelFamily === selectedModelFamily;
    return matchesSearch && matchesStyleCategory && matchesModelFamily;
  });

  // Filter poses based on search and category
  const filteredPoses = poseData.filter((pose) => {
    const matchesSearch = pose.name.toLowerCase().includes(poseSearchTerm.toLowerCase());
    const matchesCategory = selectedPoseCategory === 'All Categories' || pose.category === selectedPoseCategory;
    return matchesSearch && matchesCategory;
  });

  // Pose options removed - now using poseData with visual modal
  /*
  const poseOptions = [
    'Default',
    'POV Missionary',
    'POV Missionary Gay',
    'POV Missionary Lesbian',
    'POV Blowjob',
    'POV Blowjob Gay',
    'POV Blowjob Lesbian',
    'POV Doggystyle',
    'POV Doggystyle Gay',
    'POV Doggystyle Lesbian',
    'Cum in Mouth',
    'Cum in Mouth Gay',
    'After Sex',
    'After Sex Gay',
    'After Sex Lesbian',
    'Handjob',
    'Handjob Gay',
    'Carrying Sex',
    'Carrying Sex Gay',
    'Carrying Sex Lesbian',
    'Flashing Boobs',
    'Flashing Boobs Gay',
    'Breast Squeeze',
    'Front View Cowgirl',
    'Front View Cowgirl Gay',
    'Front View Cowgirl Lesbian',
    'ButtJob',
    'ButtJob Gay',
    'ButtGrab Lesbian',
    'Side View Blowjob',
    'POV Spitroast',
    'Just Before Sex',
    'Just Before Sex Gay',
    'POV Threesome BlowJob',
    'POV Threesome BlowJob Gay',
    'POV Threesome Lesbian',
    'Grab Ass',
    'Mating Press',
    'POV Reverse Cowgirl',
    'Thigh Sex',
    'POV Anal',
    'POV Anal Gay',
    'Piledrive',
    'Vagina Spread',
    'Vagina Spread Gay',
    'Imminent Sex',
    'Imminent Sex Gay',
    'Female Masturbation',
    'Female Masturbation Gay',
    'Jacko Pose',
    'Jacko Pose Gay',
    'Sideway Ass',
    'Sideway Ass Gay',
    'Titjob',
    'Titjob Real',
    'Titjob Anime',
    'Spread Ass',
    'Bukkake',
    'Bukkake Gay',
    'Spooning',
    'Spooning Gay',
    'Amazon Position',
    'On/Off Clothing',
    'Shirt Pull',
    'Cheek Bulge Blowjob',
    'Solo Breast Grab',
    'From Below',
    'From Below Gay',
    'Resting On Stomach',
    'Resting On Stomach Gay',
    'Blowjob Under Desk',
    'Blowjob Under Desk Gay',
    'Penis',
    'Breasts Pressed Against Glass',
    'Reverse Deepthroat',
    'Orgy',
    'Orgy Gay',
    'Orgy Lesbian',
    'Cum on Ass',
    'Cum on Ass Gay',
    'Cumshot',
    'Cumshot Gay',
    'Ass On Glass',
    'Ass On Glass Gay',
    'Multiple Hands',
    'Multiple Hands Gay',
    'Facesitting',
    'Facesitting Gay',
    'Facesitting Lesbian',
    'On Off',
    'Side Blowjob',
    'Side Blowjob Gay',
    'Kneeling',
    'POV Breast Grab',
    'POV Breast Grab Lesbian',
    'Surrounded by Penises',
    'Surrounded by Penises Gay',
    'Flashing In Public',
    'Mooning',
    'Mooning Gay',
    'Wet Tshirt',
    'Wet Tshirt Gay',
    'Lesbian Oral',
    'Lesbian Fingering',
    'Lesbian Scissoring',
    'Gay Cowboy Anime',
    'Gay Cowboy Real',
    'Gay Grabbing',
    'BDSM Suspension',
    'BDSM Suspension Gay',
    'BDSM Tied Up',
    'BDSM Tied Up Gay',
    'BDSM Tape',
    'BDSM Tape Gay',
    'BDSM Ballgag',
    'BDSM Ballgag Gay',
    'BDSM Leash',
    'BDSM Leash Gay',
    'Downblouse',
    'Sitting',
    'Vagina',
    'Showering',
    'Showering Gay',
    'Cum Bath',
    'Cum Bath Gay',
    'Cuddling',
    'Lesbian Cuddling',
    'Gay Cuddling',
    'POV Cowgirl',
    'Feet',
    'Feet Gay',
    'Multiple Mooning',
    'Multiple Mooning Gay',
    'Giant',
    'Side Blowjob Real',
    'Sucking Nipple',
    'Finger Sucking',
    'Finger Sucking Gay',
    'Showing off Ass',
    'Showing off Ass Gay',
    'Wind Lift/ Nip Slip',
    'Reverse Blowjob',
    'Lying Down Feet',
    'Footjob',
    'Footjob Gay',
    'Dildo',
    'Dildo Gay',
    'Handbra/Holding Boobs',
    'Milking Machine',
    'Panties Off',
    'Double Handjob',
    'Double Handjob Gay',
    'Undressing',
    'Undressing Gay',
    'Bubble Bath',
    'Bubble Bath Gay',
    'Caught Naked Embarrassed',
    'Caught Naked Embarrassed Gay',
    'Gloryhole',
    'Gloryhole Gay',
    'Xray Glasses',
    'Man Grabbing Boobs',
    'Glory Wall',
    'Glory Wall Gay',
    'Wind Lift',
    'POV Deepthroat',
    'POV Strangling',
    'POV Strangling Gay',
    'Licking Dick',
    'Licking Dick Gay',
    'Tentacle',
    'Tentacle Gay',
    'Reverse Sitting',
    'Reverse Sitting Gay',
    'Girl Riding Guy',
    'Girl Riding Guy Gay',
    'Selfie',
    'Selfie Gay',
    'Creampie',
    'Creampie Gay',
    'Food Tease',
    'POV Man Masturbating',
    'Girl POV',
    'See Through Clothing',
    'See Through Clothing Gay',
    'Legs Behind Head',
    'Doggystyle Front Angle',
    'Doggystyle Front Angle Gay',
    'Showing Feet',
    'Showing Feet Gay',
    'Peace Sign',
    'Peace Sign Gay',
    'Full Nelson',
    'Full Nelson Gay',
    'Prone Bone Lesbian',
    'Prone Bone Gay',
    'Prone Bone'
  ];
  */

  // Filter options
  const filterOptions = [
    'Default',
    'Cinematic',
    'Studio',
    'Flash',
    'Analog',
    'Professional',
    'Polaroid',
    'Vintage',
    'Manga',
    'Cyberpunk',
    'VHS',
    'Pixel XL',
    'Comic XL',
    'Retro Porn XL',
    'Fire Style XL',
    'Hyper',
    '3D',
    'Sketch',
    'Watercolor',
    'Lineart',
    'Moody',
    'Oil Painting',
    'Rainbow',
    'Artsy',
    'Cartoon',
    'Painted',
    'Character Sheet',
    'Vintage Comic',
    'Pixel Art',
    'Anime Studio',
    'Flash Photo',
    'Noir Movie',
    'Analog Photo',
    'Vintage Photo',
  ];

  // Emotion options
  const emotionOptions = [
    'Default',
    'Upset',
    'Disgusted',
    'Scared',
    'Winking',
    'Angry',
    'Smiling',
    'Laughing',
    'Ouch',
    'Shocked',
    'Orgasm Face',
    'Stick out Tongue',
  ];

  const qualities = [
    { value: 'Ultra', label: 'Ultra (1 credit)' },
    { value: 'Extreme', label: 'Extreme (2 credits)' },
    { value: 'Max', label: 'Max (3 credits)' },
  ];

  const imageSizes = [
    { value: '512x512', label: 'Square (512x512)' },
    { value: '512x768', label: 'Portrait (512x768)' },
    { value: '768x512', label: 'Landscape (768x512)' },
  ];

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <p className="text-gray-600">Please sign in to generate images.</p>
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-7xl p-6 ${className}`} style={{ backgroundColor: '#ffffff' }}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Sidebar - Controls */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Credits Display */}
            {credits && (
              <div className="rounded-md p-3" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e5e7eb' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium" style={{ color: '#6b7280' }}>Credits</p>
                    <p className="text-xl font-semibold" style={{ color: '#2563eb' }}>{credits.creditsBalance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium" style={{ color: '#6b7280' }}>Spent</p>
                    <p className="text-sm font-medium" style={{ color: '#111827' }}>{credits.totalSpent}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Basic Settings Section */}
            <div className="space-y-6">
              {/* Prompt */}
              <div>
                <label htmlFor="prompt" className="mb-1 block text-xs font-medium text-gray-700">
                  Prompt *
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder="Enter your prompt"
                  className="w-full rounded-md px-3 py-2 text-sm transition-all"
                  style={{
                    border: '1px solid #d1d5db',
                    backgroundColor: '#ffffff',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  rows={2}
                  maxLength={500}
                />
                <p className="text-xs text-gray-500">
                  {prompt.length}
                  /500
                </p>
              </div>

              {/* Negative Prompt */}
              <div>
                <label htmlFor="negativePrompt" className="mb-1 block text-xs font-medium text-gray-700">
                  Negative Prompt
                </label>
                <textarea
                  id="negativePrompt"
                  value={negativePrompt}
                  onChange={e => setNegativePrompt(e.target.value)}
                  placeholder="What to avoid"
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  rows={1}
                />
              </div>

              {/* Quality & Size Row */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="quality" className="mb-1 block text-xs font-medium text-gray-700">
                    Quality
                  </label>
                  <select
                    id="quality"
                    value={quality}
                    onChange={e => setQuality(e.target.value)}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  >
                    {qualities.map(qualityOption => (
                      <option key={qualityOption.value} value={qualityOption.value}>
                        {qualityOption.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="imageSize" className="mb-1 block text-xs font-medium text-gray-700">
                    Size
                  </label>
                  <select
                    id="imageSize"
                    value={imageSize}
                    onChange={e => setImageSize(e.target.value)}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  >
                    {imageSizes.map(sizeOption => (
                      <option key={sizeOption.value} value={sizeOption.value}>
                        {sizeOption.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    checked={restoreFaces}
                    onChange={e => setRestoreFaces(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-1 text-gray-700">Restore Faces</span>
                </label>
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={e => setIsPublic(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-1 text-gray-700">Public</span>
                </label>
              </div>
            </div>
          </div>

          {/* Style Settings Section */}
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => toggleSection('style')}
              className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <span>Style & Effects</span>
              <span className={`inline-block transition-transform duration-200 ${expandedSections.style ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {expandedSections.style && (
              <div className="space-y-2 pl-2">
                {/* Style & Emotion Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="style-button" className="mb-1 block text-xs font-medium text-gray-700">
                      Style
                    </label>
                    <button
                      id="style-button"
                      type="button"
                      onClick={() => setShowStyleModal(true)}
                      className="w-full rounded border border-gray-300 px-2 py-1 text-left text-sm hover:bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                      {style}
                    </button>
                  </div>
                  <div>
                    <label htmlFor="emotion" className="mb-1 block text-xs font-medium text-gray-700">
                      Emotion
                    </label>
                    <select
                      id="emotion"
                      value={emotion}
                      onChange={e => setEmotion(e.target.value)}
                      className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                      {emotionOptions.map(emotionOption => (
                        <option key={emotionOption} value={emotionOption}>
                          {emotionOption}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Pose & Filter Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="poses" className="mb-1 block text-xs font-medium text-gray-700">
                      Pose
                    </label>
                    <button
                      id="poses"
                      type="button"
                      onClick={() => setShowPoseModal(true)}
                      className="w-full rounded border border-gray-300 px-2 py-1 text-left text-sm hover:bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                      {poses}
                    </button>
                  </div>
                  <div>
                    <label htmlFor="filter" className="mb-1 block text-xs font-medium text-gray-700">
                      Filter
                    </label>
                    <select
                      id="filter"
                      value={filter}
                      onChange={e => setFilter(e.target.value)}
                      className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                      {filterOptions.map(filterOption => (
                        <option key={filterOption} value={filterOption}>
                          {filterOption}
                        </option>
                      ))}
                    </select>
                    {filter.includes('XL') && !style.includes('XL') && (
                      <p className="mt-1 text-xs text-yellow-600">Use XL Style for XL Filter</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Advanced Settings Section */}
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => toggleSection('advanced')}
              className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <span>Advanced</span>
              <span className={`inline-block transition-transform duration-200 ${expandedSections.advanced ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {expandedSections.advanced && (
              <div className="space-y-2 pl-2">
                {/* Creativity & Detail Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="creativity" className="mb-1 block text-xs font-medium text-gray-700">
                      Creativity:
                      {' '}
                      {creativity}
                    </label>
                    <input
                      id="creativity"
                      type="range"
                      min="30"
                      max="70"
                      step="10"
                      value={creativity}
                      onChange={e => setCreativity(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="detail" className="mb-1 block text-xs font-medium text-gray-700">
                      Detail:
                      {' '}
                      {detail}
                    </label>
                    <input
                      id="detail"
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={detail}
                      onChange={e => setDetail(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Seed Input */}
                <div>
                  <label htmlFor="seed" className="mb-1 block text-xs font-medium text-gray-700">
                    Seed
                  </label>
                  <div className="flex items-center space-x-1">
                    <input
                      id="seed"
                      type="number"
                      min="-1"
                      max="999999999"
                      value={seed}
                      onChange={e => setSeed(Number(e.target.value))}
                      className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setSeed(-1)}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 hover:bg-gray-200"
                    >
                      Random
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* AI Character Section */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => toggleSection('aiCharacter')}
              className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <span>AI Character</span>
              <span className={`inline-block transition-transform duration-200 ${expandedSections.aiCharacter ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {expandedSections.aiCharacter && (
              <div className="pl-2">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
                    {aiCharacter
                      ? (
                          <Image src={aiCharacter} alt="AI Character" className="h-full w-full rounded object-cover" width={32} height={32} />
                        )
                      : (
                          <span className="text-xs text-gray-400">👤</span>
                        )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">Select from Profile or Explore</p>
                    <div className="mt-1 flex space-x-1">
                      <button type="button" className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700 hover:bg-blue-200">
                        Explore
                      </button>
                      <button type="button" className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700 hover:bg-blue-200">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Attributes Section */}
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => toggleSection('attributes')}
              className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <span>Attributes</span>
              <span className={`inline-block transition-transform duration-200 ${expandedSections.attributes ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {expandedSections.attributes && (
              <div className="space-y-2 pl-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Enable Attributes</span>
                  <label className="flex items-center">
                    <span className="sr-only">Enable Attributes</span>
                    <input
                      type="checkbox"
                      checked={attributesEnabled}
                      onChange={e => setAttributesEnabled(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </label>
                </div>

                {attributesEnabled && (
                  <div className="space-y-2">
                    <div>
                      <label htmlFor="ageSlider" className="mb-1 block text-xs font-medium text-gray-700">
                        Age:
                        {' '}
                        {ageSlider}
                      </label>
                      <input
                        id="ageSlider"
                        type="range"
                        min="18"
                        max="50"
                        value={ageSlider}
                        onChange={e => setAgeSlider(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <label htmlFor="weightSlider" className="mb-1 block text-xs font-medium text-gray-700">
                          Weight:
                          {' '}
                          {weightSlider === 0 ? '0' : weightSlider > 0 ? `+${weightSlider}` : weightSlider}
                        </label>
                        <input
                          id="weightSlider"
                          type="range"
                          min="-1"
                          max="1"
                          step="0.1"
                          value={weightSlider}
                          onChange={e => setWeightSlider(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="breastSlider" className="mb-1 block text-xs font-medium text-gray-700">
                          Breast:
                          {' '}
                          {breastSlider === 0 ? '0' : breastSlider > 0 ? `+${breastSlider}` : breastSlider}
                        </label>
                        <input
                          id="breastSlider"
                          type="range"
                          min="-1"
                          max="1"
                          step="0.1"
                          value={breastSlider}
                          onChange={e => setBreastSlider(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="assSlider" className="mb-1 block text-xs font-medium text-gray-700">
                          Ass:
                          {' '}
                          {assSlider === 0 ? '0' : assSlider > 0 ? `+${assSlider}` : assSlider}
                        </label>
                        <input
                          id="assSlider"
                          type="range"
                          min="-1"
                          max="1"
                          step="0.1"
                          value={assSlider}
                          onChange={e => setAssSlider(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cost & Generate */}
          <div className="space-y-3 border-t pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">
                Cost:
                {' '}
                <span className="font-semibold">
                  {calculateCreditsNeeded()}
                  {' '}
                  credit
                  {calculateCreditsNeeded() > 1 ? 's' : ''}
                </span>
              </span>
              <div className="flex items-center">
                <span className="mr-1 text-gray-600">Public</span>
                <div className={`h-2 w-2 rounded-full ${isPublic ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim() || (credits ? credits.creditsBalance < calculateCreditsNeeded() : true)}
              className="w-full rounded-md px-4 py-2.5 text-sm font-medium transition-all hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
              }}
            >
              {isGenerating
                ? (
                    <div className="flex items-center justify-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                      Generating...
                    </div>
                  )
                : (
                    'Create Image'
                  )}
            </button>

            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 p-2">
                <p className="text-xs text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Image Display */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border-2 p-6" style={{ borderColor: '#e5e7eb' }}>
            {generatedImage
              ? (
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Generated Image
                        {' '}
                        {creditsUsed > 0 && `(${creditsUsed} credit${creditsUsed > 1 ? 's' : ''} used)`}
                      </h3>
                      <button
                        type="button"
                        onClick={handleDownload}
                        className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                      >
                        Download
                      </button>
                    </div>
                    <div className="relative">
                      <Image
                        src={generatedImage}
                        alt="Generated content"
                        className="h-auto w-full rounded-lg shadow-md"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                )
              : (
                  <div className="flex h-96 flex-col items-center justify-center text-center">
                    <div className="mb-4 text-6xl text-gray-300">🖼️</div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-600">
                      Enter a prompt and your desired settings to Create an AI image.
                    </h3>
                    <p className="text-gray-500">
                      Configure your settings on the left and click "Create" to generate your image.
                    </p>
                  </div>
                )}
          </div>
        </div>
      </div>

      {/* Style Selection Modal */}
      {showStyleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(12px)' }}>
          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold text-gray-900">Select Style</h2>
              <button
                type="button"
                onClick={() => setShowStyleModal(false)}
                className="text-xl text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Search and Filter */}
            <div className="border-b bg-gray-50 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Search styles..."
                  value={styleSearchTerm}
                  onChange={e => setStyleSearchTerm(e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <select
                  value={selectedStyleCategory}
                  onChange={e => setSelectedStyleCategory(e.target.value)}
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {styleCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedModelFamily}
                  onChange={e => setSelectedModelFamily(e.target.value)}
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {modelFamilies.map(model => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Style Grid */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {filteredStyles.map(styleOption => (
                  <div
                    key={styleOption.value}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setStyle(styleOption.value);
                      setShowStyleModal(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setStyle(styleOption.value);
                        setShowStyleModal(false);
                      }
                    }}
                    className={`cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                      style === styleOption.value
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={styleOption.imageUrl}
                        alt={styleOption.name}
                        className="h-full w-full rounded-t-lg object-cover"
                        width={200}
                        height={267}
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02NCA0MEM3Mi44MzY2IDQwIDgwIDQ3LjE2MzQgODAgNTZWNzJDODAgODAuODM2NiA3Mi44MzY2IDg4IDY0IDg4QzU1LjE2MzQgODggNDggODAuODM2NiA0OCA3MlY1NkM0OCA0Ny4xNjM0IDU1LjE2MzQgNDAgNjQgNDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik02NCA1MkM2Ny4zMTM3IDUyIDcwIDU0LjY4NjMgNzAgNThDNzAgNjEuMzEzNyA2Ny4zMTM3IDY0IDY0IDY0QzYwLjY4NjMgNjQgNTggNjEuMzEzNyA1OCA1OEM1OCA1NC42ODYzIDYwLjY4NjMgNTIgNjQgNTJaIiBmaWxsPSIjNjM3Njg4Ii8+Cjwvc3ZnPgo=';
                        }}
                      />
                      <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {styleOption.modelFamily}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="mb-1 text-sm font-medium text-gray-900">
                        {styleOption.name}
                      </h3>
                      <p className="line-clamp-2 text-xs text-gray-500">
                        {styleOption.styleCategory}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStyles.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                  No styles found matching your search criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pose Selection Modal */}
      {showPoseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(12px)' }}>
          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold text-gray-900">Select Pose</h2>
              <button
                type="button"
                onClick={() => setShowPoseModal(false)}
                className="text-2xl text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Search and Filter */}
            <div className="border-b bg-gray-50 p-4">
              <div className="mb-4 flex gap-4">
                <input
                  type="text"
                  placeholder="Search poses..."
                  value={poseSearchTerm}
                  onChange={e => setPoseSearchTerm(e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <select
                  value={selectedPoseCategory}
                  onChange={e => setSelectedPoseCategory(e.target.value)}
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {poseCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pose Grid */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {filteredPoses.map(poseOption => (
                  <div
                    key={poseOption.value}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setPoses(poseOption.value);
                      setShowPoseModal(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPoses(poseOption.value);
                        setShowPoseModal(false);
                      }
                    }}
                    className={`cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                      poses === poseOption.value
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={poseOption.imageUrl}
                        alt={poseOption.name}
                        className="h-full w-full rounded-t-lg object-cover"
                        width={200}
                        height={267}
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02NCA0MEM3Mi44MzY2IDQwIDgwIDQ3LjE2MzQgODAgNTZWNzJDODAgODAuODM2NiA3Mi44MzY2IDg4IDY0IDg4QzU1LjE2MzQgODggNDggODAuODM2NiA0OCA3MlY1NkM0OCA0Ny4xNjM0IDU1LjE2MzQgNDAgNjQgNDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik02NCA1MkM2Ny4zMTM3IDUyIDcwIDU0LjY4NjMgNzAgNThDNzAgNjEuMzEzNyA2Ny4zMTM3IDY0IDY0IDY0QzYwLjY4NjMgNjQgNTggNjEuMzEzNyA1OCA1OEM1OCA1NC42ODYzIDYwLjY4NjMgNTIgNjQgNTJaIiBmaWxsPSIjNjM3Njg4Ii8+Cjwvc3ZnPgo=';
                        }}
                      />
                      <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {poseOption.category}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="mb-1 text-sm font-medium text-gray-900">
                        {poseOption.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPoses.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                  No poses found matching your search criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
