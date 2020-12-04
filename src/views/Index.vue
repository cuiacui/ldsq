<template>
  <div>
        <Nav></Nav>
        <Center></Center>
        <Spcard text="视频"></Spcard>
        <Spcard text="年轻一代"></Spcard>
        <Spcard text="十亿消费者"></Spcard>
        <Hot></Hot>
        <Fotter></Fotter>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Fotter from '../components/Fotter'
import Hot from '../components/Hot'
import Spcard from '../components/Spcard'
import Center from '../components/Center'

export default {
  components:{
    Fotter,
    Nav,
    Hot,
    Center,
    Spcard
  }
}
</script>

<style>
</style>