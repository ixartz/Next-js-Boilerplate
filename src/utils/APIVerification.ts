// API Parameter Verification
// This file documents that our interface accepts all parameters as per the Promptchan API specification

export const API_PARAMETERS_VERIFICATION = {
  // Required Parameters
  prompt: {
    type: 'string',
    required: true,
    description: 'Text prompt for guiding the image generation',
    uiComponent: 'textarea',
    validation: 'required, max 500 chars',
  },

  // Optional Parameters with Defaults
  style: {
    type: 'string',
    required: false,
    default: 'Cinematic',
    enum: [
      'Cinematic',
      'Anime',
      'Hyperreal',
      'Hyperanime',
      'K-Pop',
      'Fur',
      'Furtoon',
      'Render XL+',
      'Illustration XL+',
      'Anime XL',
      'Anime XL+',
      'Hardcore XL',
      'Cinematic XL',
      'Photo XL+',
      'Hyperreal XL+',
      'Hyperreal XL+ v2',
      'Photo XL+ v2',
    ],
    uiComponent: 'select',
    description: 'Art style of the image',
  },

  poses: {
    type: 'string',
    required: false,
    default: 'Default',
    enum: ['Default', 'POV Missionary', 'POV Blowjob', 'POV Doggystyle'],
    uiComponent: 'select',
    description: 'Pose for the generated image, categorized by model type',
  },

  filter: {
    type: 'string',
    required: false,
    default: 'Default',
    enum: [
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
      'Artsy 2',
      'Cartoon',
      'Cartoon Vintage',
      'Painted',
      'Cartoon 2',
      'Cartoon 3',
      'Cartoon Minimalist',
      'Character Sheet',
      'Vintage Comic',
      'Pixel Art',
      'Anime Studio',
      'Polariod Picture',
      'Flash Photo',
      'Noir Movie',
      'Analog Photo',
      'Vintage Photo',
    ],
    uiComponent: 'select',
    description: 'Filter applied to the image',
  },

  emotion: {
    type: 'string',
    required: false,
    default: 'Default',
    enum: [
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
    ],
    uiComponent: 'select',
    description: 'Adjust for dynamic character expressions',
  },

  detail: {
    type: 'float',
    required: false,
    default: 0,
    range: [-2, 2],
    step: 0.1,
    uiComponent: 'slider',
    description: 'Detail level of the image stylization',
  },

  seed: {
    type: 'integer',
    required: false,
    default: -1,
    range: [-1, 999999999],
    uiComponent: 'number input',
    description: 'Seed for deterministic results. Use -1 for random',
  },

  quality: {
    type: 'string',
    required: false,
    default: 'Ultra',
    enum: ['Ultra', 'Extreme', 'Max'],
    uiComponent: 'select',
    description: 'Quality setting. Extreme costs +1 Gem, Max costs +2 Gems',
  },

  creativity: {
    type: 'integer',
    required: false,
    default: 50,
    enum: [30, 50, 70],
    uiComponent: 'slider',
    description: 'Creativity level of the generation',
  },

  image_size: {
    type: 'string',
    required: false,
    default: '512x512',
    enum: ['512x512', '512x768', '768x512'],
    uiComponent: 'select',
    description: 'Size of the generated image',
  },

  negative_prompt: {
    type: 'string',
    required: false,
    uiComponent: 'textarea',
    description: 'Text prompt specifying what to avoid in the generation',
  },

  restore_faces: {
    type: 'boolean',
    required: false,
    default: false,
    uiComponent: 'checkbox',
    description: 'Whether to apply face restoration. Costs 1 extra Gem',
  },

  age_slider: {
    type: 'integer',
    required: false,
    default: 21,
    range: [18, 50],
    uiComponent: 'slider',
    description: 'Slider to control the perceived age of the subject',
  },

  weight_slider: {
    type: 'float',
    required: false,
    default: 0,
    range: [-1, 1],
    step: 0.1,
    uiComponent: 'slider',
    description: 'Slider to control the body weight of the subject',
  },

  breast_slider: {
    type: 'float',
    required: false,
    default: 0,
    range: [-1, 1],
    step: 0.1,
    uiComponent: 'slider',
    description: 'Slider to adjust the size or prominence of the subject\'s breasts',
  },

  ass_slider: {
    type: 'float',
    required: false,
    default: 0,
    range: [-1, 1],
    step: 0.1,
    uiComponent: 'slider',
    description: 'Slider to adjust the size or prominence of the subject\'s ass',
  },
};

// Response Schema Verification
export const API_RESPONSE_VERIFICATION = {
  success: {
    image: {
      type: 'string',
      description: 'The generated base-64 encoded image',
    },
    gems: {
      type: 'integer',
      description: 'The remaining Gems count',
    },
  },
  error: {
    error: {
      type: 'string',
      description: 'Error message indicating the API key was invalid',
    },
  },
};

// Credit Cost Calculation
export const CREDIT_COST_CALCULATION = {
  baseCost: 1,
  qualityCosts: {
    Ultra: 0,
    Extreme: 1,
    Max: 2,
  },
  restoreFacesCost: 1,
  calculateTotal: (quality: string, restoreFaces: boolean) => {
    const base = 1;
    const qualityCost = CREDIT_COST_CALCULATION.qualityCosts[quality as keyof typeof CREDIT_COST_CALCULATION.qualityCosts] || 0;
    const faceCost = restoreFaces ? 1 : 0;
    return base + qualityCost + faceCost;
  },
};
