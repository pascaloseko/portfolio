<template>
  <div class="projects-container">
    <div class="projects-content">
      <div class="header">
        <div class="fadeInDown animated">
          <button :class="{'active-btn': (projects==1)}" @click="projects=1">
            <i class="fas fa-desktop" style="font-size: 20px;"></i>
            <p style="font-size: 20px; font-family:teko;">WEB</p>
          </button>
        </div>
      </div>

      <div class="container" v-if="projects==1">
        <div class="row">
          <!------------------------------------------------------------------------------------------------ - -->
          <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
            <div class="card-cover">
              <a href="https://pascaloseko.github.io/github-search/profile" target="_blank" class="animated fadeInUp">
                <img class="A" src="../../src/assets/img/git-search.png" alt loading="lazy">
                <img class="B" src="../../src/assets/img/git-search2.png" alt loading="lazy">
              </a>
            </div>
          </dir>
          <!------------------------------------------------------------------------------------------------ - -->
          <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
            <div class="card-cover">
              <a href="https://newslist21.herokuapp.com" target="_blank" class="animated fadeInUp">
                <img class="A" src="../../src/assets/img/news-list.png" alt loading="lazy">
                <img class="B" src="../../src/assets/img/news-list2.png" alt loading="lazy">
              </a>
            </div>
          </dir>
          <!------------------------------------------------------------------------------------------------ - -->
          <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
            <div class="card-cover">
              <a href="https://stock-trader254.netlify.com/" target="_blank" class="animated fadeInUp">
                <img class="A" src="../../src/assets/img/stock-trader.png" alt loading="lazy">
                <img class="B" src="../../src/assets/img/stock-trader-2.png" alt loading="lazy">
              </a>
            </div>
          </dir>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.projects-container {
  width: 100%;
  a {
    color: #fff;
    text-decoration: none;
  }
}
.projects-content {
  box-sizing: border-box;

  width: 100%;
  margin: auto;
}
.header {
  text-align: center;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 30px;
  button {
    background-color: transparent;

    text-align: center;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 20px;

    margin-left: 0px;
    color: #474747;
  }
  .active-btn {
    background-color: transparent;

    text-align: center;
    border: none;
    cursor: pointer;
    outline: none;

    margin-left: 0px;
    color: #1fee29;
  }
}
.card-cover {
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 0 10px 2px #606060;

  img {
    width: 100%;
    height: auto;
  }
  .B {
    display: none;
  }
}
.card-cover:hover {
  .A {
    display: none;
  }
  .B {
    display: block;
  }
}

@media (max-width: 1069px) {
  .projects-content {
    padding-top: 90px;
  }
}
@media (max-width: 460px) {
  .projects-content {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    .header {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";

export default {
    name: "projects",
    data(){
        return {
            projects: 1,
        }
    },

    methods: {
        ...mapActions({
            openModal: 'openModalAction',
        }),
    }
}
</script>
