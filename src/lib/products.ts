export interface Product {
  id: number;
  name: string;
  price: number;
  category: "phones" | "laptops" | "accessories";
  image: string;
  description: string;
  specs: {
    [key: string]: string;
  };
  fullDescription: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Galaxy Ultra Pro",
    price: 1249,
    category: "phones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    description: "Revolutionary camera tech. Quantum processor. Premium build quality.",
    fullDescription: "Experience the ultimate in mobile technology with the Galaxy Ultra Pro. Featuring revolutionary camera technology with 200MP main sensor, quantum processor for blazing-fast performance, and premium titanium build. Advanced cooling system ensures peak performance during intensive tasks.",
    specs: {
      "Display": "6.8\" Dynamic AMOLED, 120Hz",
      "Processor": "Quantum Processor",
      "RAM": "12GB LPDDR5X",
      "Storage": "256GB/512GB",
      "Camera": "200MP Main + 50MP Ultra-wide",
      "Battery": "5000mAh",
      "Charging": "65W Fast Charging",
      "Weight": "218g"
    },
    inStock: true,
  },
  {
    id: 2,
    name: "Pixel Max Elite",
    price: 1399,
    category: "phones",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    description: "AI-powered intelligence. Ceramic frame. Revolutionary imaging.",
    fullDescription: "The Pixel Max Elite brings AI to the next level. With advanced machine learning capabilities, ceramic armor frame for durability, and revolutionary computational photography that captures every moment perfectly. Magic Eraser, Face Unblur, and Real Tone technology included.",
    specs: {
      "Display": "6.7\" OLED, 90Hz",
      "Processor": "Tensor Pro",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB/512GB",
      "Camera": "50MP Main + AI Processing",
      "Battery": "5500mAh",
      "Charging": "30W Fast + Wireless",
      "Weight": "221g"
    },
    inStock: true,
  },
  {
    id: 3,
    name: "NovaPhone X",
    price: 1099,
    category: "phones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    description: "Neural processing. Advanced photography. Seamless integration.",
    fullDescription: "NovaPhone X delivers cutting-edge neural processing technology with seamless ecosystem integration. Advanced photography engine captures stunning photos in any lighting condition. Premium design with anti-reflective display technology.",
    specs: {
      "Display": "6.5\" AMOLED, 144Hz",
      "Processor": "Neural Engine Pro",
      "RAM": "8GB LPDDR5",
      "Storage": "256GB",
      "Camera": "108MP Main + Telephoto",
      "Battery": "4800mAh",
      "Charging": "55W Fast",
      "Weight": "195g"
    },
    inStock: true,
  },
  {
    id: 4,
    name: 'StudioBook Pro 17"',
    price: 2599,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "Neural engine. Retina display. Professional-grade performance.",
    fullDescription: "The ultimate laptop for creative professionals. Featuring the latest neural engine for AI acceleration, stunning Retina display with ProMotion technology, and professional-grade components. Perfect for 4K video editing, 3D rendering, and demanding creative applications.",
    specs: {
      "Display": '17" Retina, 3456x2234, ProMotion',
      "Processor": "Neural Engine Pro Max",
      "RAM": "32GB Unified Memory",
      "Storage": "1TB SSD",
      "GPU": "20-core GPU",
      "Battery": "17 hours",
      "Weight": "2.1kg",
      "Ports": "3x Thunderbolt 4"
    },
    inStock: true,
  },
  {
    id: 5,
    name: "EliteBook Flex",
    price: 1899,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
    description: "Adaptive display. 14th Gen processing. Premium portability.",
    fullDescription: "The EliteBook Flex combines portability with power. 14th generation processors deliver exceptional performance, adaptive display adjusts to content, and premium aluminum chassis ensures durability. Business and creative professionals will appreciate the premium build quality.",
    specs: {
      "Display": '15.6" IPS, 1920x1080',
      "Processor": "14th Gen Core i7",
      "RAM": "16GB DDR5",
      "Storage": "512GB NVMe SSD",
      "Graphics": "Integrated Iris Xe",
      "Battery": "12 hours",
      "Weight": "1.7kg",
      "Ports": "2x USB-C, 2x USB-A"
    },
    inStock: true,
  },
  {
    id: 6,
    name: "Gaming Beast RTX",
    price: 2299,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
    description: "Next-gen graphics. 240Hz display. Ultimate gaming experience.",
    fullDescription: "Dominate every game with the Gaming Beast RTX. Next-generation graphics technology, 240Hz refresh rate for ultra-smooth gameplay, advanced cooling system, and RGB lighting customization. Built for serious gamers and content creators.",
    specs: {
      "Display": '16" IPS, 2560x1600, 240Hz',
      "Processor": "Intel Core i9-13th Gen",
      "RAM": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Graphics": "RTX 4090 Super",
      "Battery": "6 hours (gaming)",
      "Weight": "2.4kg",
      "Cooling": "Dual Vapor Chamber"
    },
    inStock: true,
  },
  {
    id: 7,
    name: "SoundPods Wireless",
    price: 279,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
    description: "Spatial audio. Lightning charging. Premium comfort design.",
    fullDescription: "Experience immersive sound with SoundPods Wireless. Spatial audio creates 3D soundscapes, Lightning charging ensures quick top-ups, and ergonomic design provides all-day comfort. Premium noise cancellation technology included.",
    specs: {
      "Driver Size": "11mm",
      "Frequency Range": "20Hz - 20kHz",
      "Battery": "7 hours per charge",
      "Charging Case": "30 hours total",
      "Charging": "Lightning/USB-C",
      "Water Resistance": "IPX4",
      "Weight": "5.1g each",
      "Controls": "Touch + Motion"
    },
    inStock: true,
  },
  {
    id: 8,
    name: "SmartWatch Pro X",
    price: 849,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    description: "Titanium construction. Advanced health tracking. Precision GPS.",
    fullDescription: "The SmartWatch Pro X is the pinnacle of wearable technology. Titanium construction provides durability, advanced health sensors track heart rate, blood oxygen, and stress levels. Precision dual-frequency GPS ensures accurate route tracking.",
    specs: {
      "Display": '1.9" AMOLED, Always-On',
      "Materials": "Titanium case, Ceramic back",
      "Battery": "18+ days",
      "Water Resistance": "100m",
      "Health Sensors": "ECG, SpO2, Temperature",
      "GPS": "Dual-band, Multi-GNSS",
      "Weight": "52g",
      "Connectivity": "Bluetooth 5.3, LTE"
    },
    inStock: true,
  },
  {
    id: 9,
    name: "NoiseCancel Pro",
    price: 379,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    description: "Industry-leading cancellation. 32-hour battery. Crystal clear calls.",
    fullDescription: "NoiseCancel Pro delivers industry-leading noise cancellation technology with an incredible 32-hour battery life. Crystal clear call quality with advanced microphone array, comfortable ear cushions for extended wear, and intuitive touch controls.",
    specs: {
      "Driver": "40mm",
      "Frequency": "4Hz - 40kHz",
      "Noise Cancellation": "-40dB",
      "Battery": "32 hours (ANC on)",
      "Charging": "USB-C, 2hr charge",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.3",
      "Microphones": "8-mic array"
    },
    inStock: true,
  },
  {
    id: 10,
    name: 'Tablet Pro 13"',
    price: 1199,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    description: "Neural chip. Liquid crystal display. Pencil compatibility.",
    fullDescription: "Tablet Pro 13 combines powerful performance with stunning visuals. Neural chip enables AI features, liquid crystal display provides exceptional color accuracy. Full stylus support for artists and professionals.",
    specs: {
      "Display": '13" Liquid Crystal, 2560x1600',
      "Processor": "Neural Chip Pro",
      "RAM": "8GB LPDDR5",
      "Storage": "256GB SSD",
      "Camera": "12MP + 10MP",
      "Battery": "15 hours",
      "Weight": "580g",
      "Stylus": "ProPen with pressure"
    },
    inStock: true,
  },
  {
    id: 11,
    name: "EarBuds Premium",
    price: 249,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    description: "360-degree sound. Active noise control. Wireless freedom.",
    fullDescription: "EarBuds Premium delivers 360-degree spatial sound with active noise control technology. Seamless wireless connectivity, premium sound quality, and all-day battery life. Perfect for music lovers and professionals.",
    specs: {
      "Driver": "10mm",
      "Battery": "6 hours per earbud",
      "Case": "24 hours total",
      "Charging": "Wireless charging",
      "ANC": "40dB reduction",
      "Water Resistance": "IPX5",
      "Weight": "4.2g",
      "Connectivity": "Bluetooth 5.2"
    },
    inStock: true,
  },
  {
    id: 12,
    name: "Velocity Phone",
    price: 849,
    category: "phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    description: "Lightning-fast processor. Hasselblad optics. Rapid charging tech.",
    fullDescription: "Velocity Phone combines lightning-fast performance with premium photography capabilities. Hasselblad-optimized optics capture stunning images, rapid charging technology gets you to 80% in minutes, and smooth 144Hz display.",
    specs: {
      "Display": '6.6" AMOLED, 144Hz',
      "Processor": "Snapdragon Elite",
      "RAM": "12GB LPDDR5X",
      "Storage": "256GB/512GB",
      "Camera": "50MP Hasselblad + Ultra-wide",
      "Battery": "5200mAh",
      "Charging": "120W Rapid Charge",
      "Weight": "199g"
    },
    inStock: true,
  },
];
