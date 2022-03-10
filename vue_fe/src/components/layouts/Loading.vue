<template>
    <div class="loading-container">
        <span class="dots-circle-spinner loading"></span>
    </div>
</template>

<style>
.loading-container{
  position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
}
.dots-circle-spinner {
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 1;
  vertical-align: middle;
  border-radius: 1em;
  transition: all 150ms linear 0s;
  transform: scale(0);
  opacity: 0;
  box-shadow: 2em 0em 0 0em, 1.41421356em 1.41421356em 0 -0.4375em, 0em 2em 0 -0.375em, -1.41421356em 1.41421356em 0 -0.3125em, -2em 0em 0 -0.25em, -1.41421356em -1.41421356em 0 -0.1875em, 0em -2em 0 -0.125em, 1.41421356em -1.41421356em 0 -0.0625em;
}
.dots-circle-spinner.loading {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 1;
  -webkit-animation: 1.5s linear 150ms normal infinite forwards running dots-circle-rotation;
          animation: 1.5s linear 150ms normal infinite forwards running dots-circle-rotation;
}

@-webkit-keyframes dots-circle-rotation {
  100% {
    box-shadow: 2em 0em 0 0em, 1.41421356em 1.41421356em 0 -0.4375em, 0em 2em 0 -0.375em, -1.41421356em 1.41421356em 0 -0.3125em, -2em 0em 0 -0.25em, -1.41421356em -1.41421356em 0 -0.1875em, 0em -2em 0 -0.125em, 1.41421356em -1.41421356em 0 -0.0625em;
  }
  87.5% {
    box-shadow: 2em 0em 0 -0.4375em, 1.41421356em 1.41421356em 0 -0.375em, 0em 2em 0 -0.3125em, -1.41421356em 1.41421356em 0 -0.25em, -2em 0em 0 -0.1875em, -1.41421356em -1.41421356em 0 -0.125em, 0em -2em 0 -0.0625em, 1.41421356em -1.41421356em 0 0em;
  }
  75% {
    box-shadow: 2em 0em 0 -0.375em, 1.41421356em 1.41421356em 0 -0.3125em, 0em 2em 0 -0.25em, -1.41421356em 1.41421356em 0 -0.1875em, -2em 0em 0 -0.125em, -1.41421356em -1.41421356em 0 -0.0625em, 0em -2em 0 0em, 1.41421356em -1.41421356em 0 -0.4375em;
  }
  62.5% {
    box-shadow: 2em 0em 0 -0.3125em, 1.41421356em 1.41421356em 0 -0.25em, 0em 2em 0 -0.1875em, -1.41421356em 1.41421356em 0 -0.125em, -2em 0em 0 -0.0625em, -1.41421356em -1.41421356em 0 0em, 0em -2em 0 -0.4375em, 1.41421356em -1.41421356em 0 -0.375em;
  }
  50% {
    box-shadow: 2em 0em 0 -0.25em, 1.41421356em 1.41421356em 0 -0.1875em, 0em 2em 0 -0.125em, -1.41421356em 1.41421356em 0 -0.0625em, -2em 0em 0 0em, -1.41421356em -1.41421356em 0 -0.4375em, 0em -2em 0 -0.375em, 1.41421356em -1.41421356em 0 -0.3125em;
  }
  37.5% {
    box-shadow: 2em 0em 0 -0.1875em, 1.41421356em 1.41421356em 0 -0.125em, 0em 2em 0 -0.0625em, -1.41421356em 1.41421356em 0 0em, -2em 0em 0 -0.4375em, -1.41421356em -1.41421356em 0 -0.375em, 0em -2em 0 -0.3125em, 1.41421356em -1.41421356em 0 -0.25em;
  }
  25% {
    box-shadow: 2em 0em 0 -0.125em, 1.41421356em 1.41421356em 0 -0.0625em, 0em 2em 0 0em, -1.41421356em 1.41421356em 0 -0.4375em, -2em 0em 0 -0.375em, -1.41421356em -1.41421356em 0 -0.3125em, 0em -2em 0 -0.25em, 1.41421356em -1.41421356em 0 -0.1875em;
  }
  12.5% {
    box-shadow: 2em 0em 0 -0.0625em, 1.41421356em 1.41421356em 0 0em, 0em 2em 0 -0.4375em, -1.41421356em 1.41421356em 0 -0.375em, -2em 0em 0 -0.3125em, -1.41421356em -1.41421356em 0 -0.25em, 0em -2em 0 -0.1875em, 1.41421356em -1.41421356em 0 -0.125em;
  }
  0% {
    box-shadow: 2em 0em 0 0em, 1.41421356em 1.41421356em 0 -0.4375em, 0em 2em 0 -0.375em, -1.41421356em 1.41421356em 0 -0.3125em, -2em 0em 0 -0.25em, -1.41421356em -1.41421356em 0 -0.1875em, 0em -2em 0 -0.125em, 1.41421356em -1.41421356em 0 -0.0625em;
  }
}

@keyframes dots-circle-rotation {
  100% {
    box-shadow: 2em 0em 0 0em, 1.41421356em 1.41421356em 0 -0.4375em, 0em 2em 0 -0.375em, -1.41421356em 1.41421356em 0 -0.3125em, -2em 0em 0 -0.25em, -1.41421356em -1.41421356em 0 -0.1875em, 0em -2em 0 -0.125em, 1.41421356em -1.41421356em 0 -0.0625em;
  }
  87.5% {
    box-shadow: 2em 0em 0 -0.4375em, 1.41421356em 1.41421356em 0 -0.375em, 0em 2em 0 -0.3125em, -1.41421356em 1.41421356em 0 -0.25em, -2em 0em 0 -0.1875em, -1.41421356em -1.41421356em 0 -0.125em, 0em -2em 0 -0.0625em, 1.41421356em -1.41421356em 0 0em;
  }
  75% {
    box-shadow: 2em 0em 0 -0.375em, 1.41421356em 1.41421356em 0 -0.3125em, 0em 2em 0 -0.25em, -1.41421356em 1.41421356em 0 -0.1875em, -2em 0em 0 -0.125em, -1.41421356em -1.41421356em 0 -0.0625em, 0em -2em 0 0em, 1.41421356em -1.41421356em 0 -0.4375em;
  }
  62.5% {
    box-shadow: 2em 0em 0 -0.3125em, 1.41421356em 1.41421356em 0 -0.25em, 0em 2em 0 -0.1875em, -1.41421356em 1.41421356em 0 -0.125em, -2em 0em 0 -0.0625em, -1.41421356em -1.41421356em 0 0em, 0em -2em 0 -0.4375em, 1.41421356em -1.41421356em 0 -0.375em;
  }
  50% {
    box-shadow: 2em 0em 0 -0.25em, 1.41421356em 1.41421356em 0 -0.1875em, 0em 2em 0 -0.125em, -1.41421356em 1.41421356em 0 -0.0625em, -2em 0em 0 0em, -1.41421356em -1.41421356em 0 -0.4375em, 0em -2em 0 -0.375em, 1.41421356em -1.41421356em 0 -0.3125em;
  }
  37.5% {
    box-shadow: 2em 0em 0 -0.1875em, 1.41421356em 1.41421356em 0 -0.125em, 0em 2em 0 -0.0625em, -1.41421356em 1.41421356em 0 0em, -2em 0em 0 -0.4375em, -1.41421356em -1.41421356em 0 -0.375em, 0em -2em 0 -0.3125em, 1.41421356em -1.41421356em 0 -0.25em;
  }
  25% {
    box-shadow: 2em 0em 0 -0.125em, 1.41421356em 1.41421356em 0 -0.0625em, 0em 2em 0 0em, -1.41421356em 1.41421356em 0 -0.4375em, -2em 0em 0 -0.375em, -1.41421356em -1.41421356em 0 -0.3125em, 0em -2em 0 -0.25em, 1.41421356em -1.41421356em 0 -0.1875em;
  }
  12.5% {
    box-shadow: 2em 0em 0 -0.0625em, 1.41421356em 1.41421356em 0 0em, 0em 2em 0 -0.4375em, -1.41421356em 1.41421356em 0 -0.375em, -2em 0em 0 -0.3125em, -1.41421356em -1.41421356em 0 -0.25em, 0em -2em 0 -0.1875em, 1.41421356em -1.41421356em 0 -0.125em;
  }
  0% {
    box-shadow: 2em 0em 0 0em, 1.41421356em 1.41421356em 0 -0.4375em, 0em 2em 0 -0.375em, -1.41421356em 1.41421356em 0 -0.3125em, -2em 0em 0 -0.25em, -1.41421356em -1.41421356em 0 -0.1875em, 0em -2em 0 -0.125em, 1.41421356em -1.41421356em 0 -0.0625em;
  }
}

</style>