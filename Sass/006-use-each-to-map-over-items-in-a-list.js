<style type='text/sass'>
@each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
}
  
  
  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>