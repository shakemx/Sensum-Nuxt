<template>
  <div class="p-0 m-0" id="inicio">
    <Navbar/>
    <Flotantes />
     <Hero />
      <br>
      <br>

      <Somos/>
      <br>


    <Accion1 />
    <TitularServicios/>
      <Soluciones/>
      <Legales/>
      <Especializadas/>
    <Accion2 />
    <Testimoniales/>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Somos from "@/components/home/Somos";
import TitularServicios from "@/components/home/TitularServicios";
import Soluciones from "@/components/home/Soluciones";
import Legales from "@/components/home/Legales";
import Especializadas from "@/components/home/Especializadas";
import Testimoniales from "@/components/home/Testimoniales";

export default {
  name: 'Home',
    components: {
        Hero,
        Somos,
        TitularServicios,
        Soluciones,
        Legales,
        Especializadas,
        Testimoniales,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/estilos.scss';
</style>
