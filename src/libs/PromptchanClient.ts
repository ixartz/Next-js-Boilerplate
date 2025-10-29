import { Env } from './Env';

// Types for Promptchan API
export type ImageGenerationParams = {
  style?: string;
  poses?: string;
  filter?: string;
  emotion?: string;
  detail?: number;
  prompt: string;
  seed?: number;
  quality?: 'Ultra' | 'Extreme' | 'Max';
  creativity?: number;
  image_size?: '512x512' | '512x768' | '768x512';
  negative_prompt?: string;
  restore_faces?: boolean;
  age_slider?: number;
  weight_slider?: number;
  breast_slider?: number;
  ass_slider?: number;
};

export type VideoGenerationParams = {
  age_slider?: number;
  audioEnabled?: boolean;
  prompt: string;
  video_quality?: 'Standard' | 'High' | 'Max';
  aspect?: 'Portrait' | 'Wide';
  seed?: number;
};

export type ChatParams = {
  message: string;
  characterData?: {
    name?: string;
    personality?: string;
    scenario?: string;
    sexuality?: string;
    openness?: number;
    emotions?: number;
    age?: number;
    gender?: string;
  };
  chatHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  isRoleplay?: boolean;
  redo?: boolean;
  userName?: string;
};

export type ImageGenerationResponse = {
  image: string; // base64 encoded image
  gems: number; // remaining gems
};

export type VideoGenerationResponse = {
  request_id: string;
};

export type VideoStatusResponse = {
  status: string;
  details?: string;
};

export type VideoProgressResponse = {
  progress: number;
};

export type VideoResultResponse = {
  status: string;
  message: string;
  video: string[];
  gems: number;
};

export type ChatResponse = {
  audio?: string;
  chatHistory: Array<{
    role: string;
    content: string;
    send_date?: string;
  }>;
  message: string;
  selfie?: string;
};

export class PromptchanClient {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = Env.PROMPTCHAN_API_KEY;
    this.baseURL = Env.PROMPTCHAN_API_BASE_URL;
  }

  private async makeRequest<T>(
    endpoint: string,
    method: 'GET' | 'POST' = 'POST',
    body?: any,
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Promptchan API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  async generateImage(params: ImageGenerationParams): Promise<ImageGenerationResponse> {
    return this.makeRequest<ImageGenerationResponse>('/api/external/create', 'POST', params);
  }

  async generateVideo(params: VideoGenerationParams): Promise<VideoGenerationResponse> {
    return this.makeRequest<VideoGenerationResponse>('/api/external/video_v2/submit', 'POST', params);
  }

  async getVideoStatus(requestId: string): Promise<VideoStatusResponse> {
    return this.makeRequest<VideoStatusResponse>(`/api/external/video_v2/status/${requestId}`, 'GET');
  }

  async getVideoProgress(requestId: string): Promise<VideoProgressResponse> {
    return this.makeRequest<VideoProgressResponse>(`/api/external/video_v2/status_with_logs/${requestId}`, 'GET');
  }

  async getVideoResult(requestId: string): Promise<VideoResultResponse> {
    return this.makeRequest<VideoResultResponse>(`/api/external/video_v2/result/${requestId}`, 'GET');
  }

  async chat(params: ChatParams): Promise<ChatResponse> {
    return this.makeRequest<ChatResponse>('/api/external/chat', 'POST', params);
  }
}

// Export singleton instance
export const promptchanClient = new PromptchanClient();
