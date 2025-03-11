import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "CNC Turning",
    description: "Our CNC turning and lathe services are perfect for those who need high-precision cylindrical parts. Whether you need simple shaft turning or complex turning with a variety of materials, so you can trust that your project will be delivered to the highest attainable standard. If you need just one piece or thousands, we can help.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'right'
    },
    bulletPoints: [
      "Usually in batches of specific materials",
      "Can be both one-off pieces and higher-volume production",
      "We offer prompt delivery and competitive prices"
    ]
  },
  {
    title: "CNC Milling",
    description: "CNC Milling is a machining process that uses computer-controlled rotary cutters to remove material from a workpiece. The process can be used to create a variety of shapes and custom parts.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'left'
    },
    bulletPoints: [
      "Great for small to large-sized and planar parts",
      "Ideal for complex and simple shapes",
      "Wide a variety of surface finishes"
    ]
  },
  {
    title: "5 Axis CNC Machining",
    description: "5 Axis CNC machining is a computer controlled machining tool that can move in 5 different axes simultaneously. This allows for complex parts where all the machine moves in 5 different axes: X, Y, Z, A, and B. This allows for intricate designs and complex geometries that would be impossible to achieve with traditional 3 axis CNC machine.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'right'
    },
    bulletPoints: [
      "Greater flexibility and accuracy",
      "Create complex parts with complex shapes",
      "Faster and more efficient"
    ]
  },
  {
    title: "Assembly Production",
    description: "We specialize in the assembly of precision mechanical components. The assembly process is a critical part of the manufacturing process, and it is important for putting together the various components that make up your final product. Our team of experts will work with you to ensure you have a complete product delivered to your door.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'left'
    },
    bulletPoints: [
      "Full assembly of your product from start to finish",
      "We will source all your materials as needed",
      "We will save design time and still meet the time"
    ]
  },
  {
    title: "Rapid Prototyping",
    description: "When you need parts fast, our rapid prototyping services can help. We offer a variety of advantages over other methods such as 3D printing. For instance, CNC machining can be used to make prototypes from a real metal, ensuring that your prototype will behave exactly like the final part. CNC machining can create prototypes with very tight tolerances, making it ideal for testing form, fit, and function.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'right'
    },
    bulletPoints: [
      "Design verification with real materials",
      "Create prototypes from a wide range of materials",
      "Test final properties from completed / near-finished"
    ]
  },
  {
    title: "Other Services",
    description: "Our machine shop offers a wide range of additional services and processes for your requirements. Including fabricating, Powder coating, EDM Wire cutting, Laser cutting, Gun drilling, EDM Plunging, Tool Making, Grinding and assembly.",
    image: {
      src: "/api/placeholder/600/400",
      align: 'left'
    },
    bulletPoints: []
  }
];

interface ServiceCardProps {
  title: string;
  description: string;
  image: { src: string; align: string };
  bulletPoints?: string[];
  isReversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, bulletPoints = [], isReversed = false }) => (
  <div className={`w-full flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 py-12`}>
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </div>
            <span className="text-gray-600 dark:text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full md:w-1/2">
      <div className="rounded-lg overflow-hidden h-72">
        <Image
          src={image.src}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
);

const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[url('/api/placeholder/1920/400')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Our CNC Manufacturing Capabilities
            </h1>
            <p className="text-gray-200">
              We deliver value and to the right processing and exact production
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Service sections */}
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            bulletPoints={service.bulletPoints}
            isReversed={service.image.align === 'left'}
          />
        ))}

        {/* Divider */}

        <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

        {/* Add other service sections with dividers... */}
      </div>
    </div>
  );
};

export default CapabilitiesPage;
