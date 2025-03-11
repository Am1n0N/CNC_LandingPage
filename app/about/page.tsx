export default function AboutPage() {
    return (
      <div className="w-full min-h-screen py-28">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] flex items-center text-white bg-black">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold">About Southside Engineering</h1>
            <p className="mt-2 text-lg">
              We are a family run business with over 45 years of experience. A bayside company based in Mordialloc.
            </p>
          </div>
          <img
            src="/image.png"
            alt="CNC machining"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold">A Family Business</h2>
            <p className="mt-4 text-gray-700">
              Southside Engineering is a family-run business that has been in operation for over 45 years. We specialise in CNC machining and manufacturing quality metal components and tools to service a vast range of industries throughout Australia.
            </p>
            <p className="mt-4 text-gray-700">
              We have an excellent reputation for delivering high-quality components, on time. Our workmanship is second to none and we take pride in our products. Our team of highly skilled engineers and machinists are able to manufacture components to your specific requirements.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/image.png" alt="CNC machining" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
  