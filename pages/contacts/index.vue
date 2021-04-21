<template>
  <div>
    <div class="contact_page bg-mywhite mb-32 w-11/12 m-auto">
      <div class="sm:mt-8 lg:mt-16 container mx-auto">
        <div class="xl:ml-12 2xl:ml-24">
          <h1 class="contact_title xs:text-4xl xs:ml-4 sm:text-5xl md:text-6xl text-mygreen font-semibold">You have a project ?</h1>
        </div>
        <div class="flex xs:flex-col xs:w-11/12 xs:m-auto sm:flex-col sm:w-full lg:flex-row xl:ml-12 2xl:ml-24">
          <div class="contact_text sm:w-full lg:w-1/2">
            <p class="mt-12 lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique voluptas saepe. Distinctio, error? Vel, ullam dolorum blanditiis eius, est necessitatibus nisi, officia alias qui perspiciatis at. Nihil, provident molestiae!
            </p>
            <h3 class="sm:ml-8 lg:ml-0 mt-8 text-3xl text-myblack font-semibold">Or find me on social network</h3>
            <ul class="ml-12 network_list">
              <li class="pt-5"><img class="inline -mt-2" src="~/assets/icon/twitter-alt.svg" alt=""> Twitter : <a class="text-mygreen font-medium" href="https://twitter.com/dams9ix">@dams9ix</a></li>
              <li class="pt-4"><img class="inline -mt-2" src="~/assets/icon/instagram-alt.svg" alt=""> Instagram : <a class="text-mygreen font-medium" href="https://www.instagram.com/adam.9ix/">@adam.9ix</a></li>
              <li class="pt-4"><img class="inline -mt-2" src="~/assets/icon/behance.svg" alt=""> Behance : <a class="text-mygreen font-medium" href="https://behance.com/dams9ix">dams9ix</a></li>
            </ul>
            <h4 class="sm:ml-8 lg:ml-0 mt-12 text-2xl text-black font-semibold">Send me an email or call me :)</h4>
            <p class="sm:ml-8 lg:ml-0 mt-4">
              Email : ad.aimedesire@gmail.com <br>
              Telephone : +225 07 78 81 21 11
            </p>
          </div>
          <div class="formm xs:mt-32 sm:w-full sm:mt-32 lg:w-1/2 lg:mt-0 flex justify-center items-center">
            <div class="xs:w-full sm:-ml-16 md:ml-0 w-1/2 l-form">
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

@media (max-width: 639px) {
  .form {
    width: 390px;
    margin: auto;
  }
}

@media (max-width: 450px) {
  .form {
    width: 95%;
    height: 540px;
    margin: auto;
  }

  .form__div {
    height: 50px;
  }
}

@media (max-width: 400px) {
  .network_list {
    margin-left: 10px;
  }
}

@media (max-width: 350px) {
  .form {
    width: 100%;
    height: 540px;
    margin: auto;
  }
}
</style>
