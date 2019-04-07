<template>
  <div>
    <div class="home-content">
      <div class="img-container zoomIn animated">
        <img src="../../src/assets/img/pasco.jpg" alt="" class="me" style="width: 250px" loading="lazy">
      </div>

      <h1>
        <span>Hi</span>, am Pascal
      </h1>

      <h4>Full stack Web Developer based in Nairobi Kenya.</h4>

      <div class="socialMedia animated fadeInUp">
        <a href="https://github.com/pascaloseko" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/pascal-oseko/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.home-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 350px;
}

.img-container {
  height: 240px;
  width: 240px;
  margin: 0 auto;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  animation-delay: 0.4s;
}

h4 {
  font-weight: normal;
  animation-name: moveInright;
  animation-duration: 2s;
  font-size: 15px;
}
h1 {
  display: inline-block;
  animation-name: moveInleft;
  animation-duration: 2s;
  font-weight: normal;
  font-family: teko;
  font-size: 35px;
}
span {
  color: #1fee29;
}

@keyframes homeSkew {
  from {
    transform: translateY(50px) skewY(20deg);
  }
  50% {
    transform: translateY(0) skewY(20deg);
  }
  to {
    transform: skewY(0);
  }
}
@keyframes moveInleft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  80% {
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  80% {
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.socialMedia {
  font-size: 20px;
  margin-top: 20px;
  a {
    color: white;
    padding: 8px;
  }
  a:hover {
    color: #1fee29;
  }
}
</style>
