<script lang="ts">
    import { onMount } from "svelte";
    import Andres from '$lib/images/Andres.png';
    import expo from '$lib/images/Expo_logo.png';
    import telia from '$lib/images/Telia_logo.png';
    import tere from '$lib/images/Tere_logo.png';
    import Andres2 from '$lib/images/Andres2.png';

    let name: String;
    let uppername: String;
    let specialty: String;
    let quote: String;


    onMount(async () => {
    fetch("http://localhost:5000/partner/0")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        name = data.name;
        uppername = name.toUpperCase();
        specialty = data.specialty;
        quote = data.quote;
    }).catch(error => console.log(error))
    });
</script>

<div class="flex px-36 pt-10">
    <img src={Andres} alt="Andres" class="w-4/12">
    <div class="block pt-28 ml-20">
    <h1 class="text-4xl font-bold tracking-wide">{name} - <div class="text-estpurple">{specialty}</div></h1>
    <br>
    <p class="w-10/12 text-lg">{quote}</p>
    </div>
</div>

<br><br>

<div class="pl-32">
    <p class="font-semibold">{name} has worked with:</p>
    <br>
    <div class="flex">
    <img src={expo} alt="Expo logo" class="h-9 mr-20">
    <img src={telia} alt="Jeep logo" class="h-9 mr-20">
    <img src={tere} alt="Jeep logo" class="h-10 mr-20">
    <img src={expo} alt="Expo logo" class="h-9 mr-20">
    </div>
</div>

<br><br><br>

<div class="bg-stone-100 mx-auto w-4/5 py-20 pb-16 px-24">
    <h1 class="text-3xl font-bold tracking-wide text-center">{uppername}'S <div class="inline text-estpurple">EXPERIENCE</div></h1>
    <br>
    <div class="bg-stone-300 w-4/5 h-px mx-auto"></div>
    <br>
    <p class="text-justify text-stone-700 leading-7">
        Andres has worked in the field of marketing and project management for over twenty years. He also has a degree in Journalism and 
        Communications from the University of Tartu. For the last ten years he has been working as head of department or manager of 
        international projects: from 2007 until 2012 as head of marketing and communication department in <b>LHV Bank</b> and the following 
        three years as head of Estonian pavillion at <b>EXPO Milano 2015</b> World Exhibition and Deputy Commissioner General at <b>EXPO 2020 Dubai</b> 
        Estonian section. Andres speaks Estonian, Russian, English and Finnish. Andres has also worked as Marketing and Communication 
        consultant at <b>META Advisories</b> and for many other companies. Andres deals with clients from various fields who need strategical 
        communication, marketing and project management assistance.
    </p>
</div>

<br><br><br>

<div class="w-7/12 2xl:w-6/12 mx-auto">
    <h1 class="text-3xl font-bold tracking-normal leading-snug">Do you need help to decide? <div class="inline text-estpurple">At ESTAGENCY, we're dedicated to helping you achieve your goals.
    </div></h1>
    <br>
</div>
<div class="pt-5 flex">
    <button class="mx-auto bg-estpurple hover:bg-pink-800 text-white py-2 px-12 rounded-xl">
            Book Andres today!
    </button>
</div>

<br><br><br><br>