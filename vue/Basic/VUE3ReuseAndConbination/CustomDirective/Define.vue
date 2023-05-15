<!--This file is define the directive -->
<script setup>
import {createApp} from "vue";
const app = createApp({})
// registry
app.directive("my-directive" , {
//   write the life function

})
// registry(function)
app.directive("my-directive" , () => {
//   write the function need call
})
// getter , return the result
const myDirective = app.directive("my-directive")
</script>
