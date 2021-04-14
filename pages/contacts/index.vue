<template>
  <div>
    <div class="contact_page bg-mywhite mb-32">
      <div class="mt-16 container mx-auto">
        <div class="xl:ml-12 2xl:ml-24">
          <h1 class="contact_title text-6xl text-mygreen font-semibold">You have a project ?</h1>
        </div>
        <div class="flex md:flex-col lg:flex-row xl:ml-12 2xl:ml-24">
          <div class="contact_text w-1/2">
            <p class="mt-8 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique voluptas saepe. Distinctio, error? Vel, ullam dolorum blanditiis eius, est necessitatibus nisi, officia alias qui perspiciatis at. Nihil, provident molestiae!
            </p>
            <h3 class="mt-8 text-3xl text-myblack font-semibold">Or find me on social network</h3>
            <ul class="ml-12">
              <li class="py-4"><img class="inline -mt-2" src="~/assets/icon/twitter-alt.svg" alt=""> Twitter : <a class="text-mygreen font-medium" href="https://twitter.com/dams9ix">@dams9ix</a></li>
              <li class="py-4"><img class="inline -mt-2" src="~/assets/icon/instagram-alt.svg" alt=""> Instagram : <a class="text-mygreen font-medium" href="https://www.instagram.com/adam.9ix/">@adam.9ix</a></li>
              <li class="py-4"><img class="inline -mt-2" src="~/assets/icon/behance.svg" alt=""> Behance : <a class="text-mygreen font-medium" href="https://behance.com/dams9ix">dams9ix</a></li>
            </ul>
            <h4 class="mt-12 text-2xl text-black font-semibold">Send me an email or call me :)</h4>
            <p class="mt-4">
              Email : ad.aimedesire@gmail.com <br>
              Telephone : +225 07 78 81 21 11
            </p>
          </div>
          <div class="formm w-1/2 flex justify-center items-center">
            <div class="w-1/2 l-form">
              <form action="" class="form">
                <p class="text-5xl -mt-24 mb-12">✌️</p>
                <div class="form__div">
                  <input type="text" class="form__input" placeholder=" ">
                  <label for="" class="form__label">Your name</label>
                </div>
                <div class="form__div">
                  <input type="email" class="form__input" placeholder=" ">
                  <label for="" class="form__label">Your Email</label>
                </div>
                <div class="form__div">
                  <input type="text" class="form__input text" placeholder=" ">
                  <label for="" class="form__label">Your Message</label>
                </div>
                <input type="submit" class="form__button" value="Send it">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.bg-myblack {
  width: 700px;
}

.contact_title {
  padding-top: 180px;
}

.form {
  width: 390px;
  height: 600px;
  margin-top: -30px;
  padding: 7rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(92,99,105,.2);
  background: #f7f7f7;
  box-shadow:  20px 20px 60px #d0d0d0,
             -20px -20px 60px #fefefe;
}

.form p {
  text-align: center;
}

.form__div {
  position: relative;
  height: 65px;
  margin-bottom: 3rem;
}

.form__input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: var(--normal-font-size);
  border: 1px solid #0F0F0F;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
}

.form__label{
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  color: #0F0F0F;
  transition: .3s;
}

.form__button{
  display: block;
  margin-left: auto;
  margin-top: 20px;
  padding: .75rem 2rem;
  outline: none;
  border: none;
  background-color: #238c89;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: .5rem;
  cursor: pointer;
  transition: .3s;
}

.form__button:hover{
  box-shadow: 0 10px 36px rgba(0,0,0,.15);
}

/*Input focus move up label*/
.form__input:focus + .form__label{
  top: -.6rem;
  left: .8rem;
  color: #238c89;
  font-weight: 500;
  z-index: 10;
  background: #f7f7f7;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus)+ .form__label{
  display: none;
}

/*Input focus*/
.form__input:focus{
  border: 2px solid #238c89;
}
</style>
