<template>
  <div class="menu p-10 w-full flex flex-col justify-center items-center">
    <div class="mb-20 z-20">
      <img
        class="drop-shadow-md animate__animated animate__bounceInDown z-20"
        alt="水無月りあ"
        src="../assets/logo.png"
      >
    </div>

    <div class="mb-12 animate__animated animate__bounceInUp z-20">
      <router-link
        to="/twitch"
      >
        <img
          class="drop-shadow-lg bouncing"
          alt="twitch"
          src="../assets/btn_twitch.png"
        >
      </router-link>
    </div>

    <div class="mb-12 animate__animated animate__bounceInUp z-20">
      <a
        href="https://twitter.com/Ria_Minazuki"
        target="_blank"
      >
        <img
          class="drop-shadow-lg bouncing"
          alt="twitter"
          src="../assets/btn_twitter.png"
        >
      </a>
    </div>

    <div class="animate__animated animate__bounceInUp z-20">
      <a
        href="https://www.youtube.com/channel/UCi3kDUWxB4FkIlT1tReYSmg"
        target="_blank"
      >
        <img
          class="drop-shadow-lg bouncing"
          alt="youtube"
          src="../assets/btn_youtube.png"
        >
      </a>
    </div>
  </div>

  <div class="fixed bottom-0 right-20 animate__animated animate__bounceInRight invisible md:visible">
    <img
      class="drop-shadow-lg z-10"
      src="../assets/bg_character.png"
    >
  </div>

  <div class="fixed bottom-0 left-0 animate__animated animate__bounceInLeft invisible md:visible">
    <img
      class="drop-shadow-lg z-10"
      src="../assets/bg_alpaca.png"
    >
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  beforeMount () {
    const srcs = [
      'https://kit.fontawesome.com/4f3ce16e3e.js',
    ]

    for (const src of srcs) {
      const script = document.createElement('script')
      script.setAttribute('src', src)
      document.head.appendChild(script)
    }
  },
  async mounted () {
    const interval = 150
    const body = document.querySelector('body')

    function createHeart() {
        const heart = document.createElement('div')
        heart.className = 'fas fa-heart'
        heart.style.left = (Math.random() * 100) + 'vw'
        heart.style.animationDuration = (Math.random() * 3) + 5 + 's'
        body.appendChild(heart)
    }

    setInterval(createHeart, interval)
    setInterval(() => {
        const heartArr = document.querySelectorAll('.fa-heart')
        if (heartArr.length > 200) {
          heartArr[0].remove()
        }
    }, interval)
  }
}
</script>

<style>
.menu {
  min-height: 750px;
}

.bouncing:hover {
  display: inline-block;

  animation: swing;
  animation-duration: 0.75s;
}

.fa-heart {
  color: white;
  font-size: 1rem;
  position: absolute;
  transition: ease-out;
  animation: heartMove linear 1;
  top: -10vh;
  z-index: 0;
}

@keyframes heartMove {
  0% {
    opacity: 1;
    transform: translateY(-10vh);
  }
  100% {
    opacity: 0.1;
    transform: translateY(100vh);
  }
}
</style>