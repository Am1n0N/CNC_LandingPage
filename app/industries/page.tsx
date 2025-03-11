import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);

interface CapabilityCardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, image, linkText }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors">
        {linkText} →
      </a>
    </div>
  </div>
);

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-[url('/api/placeholder/1920/500')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Industries We Work With
            </h1>
            <p className="text-gray-200">
              The industries we have specialized in for CNC Manufacturing, Rapid Prototyping and more.
            </p>
          </div>
        </div>
      </div>

      {/* Engineers Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              We&apos;re a Team of Highly Skilled and Experienced Engineers
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 dark:text-gray-300">
              We work with a variety of industries that rely on CNC parts that we make and we are able to provide our services to these industries because of our experience and expertise in CNC machining. We have a team of highly skilled and experienced engineers who are able to meet the specific needs of each industry we work with.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <IndustryCard
            title="Heavy Vehicles"
            description="CNC Machining is an important all the manufacturing process for the heavy vehicle industry. Our services are used to create a wide variety of components like suspension components, bumper bars, etc"
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Security Containment"
            description="We work with our clients to design and manufacture security containment solutions that meet their specific needs and requirements. All our products are made from the highest quality materials and are designed to meet the most stringent conditions."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Defence"
            description="The defence industry is a critical sector for any country. CNC Manufacturing helps in supporting the defence industry by manufacturing various components and assemblies that are essential to military operations."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Medical"
            description="CNC Manufacturing for the medical industry has become a critical component in medical device companies. It offers precise manufacturing processes essential for medical products. In addition, CNC technology can be used to create products that would be impossible to produce using traditional methods."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Marine"
            description="The marine industry is a vital part of the economy, and it helps uplift companies like ourselves with opportunities. We help them produce high-quality products like boats, motors and more."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Furniture"
            description="With CNC Manufacturing, we help furniture companies create custom furniture designs that are both functional and aesthetically manufacturing multiple. This helps them create innovative furniture pieces that will stand out from the competition."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Food Production"
            description="We use our experience of CNC manufacturing technology for our food industry customers, helping a food production business with everything that can make food processing more convenient, quality and safety."
            image="/api/placeholder/400/300"
          />
          <IndustryCard
            title="Custom"
            description="Our CNC Manufacturing services is perfect for creating custom parts prototypes, or even full-run production of specialized one-off items."
            image="/api/placeholder/400/300"
          />
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our</h2>
            <span className="bg-black dark:bg-gray-900 text-white px-3 py-1">Capabilities</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability cards here */}
            <CapabilityCard
              title="CNC Manufacturing"
              description="Make high quality CNC machined components using our substantial inventory of CNC Lathes and Machining centers from our Australian based factory."
              image="/api/placeholder/400/300"
              linkText="More on CNC Manufacturing"
            />
             <CapabilityCard
              title="Rapid Prototyping"
              description="With our highly skilled craftef and advanced machinery, we are able to provide a 24-hour service on any prototyping requirements."
              image="/api/placeholder/400/300"
              linkText="More on Rapid Prototyping"
            />
            <CapabilityCard
              title="Assembly Production"
              description="We provide full assembly from start to finish and can have a complete product delivered to your door. Our full production shop includes machining, fabrication, powder coating, welding."
              image="/api/placeholder/400/300"
              linkText="More on 3D CAD Design"
              />
          </div>

          {/* Other Services */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/api/placeholder/600/400" alt="Other Services" className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Other Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As well as CNC Machining we offer a wide range of manufacturing processes for your requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                <div>
                  <ul className="space-y-2">
                    <li>• Electroplating</li>
                    <li>• Powder coating</li>
                    <li>• TIG/MIG welding</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Laser Cutting</li>
                    <li>• Pressing / Bending</li>
                    <li>• And more...</li>
                  </ul>
                </div>
              </div>
              <a href="#" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                More on Our Other Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
