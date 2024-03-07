<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded transition-transform transform hover:scale-125"
        src="~/assets/img/welcome.jpg"
        alt="Hermosa foto de bienvenida"
        loading="eager"
        format="avif"
        width="812"
        height="812"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        El mejor ocio y hostelería en tu ciudad
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        CitySights te ayuda a encontrar el mejor plan para ti. Ya seas un 'foodie', o un apasasionado de la cultura, 
        tenemos justo lo que buscas.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/"
          target="_blank"
          rel="noopener"
          >Comienza a explorar</LandingLink
        >

      </div>
    </div>
  </main>
</template>
