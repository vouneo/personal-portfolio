import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">vouneo's</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm an indie full-stack developer building my version of the digital 
        world one step at a time. All coding projects are built from the ground up,
        from planning and designing all the way to solving real-life problems with code.
      <br />
        All content is built the same way, from ideation and planning, all the way 
        to finalizing the content with artistic touches. I publish that content on my personal blog{' '}
      <a
        href="https://blog.vouneo.dev"
        target="_blank"
        /* ajustar los parámetros de decoration, text y demases */ 
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        rel="noreferrer noopener">

        vouneo's{' '}
      </a>
        to get more in touch with everybody.
      </p>
    </div>
  )
}

export default Intro;