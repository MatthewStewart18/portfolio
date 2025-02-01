// src/components/Footer/Footer.tsx
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="px-6 md:px-16 max-w-screen-2xl mx-auto mb-10">
        <hr className="h-[2px] bg-gray-200 mb-12 md:mb-16" />
        
        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-6 md:gap-4">
            <h4 className="text-xl md:text-3xl xl:text-4xl font-medium" id="section-contact">
              Let&apos;s Collaborate
            </h4>
            
            <a 
              href="mailto:privet.dev@pm.me" 
              className="text-lg md:text-xl xl:text-2xl group"
            >
              ms.dev2003@gmail.com
              <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
            </a>
          </div>
  
          {/* Links and Copyright */}
          <div className="flex flex-col md:flex-row-reverse w-full justify-between items-start md:items-center gap-8">
            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://www.github.com/matthewstewart18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                GitHub
                <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/matthew-stewart-296b46231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                LinkedIn
                <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
              </a>
            </div>
  
            {/* Copyright */}
            <p className="text-base text-gray-600">
              © MATTHEW STEWART {currentYear}
            </p>
          </div>
        </div>
      </footer>
    );
  }