
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const InnovatorsLab: React.FC = () => {
  // Veo State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [veoProgress, setVeoProgress] = useState('');

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searchSources, setSearchSources] = useState<{title: string, uri: string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Veo Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!selectedImage) return;
    
    // Check for API key if using Imagen/Veo
    if (!(await (window as any).aistudio.hasSelectedApiKey())) {
      await (window as any).aistudio.openSelectKey();
    }

    setIsGeneratingVideo(true);
    setVeoProgress('Preparing your canvas...');
    setGeneratedVideoUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = selectedImage.split(',')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'A gentle cinematic camera move breathing life into this memory',
        image: {
          imageBytes: base64Data,
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      const messages = [
        'Nurturing the pixels...',
        'Adding a breath of life...',
        'Fine-tuning the movements...',
        'Polishing your school memory...',
        'Almost ready to show you...'
      ];
      let msgIndex = 0;

      while (!operation.done) {
        setVeoProgress(messages[msgIndex % messages.length]);
        msgIndex++;
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await (ai as any).operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const fetchUrl = `${downloadLink}&key=${process.env.API_KEY}`;
        setGeneratedVideoUrl(fetchUrl);
      }
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes("Requested entity was not found.")) {
        alert("Please re-select your Paid API Key to continue.");
        await (window as any).aistudio.openSelectKey();
      }
      setVeoProgress('Oops! Something went wrong. Please try again.');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  // Search Handler
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setSearchResult(null);
    setSearchSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: searchQuery,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setSearchResult(response.text || "No information found.");
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = chunks.map((c: any) => ({
        title: c.web?.title || 'Source',
        uri: c.web?.uri || '#'
      })).filter((s: any) => s.uri !== '#');
      setSearchSources(sources);
    } catch (error) {
      console.error(error);
      setSearchResult("I couldn't fetch the latest info right now. Try another question?");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-[#fefce8] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-white rounded-3xl p-2 mx-auto shadow-sm border border-yellow-100">
            <img src="logo.png" alt="SVS" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#3e3a8f]">Innovators Lab</h1>
          <p className="text-stone-600 font-medium max-w-2xl mx-auto">
            Exploring the future of education with AI. Breathe life into photos with Veo or get global answers with our Info Desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Veo Animation Card */}
          <div className="calm-card p-10 space-y-8 flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold text-[#009640] flex items-center">
                <i className="fa-solid fa-wand-sparkles mr-3"></i>
                Memory Animator
              </h2>
              <p className="text-sm text-stone-500 font-medium">Upload a photo of your school life and let Veo create a cinematic motion clip.</p>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center border-4 border-dashed border-yellow-100 rounded-[2rem] p-8 bg-yellow-50/30 relative">
              {selectedImage ? (
                <div className="w-full space-y-6">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="px-6 py-2 rounded-full border border-yellow-200 text-stone-500 font-bold hover:bg-white transition-colors"
                    >
                      Change Photo
                    </button>
                    {!generatedVideoUrl && (
                      <button 
                        onClick={generateVideo}
                        disabled={isGeneratingVideo}
                        className="btn-friendly bg-[#009640] text-white disabled:opacity-50"
                      >
                        {isGeneratingVideo ? <i className="fa-solid fa-circle-notch animate-spin mr-2"></i> : <i className="fa-solid fa-play mr-2"></i>}
                        Animate Memory
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-stone-400 group-hover:text-[#009640] group-hover:scale-110 transition-all shadow-sm">
                    <i className="fa-solid fa-cloud-arrow-up text-2xl"></i>
                  </div>
                  <p className="mt-4 font-bold text-stone-500">Click to upload photo</p>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}

              {isGeneratingVideo && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-8 border-yellow-100 rounded-full"></div>
                    <div className="absolute inset-0 border-8 border-[#009640] rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <p className="text-xl font-serif font-bold text-[#3e3a8f]">{veoProgress}</p>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Veo Video Generation (fast-preview)</p>
                </div>
              )}
            </div>

            {generatedVideoUrl && (
              <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                  <video controls className="w-full h-full" src={generatedVideoUrl} autoPlay loop></video>
                </div>
                <div className="flex justify-between items-center bg-yellow-100/30 p-4 rounded-2xl">
                   <p className="text-xs font-bold text-[#009640] uppercase tracking-widest">Generation Successful!</p>
                   <button onClick={() => setGeneratedVideoUrl(null)} className="text-stone-400 hover:text-red-500 transition-colors">
                     <i className="fa-solid fa-trash-can"></i>
                   </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Info Desk Card */}
          <div className="calm-card p-10 space-y-8 flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold text-[#3e3a8f] flex items-center">
                <i className="fa-solid fa-magnifying-glass-location mr-3"></i>
                Global Info Desk
              </h2>
              <p className="text-sm text-stone-500 font-medium">Ask questions about world events, news, or general knowledge using real-time Google Search grounding.</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="e.g. Latest science news or SVS school values..." 
                  className="w-full px-8 py-5 rounded-[2rem] bg-yellow-50/50 border border-yellow-100 focus:outline-none focus:ring-4 focus:ring-[#3e3a8f]/10 font-bold"
                />
                <button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="absolute right-3 top-3 w-14 h-14 bg-[#3e3a8f] text-white rounded-[1.5rem] flex items-center justify-center hover:bg-[#2d2a6a] transition-colors disabled:opacity-50"
                >
                  {isSearching ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-paper-plane"></i>}
                </button>
              </div>

              <div className="flex-grow bg-white rounded-[2rem] p-8 border border-yellow-50 min-h-[300px] shadow-inner relative overflow-y-auto">
                {searchResult ? (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <p className="text-stone-700 leading-relaxed font-medium whitespace-pre-wrap">{searchResult}</p>
                    {searchSources.length > 0 && (
                      <div className="pt-6 border-t border-yellow-50">
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Citations & Sources</p>
                        <div className="flex flex-wrap gap-2">
                          {searchSources.map((source, i) => (
                            <a 
                              key={i} 
                              href={source.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-yellow-50 text-[#3e3a8f] rounded-full text-xs font-bold border border-yellow-100 hover:bg-yellow-100 transition-colors flex items-center"
                            >
                              <i className="fa-solid fa-link mr-2 text-[10px]"></i>
                              {source.title.length > 25 ? source.title.substring(0, 25) + '...' : source.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300 space-y-4">
                    <i className="fa-solid fa-brain text-5xl opacity-20"></i>
                    <p className="font-bold text-sm tracking-widest uppercase">Waiting for your question...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovatorsLab;
